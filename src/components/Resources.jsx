import React from "react";
import { resourcesData } from "../data/resources";

export const Resources = ({ onSelectResource, onExploreAll }) => {
  return (
    <div className="resources-area">
      <div className="resources-grid">
        {/* Left Column: Large Featured Card */}
        <div className="featured-resource-card">
          <div>
            <span className="eyebrow">PRACTICAL RESOURCES</span>
            <h3 className="featured-resource-title">
              Small steps. <br />
              Useful tools.
            </h3>
            <p className="featured-resource-desc">
              Simple, approachable resources to help you take your wellbeing
              journey beyond your appointment.
            </p>
          </div>

          <button
            onClick={() => onExploreAll ? onExploreAll() : onSelectResource(resourcesData[0])}
            className="btn-pill btn-primary featured-resource-btn"
          >
            <span>Explore resources</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Right Column: Vertical Curated List */}
        <div className="resources-list">
          {resourcesData.map((res) => (
            <div
              key={res.id}
              onClick={() => onSelectResource(res)}
              className="resource-list-item"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onSelectResource(res);
              }}
            >
              <div className="resource-item-meta">
                <h4 className="resource-item-title">{res.title}</h4>
                <span className="resource-item-tag">
                  {res.category} · {res.readTime}
                </span>
              </div>
              <div className="resource-item-arrow" aria-hidden="true">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
