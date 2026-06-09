import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  link?: string;
  accent?: "cyan" | "orange";
};

export function SectionHeader({ eyebrow, title, subtitle, link, accent = "cyan" }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && (
          <p className={`eyebrow ${accent === "orange" ? "text-vault-orange" : "text-vault-cyan"}`}>
            {eyebrow}
          </p>
        )}
        <h2 className="display-title">{title}</h2>
        {subtitle && <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">{subtitle}</p>}
      </div>
      {link && (
        <a
          href="#contact"
          className={`section-link ${accent === "orange" ? "hover:text-vault-orange" : "hover:text-vault-cyan"}`}
        >
          {link}
        </a>
      )}
    </div>
  );
}
