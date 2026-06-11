import { ArrowRight } from "lucide-react";

const contactEmail = "info@vaultgamesstudio.com";
const contactHref = `mailto:${contactEmail}`;
const footerLinks = [
  { label: "Games", href: "#games" },
  { label: "SayHelloAI", href: "#ai" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: contactHref }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-service/" }
];

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Vaultproductions",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 8.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C16.2 5 12 5 12 5s-4.2 0-7.1.2c-.4 0-1.3.1-2.1.9C2.2 6.7 2 8.2 2 8.2S1.8 10 1.8 11.8v1.7C1.8 15.3 2 17 2 17s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 6.8.2 6.8.2s4.2 0 7.1-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.7c0-1.8-.2-3.6-.2-3.6Z" />
        <path d="m10 15.5 5.4-3.2L10 9.1v6.4Z" fill="#030303" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vaultproductions_games/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.4" fill="#030303" />
        <circle cx="17" cy="7.1" r="1.1" fill="#030303" />
      </svg>
    )
  },
  {
    label: "X",
    href: "https://x.com/VaultGamess",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.2 4h4.1l4.3 5.7L17.4 4H20l-6.2 7.3L20.6 20h-4.1l-4.8-6.3L6.3 20H3.7l6.8-7.9L4.2 4Z" />
      </svg>
    )
  },
  {
    label: "Facebook",
    href: "https://facebook.com/profile.php?id=61567481996339",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.1 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.5 1.6-1.5H17V5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.7v3h2.6v7h3.8Z" />
      </svg>
    )
  },
  {
    label: "Discord",
    href: "https://discord.gg/5ETKPYAF",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.4 5.3A16 16 0 0 0 15.5 4l-.5 1.1a14 14 0 0 0-6 0L8.5 4a16 16 0 0 0-3.9 1.3C2.1 9 1.5 12.5 1.9 16c1.6 1.2 3.1 1.9 4.6 2.4l1-1.6c-.6-.2-1.1-.5-1.6-.8l.4-.3c3.1 1.4 6.4 1.4 9.4 0l.4.3c-.5.3-1 .6-1.6.8l1 1.6c1.5-.5 3-1.3 4.6-2.4.5-4-.6-7.5-2.7-10.7Zm-11 8.4c-.9 0-1.7-.8-1.7-1.8s.7-1.8 1.7-1.8c.9 0 1.7.8 1.7 1.8s-.8 1.8-1.7 1.8Zm7.2 0c-.9 0-1.7-.8-1.7-1.8s.7-1.8 1.7-1.8c.9 0 1.7.8 1.7 1.8s-.8 1.8-1.7 1.8Z" />
      </svg>
    )
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@vault_productions",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 3h3c.3 2 1.5 3.4 3.6 4v3.1c-1.3 0-2.5-.4-3.6-1.1v5.9c0 3.8-2.6 6.1-6.1 6.1-3.1 0-5.6-2.2-5.6-5.2 0-3.4 2.9-5.6 6.4-5.1V14c-1.5-.5-3 .3-3 1.8 0 1.2 1 2 2.2 2 1.4 0 2.4-.8 2.4-2.8V3Z" />
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer className="border-t border-vault-line">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-7 lg:grid-cols-[1.25fr_0.7fr_0.7fr_1.25fr_1fr] lg:px-10">
        <div>
          <div className="grid h-12 w-12 place-items-center border border-vault-line bg-white/[0.03] p-1">
            <img src="/logo/vault logo.png" alt="Vault Productions" className="brand-logo-image" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
            Vault Productions builds games, experience systems, and AI-native creative campaigns.
          </p>
          <a href={contactHref} className="mt-5 inline-flex text-sm font-semibold text-vault-cyan transition hover:text-white">
            {contactEmail}
          </a>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase text-white">Explore</h3>
          <div className="mt-4 flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-white/50 transition hover:text-vault-cyan">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase text-white">Legal</h3>
          <div className="mt-4 flex flex-col gap-3">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/50 transition hover:text-vault-cyan"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase text-white">Socials</h3>
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label={social.label}
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase text-white">Stay Updated</h3>
          <form className="mt-4 flex border border-vault-line bg-white/[0.02]" action={contactHref} method="post" encType="text/plain">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
            />
            <button
              className="grid w-12 place-items-center border-l border-vault-line text-vault-cyan transition hover:bg-vault-cyan hover:text-black"
              aria-label="Submit email"
              type="submit"
            >
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-vault-line px-5 py-5 text-center text-xs uppercase text-white/30 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
        <span>© 2026 Vault Productions. All worlds reserved.</span>
        <a
          href="/privacy-policy/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-vault-cyan"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-of-service/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-vault-cyan"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
