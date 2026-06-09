import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { heroButtons } from "../data";

const HERO_MEDIA_SRC = "/videos/beat scroll.webp";
const MAX_SCRUB_FRAMES = 48;

type DecodedImage = CanvasImageSource & {
  close?: () => void;
  displayHeight?: number;
  displayWidth?: number;
};

type WebImageDecoder = {
  close?: () => void;
  decode: (options?: { frameIndex?: number }) => Promise<{ image: DecodedImage }>;
  tracks: {
    ready: Promise<void>;
    selectedTrack?: {
      frameCount?: number;
    } | null;
  };
};

const beats = [
  {
    word: "PLAY",
    title: "Mobile + PC Games",
    detail: "Fun, fast, and memorable worlds built for players.",
    position: "left",
    accent: "#18C8FF",
    textColor: "#B8F3FF"
  },
  {
    word: "FEEL",
    title: "",
    detail: "Player journeys shaped through emotion, interaction, and flow.",
    position: "left",
    accent: "#00AEEF",
    textColor: "#5FE4FF"
  },
  {
    word: "REMEMBER",
    title: "Art Direction + Worldbuilding",
    detail: "Visual stories designed to stay with the audience.",
    position: "left",
    accent: "#FF7A1A",
    textColor: "#FF9B3D"
  }
];

function getReducedFrameIndex(progress: number, frameCount: number) {
  const safeFrameCount = Math.max(1, frameCount);
  const sampleCount = Math.min(MAX_SCRUB_FRAMES, safeFrameCount);

  if (sampleCount <= 1) {
    return 0;
  }

  const sampleIndex = Math.round(progress * (sampleCount - 1));
  return Math.min(safeFrameCount - 1, Math.round((sampleIndex / (sampleCount - 1)) * (safeFrameCount - 1)));
}

function getBeatPositionClass(position: string) {
  if (position === "center") return "hero-beat-word-center";
  if (position === "right") return "hero-beat-word-right";
  return "hero-beat-word-left";
}

function getSourceSize(source: DecodedImage) {
  const image = source as {
    displayHeight?: number;
    displayWidth?: number;
    height?: number;
    naturalHeight?: number;
    naturalWidth?: number;
    videoHeight?: number;
    videoWidth?: number;
    width?: number;
  };

  return {
    height: image.displayHeight ?? image.naturalHeight ?? image.videoHeight ?? image.height ?? 1,
    width: image.displayWidth ?? image.naturalWidth ?? image.videoWidth ?? image.width ?? 1
  };
}

function drawCover(canvas: HTMLCanvasElement, source: DecodedImage) {
  const context = canvas.getContext("2d");
  if (!context) return;

  const { height: sourceHeight, width: sourceWidth } = getSourceSize(source);
  const scale = Math.max(canvas.width / sourceWidth, canvas.height / sourceHeight);
  const width = sourceWidth * scale;
  const height = sourceHeight * scale;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(source, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
}

function ScrollScrubMedia({ progress }: { progress: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const decoderRef = useRef<WebImageDecoder | null>(null);
  const fallbackImageRef = useRef<HTMLImageElement | null>(null);
  const frameCountRef = useRef(1);
  const lastFrameIndexRef = useRef(-1);
  const progressRef = useRef(progress);
  const requestRef = useRef(0);

  useEffect(() => {
    progressRef.current = progress;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const decoder = decoderRef.current;
    if (decoder) {
      const frameCount = Math.max(1, frameCountRef.current);
      const frameIndex = getReducedFrameIndex(progress, frameCount);
      if (frameIndex === lastFrameIndexRef.current) return;
      lastFrameIndexRef.current = frameIndex;
      const requestId = ++requestRef.current;

      decoder
        .decode({ frameIndex })
        .then(({ image }) => {
          if (requestId === requestRef.current) {
            drawCover(canvas, image);
          }
          image.close?.();
        })
        .catch(() => {
          const fallbackImage = fallbackImageRef.current;
          if (fallbackImage?.complete) {
            drawCover(canvas, fallbackImage);
          }
        });
      return;
    }

    const fallbackImage = fallbackImageRef.current;
    if (fallbackImage?.complete) {
      drawCover(canvas, fallbackImage);
    }
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let cancelled = false;

    const sizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * pixelRatio));
      canvas.height = Math.max(1, Math.round(rect.height * pixelRatio));
    };

    const drawCurrentFallbackFrame = () => {
      const fallbackImage = fallbackImageRef.current;
      if (fallbackImage?.complete) {
        drawCover(canvas, fallbackImage);
      }
    };

    const drawDecodedFrame = async (force = false) => {
      const decoder = decoderRef.current;
      if (!decoder) {
        drawCurrentFallbackFrame();
        return;
      }

      const frameCount = Math.max(1, frameCountRef.current);
      const frameIndex = getReducedFrameIndex(progressRef.current, frameCount);
      if (!force && frameIndex === lastFrameIndexRef.current) return;
      lastFrameIndexRef.current = frameIndex;
      const requestId = ++requestRef.current;
      const { image } = await decoder.decode({ frameIndex });

      if (!cancelled && requestId === requestRef.current) {
        drawCover(canvas, image);
      }
      image.close?.();
    };

    const handleResize = () => {
      sizeCanvas();
      lastFrameIndexRef.current = -1;
      void drawDecodedFrame(true);
    };

    sizeCanvas();
    window.addEventListener("resize", handleResize);

    const fallbackImage = new Image();
    fallbackImage.decoding = "async";
    fallbackImage.onload = drawCurrentFallbackFrame;
    fallbackImage.src = HERO_MEDIA_SRC;
    fallbackImageRef.current = fallbackImage;

    const DecoderConstructor = (
      window as typeof window & {
        ImageDecoder?: new (options: { data: ArrayBuffer; type: string }) => WebImageDecoder;
      }
    ).ImageDecoder;

    if (DecoderConstructor) {
      fetch(HERO_MEDIA_SRC)
        .then((response) => response.arrayBuffer())
        .then(async (data) => {
          if (cancelled) return;
          const decoder = new DecoderConstructor({ data, type: "image/webp" });
          await decoder.tracks.ready;
          if (cancelled) {
            decoder.close?.();
            return;
          }
          decoderRef.current = decoder;
          frameCountRef.current = decoder.tracks.selectedTrack?.frameCount || 1;
          await drawDecodedFrame(true);
        })
        .catch(drawCurrentFallbackFrame);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      decoderRef.current?.close?.();
      decoderRef.current = null;
    };
  }, []);

  return <canvas className="hero-media-image" ref={canvasRef} aria-hidden="true" />;
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeBeat, setActiveBeat] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const active = beats[activeBeat];

  const updateBeat = useCallback(() => {
    const section = heroRef.current;
    if (!section) return;

    const maxScroll = section.offsetHeight - window.innerHeight;
    const rawProgress = maxScroll <= 0 ? 0 : (window.scrollY - section.offsetTop) / maxScroll;
    const nextProgress = Math.min(1, Math.max(0, rawProgress));
    const nextBeat = Math.min(beats.length - 1, Math.max(0, Math.floor(nextProgress * beats.length)));

    setScrollProgress(nextProgress);
    setActiveBeat(nextBeat);
  }, []);

  useLayoutEffect(() => {
    updateBeat();
  }, [updateBeat]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(updateBeat);

    window.addEventListener("scroll", updateBeat, { passive: true });
    window.addEventListener("resize", updateBeat);
    window.addEventListener("pageshow", updateBeat);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateBeat);
      window.removeEventListener("resize", updateBeat);
      window.removeEventListener("pageshow", updateBeat);
    };
  }, [updateBeat]);

  return (
    <section id="hero" ref={heroRef} className="hero-scroll-section">
      <div className="hero-stage">
        <div className="hero-glow hero-glow-cyan" style={{ boxShadow: `0 0 120px ${active.accent}33` }} />
        <div className="hero-glow hero-glow-white" />
        <div className="hero-media" aria-hidden="true">
          <div
            className="h-full w-full"
            style={{
              transform: `translate3d(${(0.5 - scrollProgress) * 22}px, 0, 0) scale(${1.02 + scrollProgress * 0.025})`
            }}
          >
            <ScrollScrubMedia progress={scrollProgress} />
          </div>
        </div>

        <div className="hero-progress" aria-hidden="true">
          <span style={{ width: `${scrollProgress * 100}%`, backgroundColor: active.accent }} />
        </div>

        <div className="hero-stage-inner">
          <div className="hero-beat-words" aria-label="Opening scroll beats">
            {beats.map((beat, index) => (
              <motion.div
                key={beat.word}
                initial={false}
                aria-hidden={index !== activeBeat}
                className={`hero-beat-word ${getBeatPositionClass(beat.position)} ${
                  index === activeBeat ? "is-active" : ""
                }`}
                animate={{
                  opacity: index === activeBeat ? 1 : 0,
                  filter: "none"
                }}
                style={{ "--beat-color": beat.textColor } as CSSProperties}
                transition={{ duration: 0.58, ease: [0.4, 0, 0.2, 1] }}
              >
                {beat.word}
              </motion.div>
            ))}
          </div>

          <div className="hero-copy">
            <motion.div
              className="max-w-md border-t border-vault-line pt-6"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16 }}
            >
              {active.title && <p className="text-2xl font-semibold leading-8 text-white sm:text-3xl">{active.title}</p>}
              <p className={`${active.title ? "mt-3" : ""} text-lg leading-8 text-white/75 sm:text-xl`}>
                {active.detail}
              </p>
              {activeBeat === beats.length - 1 && (
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {heroButtons.map(({ label, icon: Icon, primary }) => (
                    <a
                      key={label}
                      href="#contact"
                      className={`hero-button ${primary ? "hero-button-primary" : "hero-button-secondary"}`}
                    >
                      {label}
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
