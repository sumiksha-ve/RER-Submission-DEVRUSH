import React from "react";
import { ServiceCard } from "./ServiceCard";
import { servicesData } from "../data/services";

export const Services = ({ onSelectService }) => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header with Split Editorial Layout */}
        <div className="services-header">
          <div>
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2 className="services-title">
              Care <span className="highlight">tailored</span> for you.
            </h2>
          </div>
          <p className="services-intro">
            Every pathway begins with deep listening. We combine evidence-informed
            practices with holistic therapies to treat causes, not just symptoms.
          </p>
        </div>

        {/* 6 Service Cards Grid (Desktop: 3x2, Tablet: 2x3, Mobile: 1x6) */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
