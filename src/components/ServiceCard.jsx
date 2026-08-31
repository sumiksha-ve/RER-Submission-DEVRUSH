import React from "react";

export const ServiceCard = ({ service, onSelectService }) => {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-card-number">{service.id}</span>
      </div>

      <h3 className="service-card-title">{service.title}</h3>

      <p className="service-card-desc">{service.shortDescription}</p>

      <div className="service-card-footer">
        {/* Time and Price on the same line, with time right before price */}
        <div className="service-time-price-row">
          <span className="service-time-tag">{service.duration}</span>
          {service.price ? (
            <span className="service-price-tag">{service.price}</span>
          ) : (
            <span className="service-price-inquire">{service.priceLabel || "Consultation-based"}</span>
          )}
        </div>

        <button
          onClick={() => onSelectService(service)}
          className="service-explore-link"
          aria-label={`Explore ${service.title} service`}
        >
          <span>Explore service</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
};
