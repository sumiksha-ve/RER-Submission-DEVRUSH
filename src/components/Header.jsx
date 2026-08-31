import React, { useState, useEffect } from "react";
import { LeafGlyph } from "../assets/BotanicalIllustrations";

export const Header = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Brand Logo with Cursive Typography */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="brand-logo"
          aria-label="Serene Home"
        >
          <LeafGlyph className="logo-leaf" color="#3E8A49" />
          <span className="brand-logo-text">Serene</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
            className="nav-link"
          >
            Services
          </a>
          <a
            href="#approach"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("approach");
            }}
            className="nav-link"
          >
            Our Approach
          </a>
          <a
            href="#practitioners"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("practitioners");
            }}
            className="nav-link"
          >
            Practitioners
          </a>
          <button
            onClick={() => {
              if (onBookClick) onBookClick();
              else scrollToSection("booking");
            }}
            className="nav-btn-booking"
          >
            Book a Call
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "hamburger-active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>
      </div>

      {/* Mobile Slide-Out Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "mobile-drawer-open" : ""}`}>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("services");
          }}
          className="mobile-nav-link"
        >
          Services
        </a>
        <a
          href="#approach"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("approach");
          }}
          className="mobile-nav-link"
        >
          Our Approach
        </a>
        <a
          href="#practitioners"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("practitioners");
          }}
          className="mobile-nav-link"
        >
          Practitioners
        </a>
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            if (onBookClick) onBookClick();
            else scrollToSection("booking");
          }}
          className="btn-pill btn-primary"
          style={{ marginTop: "12px", width: "100%", justifyContent: "center" }}
        >
          Book a Call
        </button>
      </div>
    </header>
  );
};
