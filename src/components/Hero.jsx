import React from "react";
import { HeroBotanicalBlob } from "../assets/BotanicalIllustrations";

export const Hero = ({ onBookClick, onApproachClick }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Editorial Copy */}
        <div className="hero-content">
          <span className="eyebrow">WHOLE-PERSON WELLBEING</span>

          <h1 className="hero-heading">
            Your <span className="highlight">health</span>,{" "}
            <em className="text-italic">whole and thriving.</em>
          </h1>

          <p className="hero-description">
            Serene brings thoughtful, integrative care together to support your
            mental wellbeing, body, sleep and nutrition — with a plan made
            around you.
          </p>

          <div className="hero-actions">
            <button
              onClick={() => {
                if (onBookClick) onBookClick();
                else scrollTo("booking");
              }}
              className="btn-pill btn-primary"
            >
              Book a consultation
            </button>
            <button
              onClick={() => {
                if (onApproachClick) onApproachClick();
                else scrollTo("approach");
              }}
              className="btn-pill btn-secondary"
            >
              Learn our approach
            </button>
          </div>

          {/* Subdued Client Trust Area */}
          <div className="hero-clients">
            <span className="clients-badge">CLIENTS</span>
            <p className="clients-text">
              Trusted by people building healthier, more balanced lives.
            </p>
            <div className="clients-avatars-row">
              <div className="client-avatar-stack" aria-hidden="true">
                <div className="client-avatar-item">AL</div>
                <div className="client-avatar-item">KR</div>
                <div className="client-avatar-item">SJ</div>
                <div className="client-avatar-item">EW</div>
              </div>
              <div className="client-rating-pill">
                <span style={{ color: "#718B72" }}>★★★★★</span>
                <span>4.9 / 5.0 Care Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Botanical Organic Artwork Visual */}
        <div className="hero-visual">
          <HeroBotanicalBlob />
        </div>
      </div>
    </section>
  );
};
