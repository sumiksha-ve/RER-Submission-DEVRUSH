import React, { useEffect } from "react";
import { PractitionerAvatar } from "../assets/BotanicalIllustrations";

// Service Detail Modal
export const ServiceModal = ({ service, onClose, onBookService }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div style={{ marginBottom: "16px" }}>
          <span className="eyebrow">SERVICE DETAILS · {service.id}</span>
          <h3 style={{ fontSize: "2rem", marginBottom: "8px" }}>{service.title}</h3>
          <div style={{ display: "flex", gap: "16px", color: "var(--muted)", fontSize: "0.95rem" }}>
            <span>⏱ Duration: <strong>{service.duration}</strong></span>
            <span>💳 Investment: <strong>{service.price || service.priceLabel}</strong></span>
          </div>
        </div>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "24px" }}>
          {service.fullDescription}
        </p>

        <div style={{ marginBottom: "28px" }}>
          <h4 style={{ fontSize: "1.1rem", marginBottom: "10px", color: "var(--ink)" }}>
            What We Address
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {service.focusAreas?.map((area, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: "var(--sage-light)",
                  color: "var(--ink)",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.85rem",
                  fontWeight: "500"
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
          <button onClick={onClose} className="btn-pill btn-secondary">
            Close
          </button>
          <button
            onClick={() => onBookService(service)}
            className="btn-pill btn-primary"
          >
            Book this session →
          </button>
        </div>
      </div>
    </div>
  );
};

// Practitioner Profile Modal
export const PractitionerModal = ({ practitioner, onClose, onBookWithPractitioner }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!practitioner) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
          <div style={{ width: "80px", height: "80px", flexShrink: 0 }}>
            <PractitionerAvatar type={practitioner.avatarType} name={practitioner.name} />
          </div>
          <div>
            <span className="eyebrow" style={{ marginBottom: "4px" }}>
              {practitioner.specialty}
            </span>
            <h3 style={{ fontSize: "1.85rem", margin: "0 0 4px 0" }}>{practitioner.name}</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: 0 }}>
              {practitioner.title}
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ fontSize: "1.1rem", marginBottom: "8px", color: "var(--ink)" }}>About</h4>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--muted)" }}>
            {practitioner.fullBio}
          </p>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h4 style={{ fontSize: "1.1rem", marginBottom: "10px", color: "var(--ink)" }}>
            Credentials & Training
          </h4>
          <ul style={{ paddingLeft: "20px", color: "var(--muted)", fontSize: "0.92rem", lineHeight: "1.8" }}>
            {practitioner.credentials?.map((cred, idx) => (
              <li key={idx}>{cred}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
          <button onClick={onClose} className="btn-pill btn-secondary">
            Close
          </button>
          <button
            onClick={() => onBookWithPractitioner(practitioner)}
            className="btn-pill btn-primary"
          >
            Consult with {practitioner.name.split(" ")[0]} →
          </button>
        </div>
      </div>
    </div>
  );
};

// Practical Resource Reader Modal
export const ResourceModal = ({ resource, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!resource) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close dialog"
        >
          ✕
        </button>

        <span className="eyebrow">{resource.category} · {resource.readTime}</span>
        <h3 style={{ fontSize: "2rem", marginBottom: "16px" }}>{resource.title}</h3>

        <div style={{
          backgroundColor: "var(--sage-pale)",
          padding: "16px 20px",
          borderRadius: "var(--radius-sm)",
          borderLeft: "3px solid var(--sage-dark)",
          marginBottom: "20px"
        }}>
          <p style={{ fontSize: "0.95rem", color: "var(--ink)", fontStyle: "italic", margin: 0 }}>
            {resource.summary}
          </p>
        </div>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--muted)", marginBottom: "28px" }}>
          {resource.content}
        </p>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={onClose} className="btn-pill btn-primary">
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
