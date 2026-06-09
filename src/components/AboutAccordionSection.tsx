import { AnimatePresence, motion } from "framer-motion";
import { Box, Minus, Plus, ShieldCheck, Sparkles, Star, Target, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useId, useState } from "react";

type AccordionItem = {
  number: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  chips?: Array<{ label: string; icon?: LucideIcon; accent?: "cyan" | "orange" }>;
  bullets?: string[];
  process?: Array<{ step: string; title: string; detail: string }>;
};

const accordionItems: AccordionItem[] = [
  {
    number: "01",
    eyebrow: "Who We Are",
    title: "Builders / Creators / Problem Solvers",
    paragraphs: [
      "We are a team of creative strategists, producers, technologists, and storytellers passionate about turning ideas into experiences.",
      "With backgrounds spanning gaming, media, digital products, content production, and emerging technologies, we combine creative thinking with practical execution to deliver work that engages audiences and drives results."
    ],
    chips: [
      { label: "20+ Years Combined Experience", icon: Star, accent: "cyan" },
      { label: "100M+ Audience Reach", icon: Users, accent: "orange" },
      { label: "Creative • Technology • Production • Innovation", icon: Sparkles, accent: "cyan" }
    ]
  },
  {
    number: "02",
    eyebrow: "What We Do",
    title: "Turning Ideas Into Experiences",
    paragraphs: [
      "We help brands, products, and creators bring ambitious ideas to life through strategy, design, storytelling, and production."
    ],
    bullets: [
      "Creative Campaigns & Advertising",
      "Content & Video Production",
      "Interactive & Digital Experiences",
      "Product & Platform Development",
      "Virtual Production & Visualization",
      "Brand Storytelling & Creative Strategy"
    ]
  },
  {
    number: "03",
    eyebrow: "Our Approach",
    title: "Creativity Powered By Process",
    paragraphs: [
      "Great ideas are only valuable when they can be executed consistently.",
      "Our approach combines creative direction, production expertise, and modern technology to move projects from concept to launch efficiently without compromising quality."
    ],
    process: [
      { step: "01", title: "Strategy", detail: "Understanding goals, audiences, and opportunities." },
      { step: "02", title: "Concept", detail: "Developing ideas, narratives, and creative direction." },
      { step: "03", title: "Production", detail: "Executing with speed, precision, and attention to detail." },
      { step: "04", title: "Refinement", detail: "Testing, improving, and optimizing every deliverable." }
    ]
  },
  {
    number: "04",
    eyebrow: "Why Work With Us",
    title: "Built For Modern Creative Challenges",
    paragraphs: [
      "Today’s brands need more than content. They need systems that can scale.",
      "We combine creative thinking, operational discipline, and emerging technologies to help organizations move faster while maintaining quality."
    ],
    bullets: [
      "Experience Across Industries",
      "End-To-End Execution",
      "Creative + Technical Expertise",
      "Focused On Results"
    ]
  }
];

const contextCards = [
  {
    icon: Sparkles,
    title: "Human Creativity / Intelligent Execution",
    copy: "We build experiences that connect with audiences and create lasting value."
  },
  {
    icon: Target,
    title: "Strategy To Launch / We Do It All",
    copy: "From concept and production to launch and optimization."
  },
  {
    icon: Box,
    title: "Built For Scale / Designed For Impact",
    copy: "Systems and content built to perform across platforms and audiences."
  },
  {
    icon: ShieldCheck,
    title: "Trusted By Brands, Creators & Innovators",
    copy: "Long-term partnerships. Real results."
  }
];

function DetailPanel({ item }: { item: AccordionItem }) {
  return (
    <motion.div
      className="about-accordion-panel"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="about-panel-copy">
        {item.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="about-panel-context">
        {item.chips && (
          <div className="about-chip-grid">
            {item.chips.map(({ label, icon: Icon = Sparkles, accent = "cyan" }) => (
              <span className={`about-chip about-chip-${accent}`} key={label}>
                <Icon size={18} />
                {label}
              </span>
            ))}
          </div>
        )}

        {item.bullets && (
          <div className="about-bullet-grid">
            {item.bullets.map((bullet) => (
              <span key={bullet}>
                <Zap size={16} />
                {bullet}
              </span>
            ))}
          </div>
        )}

        {item.process && (
          <div className="about-process-grid">
            {item.process.map(({ step, title, detail }) => (
              <div key={step} className="about-process-item">
                <span>{step}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function AboutAccordionSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const sectionId = useId();

  return (
    <section id="about" className="about-context-section">
      <div className="about-context-inner">
        <motion.div
          className="about-context-heading"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>About Us / Our Context</p>
          <h2>About Us</h2>
        </motion.div>

        <div className="about-accordion-list">
          {accordionItems.map((item, index) => {
            const isActive = activeIndex === index;
            const contentId = `${sectionId}-accordion-${index}`;

            return (
              <motion.article
                key={item.number}
                className={`about-accordion-row ${isActive ? "is-active" : ""}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  className="about-accordion-button"
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={contentId}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <span className="about-accordion-number">{item.number}</span>
                  <span className="about-accordion-title-group">
                    <span>{item.eyebrow}</span>
                    <strong>{item.title}</strong>
                  </span>
                  <span className="about-accordion-icon" aria-hidden="true">
                    {isActive ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={contentId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                      className="about-accordion-content"
                    >
                      <DetailPanel item={item} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        <div className="about-context-strip">
          <motion.div
            className="about-context-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="about-context-strip-heading">
            <h3>Our Context</h3>
          </div>
          <div className="about-context-card-grid">
            {contextCards.map(({ icon: Icon, title, copy }, index) => (
              <motion.article
                className="about-context-card"
                key={title}
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.56, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>
                  <Icon size={22} />
                </span>
                <h4>{title}</h4>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
