import { ArrowUpRight } from "lucide-react";
import { worldShowcases } from "../data";

export function FeaturedGames() {
  return (
    <section id="games" className="worlds-section">
      <div className="worlds-inner">
        <div className="worlds-header">
          <div>
            <h2>Best of 2 Worlds</h2>
            <p>
              From atmospheric PC adventures to engaging mobile experiences, we create worlds people play, feel and
              remember
            </p>
          </div>
          <a href="#contact" className="worlds-header-link">
            Explore All Games
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="worlds-grid">
          {worldShowcases.map((world) => (
            <a
              key={world.title}
              href={world.href}
              target="_blank"
              rel="noreferrer"
              className={`group world-card world-card-${world.tone}`}
            >
              <img src={world.image} alt="" className="world-card-image" />
              <div className="world-card-fog" />
              <div className="world-card-content">
                <p className="world-card-category">{world.category}</p>
                <h3>{world.title}</h3>
                {world.subtitle && <p className="world-card-subtitle">{world.subtitle}</p>}
                <p className="world-card-description">{world.description}</p>
                <span className="world-card-cta">
                  {world.cta}
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
