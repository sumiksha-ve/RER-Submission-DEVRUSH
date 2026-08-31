import React from "react";
import { PractitionerCard } from "./PractitionerCard";
import { practitionersData } from "../data/practitioners";

export const Practitioners = ({ onSelectPractitioner }) => {
  return (
    <section id="practitioners" className="practitioners-section">
      <div className="container">
        {/* Section Header */}
        <div className="practitioners-header">
          <span className="eyebrow">OUR PRACTITIONERS</span>
          <h2 className="practitioners-title">Meet the people in your corner.</h2>
          <p className="practitioners-desc">
            A collaborative collective of licensed specialists dedicated to
            personalized, compassionate, whole-body care.
          </p>
        </div>

        {/* 4 Practitioner Cards Grid (Desktop: 4 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="practitioners-grid">
          {practitionersData.map((practitioner) => (
            <PractitionerCard
              key={practitioner.id}
              practitioner={practitioner}
              onSelectPractitioner={onSelectPractitioner}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
