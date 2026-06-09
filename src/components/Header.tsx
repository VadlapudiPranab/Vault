import { ArrowUpRight, Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { HeaderNavItem } from "./HeaderNavItem";

const headerLinks = [
  { label: "PLAY", href: "#games", sectionId: "games" },
  { label: "FEEL", href: "#services", sectionId: "services" },
  { label: "REMEMBER", href: "#ai", sectionId: "ai" },
  { label: "STUDIO", href: "#about", sectionId: "about" },
  { label: "CONTACT", href: "#contact", sectionId: "contact" }
];
const contactHref = "mailto:info@vaultgamesstudio.com";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 40);
    updateHeader();

    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.42;
      let current = "";

      headerLinks
        .map((link) => {
          const section = document.getElementById(link.sectionId);
          return section ? { id: link.sectionId, top: section.getBoundingClientRect().top } : null;
        })
        .filter((section): section is { id: string; top: number } => Boolean(section))
        .sort((a, b) => a.top - b.top)
        .forEach((section) => {
          if (section.top <= activationLine) {
            current = section.id;
          }
        });

      setActiveSection(current || "hero");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${hoveredNav ? "has-nav-hover" : ""}`}>
        <span className="header-light-sweep" aria-hidden="true" />
        <span className="header-hover-aura" aria-hidden="true" />
        <div className="site-header-inner">
          <a href="/" onClick={handleHomeClick} className="group site-logo" aria-label="Vault Productions home">
            <img src="/logo/vault logo.png" alt="" className="site-logo-mark" />
            <span className="site-logo-text">
              <span>Vault</span>
              <small>Productions</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation" onMouseLeave={() => setHoveredNav(null)}>
            {headerLinks.map((link) => (
              <HeaderNavItem
                key={link.label}
                label={link.label}
                href={link.href}
                active={activeSection === link.sectionId}
                onClick={() => setActiveSection(link.sectionId)}
                onHoverChange={setHoveredNav}
              />
            ))}
          </nav>

          <div className="site-header-actions">
            <a href={contactHref} className="site-cta">
              Start a Project
              <ArrowUpRight size={16} />
            </a>
            <a href="#mobile-menu" className="site-menu-button" aria-label="Open menu">
              <Menu size={23} />
            </a>
          </div>
        </div>
      </header>
      <nav id="mobile-menu" className="site-mobile-menu" aria-label="Mobile navigation">
        <a href="#" className="site-mobile-close" aria-label="Close menu">
          <X size={24} />
        </a>
        <div className="site-mobile-menu-inner">
          {headerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`site-mobile-link ${activeSection === link.sectionId ? "is-active" : ""}`}
              onClick={() => setActiveSection(link.sectionId)}
            >
              {link.label}
            </a>
          ))}
          <a href={contactHref} className="site-mobile-cta">
            Start a Project
            <ArrowUpRight size={20} />
          </a>
        </div>
      </nav>
    </>
  );
}
