import { Calendar, Rocket } from "lucide-react";
import type { PointerEvent } from "react";
import { useEffect, useRef } from "react";

export function FinalCTA() {
  const contactHref = "mailto:info@vaultgamesstudio.com";
  const panelRef = useRef<HTMLDivElement | null>(null);
  const wolfRef = useRef<HTMLImageElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0, orbX: 0, orbY: 0, visible: 0, glow: 0 });
  const currentRef = useRef({ x: 0, y: 0, orbX: 0, orbY: 0, visible: 0, glow: 0 });
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      reduceMotionRef.current = motionQuery.matches;
      if (motionQuery.matches) {
        targetRef.current = { x: 0, y: 0, orbX: 0, orbY: 0, visible: 0, glow: 0 };
        currentRef.current = { x: 0, y: 0, orbX: 0, orbY: 0, visible: 0, glow: 0 };
        if (wolfRef.current) {
          wolfRef.current.style.transform = "";
        }
        if (orbRef.current) {
          orbRef.current.style.opacity = "0";
        }
      }
    };

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    let frameId = 0;

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const lerp = 0.095;

      current.x += (target.x - current.x) * lerp;
      current.y += (target.y - current.y) * lerp;
      current.orbX += (target.orbX - current.orbX) * 0.14;
      current.orbY += (target.orbY - current.orbY) * 0.14;
      current.visible += (target.visible - current.visible) * 0.18;
      const currentGlow = Number.isFinite(current.glow) ? current.glow : 0;
      const targetGlow = Number.isFinite(target.glow) ? target.glow : 0;
      current.glow = currentGlow + (targetGlow - currentGlow) * 0.16;

      if (!reduceMotionRef.current && panelRef.current) {
        panelRef.current.style.setProperty("--cta-mouse-x", `${current.orbX}px`);
        panelRef.current.style.setProperty("--cta-mouse-y", `${current.orbY}px`);
        panelRef.current.style.setProperty("--cta-hover", String(Math.max(0, Math.min(1, current.glow))));
      }

      if (!reduceMotionRef.current && wolfRef.current) {
        const rotateY = current.x * 10;
        const rotateX = current.y * -6;
        const translateX = current.x * 22;
        const translateY = current.y * 12;
        wolfRef.current.style.transform = `translateY(-50%) perspective(1100px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(${translateX}px, ${translateY}px, 0)`;
      }

      if (!reduceMotionRef.current && orbRef.current) {
        orbRef.current.style.opacity = String(Math.max(0, Math.min(1, current.visible)));
        orbRef.current.style.transform = `translate3d(${current.orbX}px, ${current.orbY}px, 0)`;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotionRef.current || !panelRef.current) {
      return;
    }

    const rect = panelRef.current.getBoundingClientRect();
    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;
    const normalizedX = (localX / rect.width - 0.5) * 2;
    const normalizedY = (localY / rect.height - 0.5) * 2;

    targetRef.current = {
      x: Math.max(-1, Math.min(1, normalizedX)),
      y: Math.max(-1, Math.min(1, normalizedY)),
      orbX: localX,
      orbY: localY,
      visible: localX / rect.width > 0.48 ? 1 : 0,
      glow: 1
    };
  };

  const handlePointerLeave = () => {
    targetRef.current = {
      ...targetRef.current,
      x: 0,
      y: 0,
      visible: 0,
      glow: 0
    };
  };

  return (
    <section id="contact" className="section-shell">
      <div ref={panelRef} className="cta-panel" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
        <div className="cta-wisp-field" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="cta-copy">
          <h2 className="cta-headline">
            <span>You bring the vision</span>
            <span>We build the world</span>
          </h2>
          <p className="cta-subtext">
            Games / Experiences / Stories
            <span>Built to connect / Designed to last</span>
          </p>
          <div className="cta-actions">
            <a href={contactHref} className="hero-button hero-button-primary">
              Start a Project
              <Rocket size={18} />
            </a>
            <a href={contactHref} className="hero-button hero-button-secondary">
              Schedule a Call
              <Calendar size={18} />
            </a>
          </div>
        </div>

        <div className="cta-wolf-stage" aria-hidden="true">
          <div className="cta-wolf-glow" />
          <img ref={wolfRef} src="/logo/vault logo 3d.png" alt="" className="cta-wolf-image" draggable="false" />
          <div ref={orbRef} className="cta-cursor-orb">
            <span>EYES ON YOU</span>
          </div>
        </div>
      </div>
    </section>
  );
}
