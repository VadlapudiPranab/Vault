import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { buildCards } from "../data";

export function WhatWeBuild() {
  return (
    <section id="services" className="services-section">
      <div className="services-inner">
        <div className="services-heading">
          <p>
            <span />
            Services
            <span />
          </p>
          <h2>What We Build</h2>
          <p className="services-subtitle">
            Games, prototypes, AI visuals, and campaigns built for speed, feel, and scale
          </p>
        </div>

        <div className="services-card-grid">
          {buildCards.map(({ title, description, icon: Icon, image, accent }) => (
            <a
              key={title}
              href="#contact"
              className="service-image-card service-desktop-card"
              style={{ "--service-accent": accent } as CSSProperties}
            >
              <img src={image} alt="" className="service-card-image" />
              <div className="service-card-shade" />
              <div className="service-card-content">
                <span className="service-card-icon">
                  <Icon size={24} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="service-card-arrow">
                <ArrowUpRight size={22} />
              </span>
            </a>
          ))}
        </div>

        <div className="services-toggle-list">
          {buildCards.map(({ title, description, icon: Icon, image, accent }, index) => (
            <details
              key={`${title}-toggle`}
              className="service-toggle-card"
              style={{ "--service-accent": accent } as CSSProperties}
              open={index === 0}
            >
              <summary>
                <span className="service-toggle-media">
                  <img src={image} alt="" />
                </span>
                <span className="service-toggle-title">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                </span>
                <span className="service-toggle-icon">
                  <Icon size={20} />
                </span>
              </summary>
              <div className="service-toggle-body">
                <p>{description}</p>
                <a href="#contact">
                  Start a Project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
