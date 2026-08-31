import React from "react";
import { PractitionerAvatar } from "../assets/BotanicalIllustrations";

export const PractitionerCard = ({ practitioner, onSelectPractitioner }) => {
  return (
    <article className="practitioner-card">
      <PractitionerAvatar type={practitioner.avatarType} name={practitioner.name} />

      <h3 className="practitioner-name">{practitioner.name}</h3>

      <div className="practitioner-specialty">{practitioner.specialty}</div>

      <p className="practitioner-short-bio">{practitioner.shortDescription}</p>

      <button
        onClick={() => onSelectPractitioner(practitioner)}
        className="practitioner-profile-link"
        aria-label={`View profile for ${practitioner.name}`}
      >
        <span>View Profile</span>
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
};
