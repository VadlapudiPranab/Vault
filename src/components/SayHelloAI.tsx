import { ArrowUpRight, Play, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

const contactEmailHref = "mailto:info@vaultgamesstudio.com?subject=Let%27s%20Talk%20About%20A%20Project";

const mainVideo = {
  id: "c5W6ZKZ3a1E",
  title: "SayHelloAI Main Showreel",
  eyebrow: "Main Cinematic",
  heading: "SayHelloAI Showreel",
  description: "A cinematic showcase of AI visual direction, production craft, and campaign-ready storytelling"
};

const portfolioVideo = {
  id: "zekmsiT-JCU",
  title: "SayHelloAI Portfolio Film",
  eyebrow: "Portfolio Viewing",
  heading: "Campaign Portfolio",
  description: "A focused display reel for brand films, product visuals, trailers, and modern attention systems"
};

const ctaLinks = ["Let's Talk", "Start a Project", "Send Email"];

const localVideos = [
  {
    title: "FPV Motion Study",
    src: "/videos/SH FPV video.mp4"
  },
  {
    title: "Game Visual Test",
    src: "/videos/SH game video .mp4"
  },
  {
    title: "AI Demo Reel",
    src: "/videos/SH demo video 2.mp4"
  },
  {
    title: "Cinematic Study",
    src: "/videos/SH video 4.mp4"
  }
];

const clients = [
  "Burn Shawarma",
  "Radio Nyra",
  "9Gems",
  "Lakme",
  "Rachabanda Food Truck",
  "Rajumudi",
  "Ista",
  "NRI Connect UK"
];
const marqueeClients = [...clients, ...clients];

const industryImages = [
  {
    title: "Health & Wellness",
    src: "/logo/Health & Wellness.png",
    width: 1122,
    height: 1402
  },
  {
    title: "Gaming & Esports",
    src: "/logo/SH_Gaming & Esports.png",
    width: 1122,
    height: 1402
  },
  {
    title: "Real Estate",
    src: "/logo/SH_Real Estate.png",
    width: 1122,
    height: 1402
  },
  {
    title: "Entertainment & Media",
    src: "/logo/SH_Entertainment & Media.png",
    width: 1060,
    height: 1484
  },
  {
    title: "Beauty & Fashion",
    src: "/logo/SH_Beauty & Fashion.png",
    width: 1122,
    height: 1402
  },
  {
    title: "Restaurants",
    src: "/logo/sh-restaurants-fixed.png",
    width: 1122,
    height: 1402
  },
  {
    title: "Hospitality",
    src: "/logo/SH_hospitality.png",
    width: 1058,
    height: 1487
  }
];
const posterMarqueeImages = [...industryImages, ...industryImages];

function YouTubeShowcase({
  video,
  variant = "main"
}: {
  video: typeof mainVideo;
  variant?: "main" | "portfolio";
}) {
  const embedUrl = `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className={`sayhello-youtube-showcase sayhello-youtube-${variant}`}>
      <iframe
        title={video.title}
        src={embedUrl}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <span className="sayhello-youtube-shade" />
      <span className="sayhello-youtube-copy">
        <span>{video.eyebrow}</span>
        <strong>{video.heading}</strong>
        <em>{video.description}</em>
      </span>
      <span className="sayhello-youtube-play" aria-hidden="true">
        <Play size={34} fill="currentColor" />
      </span>
    </div>
  );
}

function LocalVideoPreview({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.24 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return <video ref={videoRef} src={src} muted loop playsInline preload="metadata" />;
}

export function SayHelloAI() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof localVideos)[number] | null>(null);

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState(null, "", "#contact");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      window.location.href = contactEmailHref;
    }, 520);
  };

  return (
    <section id="ai" className="sayhello-section">
      <div className="sayhello-inner">
        <div className="sayhello-title-block">
          <h2 className="sayhello-title">
            SayHello<span>AI</span>
          </h2>
          <p className="sayhello-headline">
            Human Creativity
            <br />
            AI Velocity
          </p>
          <p className="sayhello-copy">
            Cinematic AI content, brand films, product visuals, trailers, and campaign assets built for modern
            attention
          </p>
        </div>

        <div className="sayhello-youtube-stack">
          <YouTubeShowcase video={mainVideo} />
          <YouTubeShowcase video={portfolioVideo} variant="portfolio" />
        </div>

        <div className="sayhello-local-grid" aria-label="SayHelloAI video studies">
          {localVideos.map((video) => (
            <div
              key={video.src}
              className="sayhello-local-card"
              onPointerUp={() => setSelectedVideo(video)}
            >
              <LocalVideoPreview src={video.src} />
              <span className="sayhello-local-shade" />
              <button
                type="button"
                className="sayhello-local-hitbox"
                onClick={() => setSelectedVideo(video)}
                aria-label={`Open ${video.title}`}
              >
                <span className="sayhello-local-play" aria-hidden="true">
                  <Play size={18} fill="currentColor" />
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="sayhello-motion-band">
          <img
            src="/videos/2ndsection-optimized.webp"
            alt="SayHelloAI cinematic scroll study"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="industry-scroll-section">
          <div className="industry-scroll" aria-label="SayHelloAI work and industries">
            {posterMarqueeImages.map((image, index) => (
              <a
                href="#contact"
                className="industry-image-card"
                key={`${image.src}-${index}`}
                onClick={handleContactClick}
                aria-label={`Let's talk about ${image.title}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  width={image.width}
                  height={image.height}
                  loading={index < industryImages.length ? "eager" : "lazy"}
                  decoding="async"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="sayhello-cta-row">
          {ctaLinks.map((label) => (
            <a key={label} href="#contact" className="sayhello-cta" onClick={handleContactClick}>
              {label}
              <ArrowUpRight size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="client-marquee-section">
        <p>Trusted by brands, creators, and founders</p>
        <div className="client-marquee">
          {[0, 1].map((group) => (
            <div className="client-marquee-track" key={group} aria-hidden={group === 1 ? "true" : undefined}>
              {marqueeClients.map((client, index) => (
                <span className="client-marquee-item" key={`${group}-${client}-${index}`}>
                  {client}
                  <span className="client-dot">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="sayhello-video-modal" role="dialog" aria-modal="true" aria-label={selectedVideo.title}>
          <button
            type="button"
            className="sayhello-video-close"
            onClick={() => setSelectedVideo(null)}
            aria-label="Close video"
          >
            <X size={24} />
          </button>
          <div className="sayhello-video-box">
            <video src={selectedVideo.src} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </section>
  );
}
