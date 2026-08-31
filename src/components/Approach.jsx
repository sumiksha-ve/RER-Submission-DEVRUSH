import React from "react";
import { ApproachBotanicalComposition } from "../assets/BotanicalIllustrations";

export const Approach = () => {
  return (
    <section id="approach" className="approach-section">
      <div className="container">
        <div className="approach-grid">
          {/* Left Column: Editorial Philosophy */}
          <div className="approach-content">
            <span className="eyebrow">OUR APPROACH</span>

            <h2 className="approach-heading">
              <span className="highlight">Healing</span> is a journey,{" "}
              <span className="text-italic">not a quick fix.</span>
            </h2>

            <div className="approach-paragraphs">
              <p>
                We believe meaningful wellbeing starts by understanding the
                whole person. Our practitioners work with you to create a
                clear, practical path forward.
              </p>
              <p>
                There is no one-size-fits-all approach. True health emerges when
                we honor the intricate relationships between mental clarity,
                physical mobility, cellular nourishment, and deep restorative
                rest.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="approach-pillars">
              <div className="pillar-item">
                <h4 className="pillar-title">Integrative Blueprint</h4>
                <p className="pillar-desc">
                  Collaborative mapping connecting emotional, physical, and
                  lifestyle cues.
                </p>
              </div>
              <div className="pillar-item">
                <h4 className="pillar-title">Sustainable Rhythm</h4>
                <p className="pillar-desc">
                  Gentle, progressive micro-habits that integrate effortlessly into
                  everyday life.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Botanical Composition + 4 Organic Bubbles */}
          <div className="approach-visual">
            <ApproachBotanicalComposition />
          </div>
        </div>
      </div>
    </section>
  );
};
