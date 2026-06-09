import type { CSSProperties } from "react";

type HeaderNavItemProps = {
  label: string;
  href: string;
  active: boolean;
  onClick: () => void;
  onHoverChange?: (label: string | null) => void;
};

const navParticles = [
  { left: "14%", top: "55%", x: "-11px", size: "2px", delay: "0ms", duration: "1500ms" },
  { left: "24%", top: "34%", x: "8px", size: "3px", delay: "90ms", duration: "1700ms" },
  { left: "35%", top: "65%", x: "-5px", size: "2px", delay: "180ms", duration: "1400ms" },
  { left: "44%", top: "43%", x: "13px", size: "4px", delay: "20ms", duration: "1900ms" },
  { left: "53%", top: "58%", x: "-15px", size: "2px", delay: "260ms", duration: "1600ms" },
  { left: "61%", top: "30%", x: "9px", size: "3px", delay: "130ms", duration: "1750ms" },
  { left: "70%", top: "62%", x: "-8px", size: "2px", delay: "320ms", duration: "1550ms" },
  { left: "80%", top: "42%", x: "12px", size: "3px", delay: "220ms", duration: "1850ms" },
  { left: "31%", top: "48%", x: "15px", size: "2px", delay: "410ms", duration: "1650ms" },
  { left: "66%", top: "52%", x: "-12px", size: "4px", delay: "360ms", duration: "1950ms" }
];

export function HeaderNavItem({ label, href, active, onClick, onHoverChange }: HeaderNavItemProps) {
  return (
    <a
      href={href}
      className={`nav-item ${active ? "is-active" : ""}`}
      onClick={onClick}
      onFocus={() => onHoverChange?.(label)}
      onBlur={() => onHoverChange?.(null)}
      onMouseEnter={() => onHoverChange?.(label)}
      onMouseLeave={() => onHoverChange?.(null)}
    >
      <span className="nav-particles" aria-hidden="true">
        {navParticles.map((particle, index) => (
          <span
            key={`${label}-particle-${index}`}
            style={
              {
                "--left": particle.left,
                "--top": particle.top,
                "--x": particle.x,
                "--size": particle.size,
                "--delay": particle.delay,
                "--duration": particle.duration
              } as CSSProperties
            }
          />
        ))}
      </span>
      <span className="nav-dot" aria-hidden="true" />
      <span className="nav-label">{label}</span>
      <span className="nav-underline" aria-hidden="true" />
    </a>
  );
}
