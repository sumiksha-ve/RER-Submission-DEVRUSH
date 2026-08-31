import React from "react";
import { LeafGlyph } from "../assets/BotanicalIllustrations";

export const Footer = ({ onNavigate }) => {
  const scrollTo = (id) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <LeafGlyph className="w-5 h-5" color="#3E8A49" />
              <span className="brand-logo-text">Serene</span>
            </div>
            <p className="footer-tagline">“Your health, whole and thriving.”</p>
          </div>

          {/* Navigation Links */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("services");
              }}
              className="footer-nav-link"
            >
              Services
            </a>
            <a
              href="#approach"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("approach");
              }}
              className="footer-nav-link"
            >
              Our Approach
            </a>
            <a
              href="#practitioners"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("practitioners");
              }}
              className="footer-nav-link"
            >
              Practitioners
            </a>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("booking");
              }}
              className="footer-nav-link"
            >
              Book a Call
            </a>
          </nav>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>© 2026 Serene · Privacy · Contact</div>
          <div style={{ color: "var(--muted-light)", fontSize: "0.8rem" }}>
            Mindful, integrative care for the whole person.
          </div>
        </div>
      </div>
    </footer>
  );
};
