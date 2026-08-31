import React from "react";

// Delicate Leaf Glyph for Logo and Accents in Pastel Green
export const LeafGlyph = ({ className = "w-5 h-5", color = "#3E8A49" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <path
      d="M12 2C7.5 2 4 5.5 4 10.5C4 16.5 12 22 12 22C12 22 20 16.5 20 10.5C20 5.5 16.5 2 12 2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V22"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7C14.5 9 17 9 17 9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 12C9.5 14 7 14 7 14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 16C14.5 18 16 18 16 18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Hero Organic Blob Artwork with Botanical Flower and 98% Pill in Pastel Green
export const HeroBotanicalBlob = () => (
  <div className="hero-artwork-wrapper">
    {/* Large Organic Pastel Green Blob */}
    <div className="organic-blob-shape">
      {/* Background Soft Organic Layer */}
      <svg
        viewBox="0 0 500 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="blob-svg-backdrop"
      >
        <path
          d="M445 195C485 305 440 435 340 505C240 575 105 535 45 425C-15 315 10 185 110 95C210 5 405 85 445 195Z"
          fill="#7EE88B"
          fillOpacity="0.88"
        />
        <path
          d="M410 220C440 310 390 420 310 470C230 520 120 480 70 400C20 320 50 200 130 130C210 60 380 130 410 220Z"
          fill="#9CF0A6"
          fillOpacity="0.65"
        />
        {/* Soft Organic White Division / Curve */}
        <path
          d="M180 500C280 470 380 430 440 330C460 290 450 230 420 180C360 80 260 60 160 90C80 115 20 180 30 260C40 350 100 480 180 500Z"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          fill="none"
          opacity="0.75"
        />
      </svg>

      {/* Central Botanical Flower / Plant Illustration */}
      <div className="hero-flower-illustration">
        <svg
          viewBox="0 0 260 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flower-svg"
        >
          {/* Main Stem */}
          <path
            d="M130 360 C130 280 135 180 130 80"
            stroke="#1F3624"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Stem Branch Left */}
          <path
            d="M130 250 C100 230 75 195 70 160"
            stroke="#1F3624"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Leaf Left Bottom */}
          <path
            d="M70 160 C55 175 60 210 85 220 C105 228 120 225 130 250"
            fill="#EAF9EB"
            stroke="#1F3624"
            strokeWidth="1.5"
          />
          {/* Stem Branch Right */}
          <path
            d="M130 200 C160 180 185 150 190 120"
            stroke="#1F3624"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Leaf Right */}
          <path
            d="M190 120 C205 135 200 170 175 180 C155 188 140 180 130 200"
            fill="#EAF9EB"
            stroke="#1F3624"
            strokeWidth="1.5"
          />
          {/* Upper Leaf Left */}
          <path
            d="M130 140 C105 125 90 100 85 75 C100 85 115 105 130 140"
            fill="#D2F6D6"
            stroke="#1F3624"
            strokeWidth="1.5"
          />
          {/* Central Bloom Petals */}
          <g className="blossom-head">
            {/* Center Core */}
            <circle cx="130" cy="75" r="14" fill="#EAF9EB" stroke="#1F3624" strokeWidth="2" />
            <circle cx="130" cy="75" r="6" fill="#3E8A49" />
            {/* Petals */}
            <path d="M130 61 C120 40 140 40 130 61" stroke="#1F3624" strokeWidth="2" fill="#FFFFFF" />
            <path d="M140 65 C160 50 165 70 142 72" stroke="#1F3624" strokeWidth="2" fill="#FFFFFF" />
            <path d="M140 85 C160 100 145 115 135 88" stroke="#1F3624" strokeWidth="2" fill="#FFFFFF" />
            <path d="M120 85 C100 100 115 115 125 88" stroke="#1F3624" strokeWidth="2" fill="#FFFFFF" />
            <path d="M120 65 C100 50 95 70 118 72" stroke="#1F3624" strokeWidth="2" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {/* Floating 98% Statistic Badge */}
      <div className="hero-stat-badge">
        <div className="hero-stat-number">98%</div>
        <div className="hero-stat-label">feel more supported</div>
      </div>

      {/* Minimal Decorative Floating Botanical Accents */}
      <div className="hero-floating-seed seed-1" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(30 12 12)" fill="#FFFFFF" fillOpacity="0.85" />
        </svg>
      </div>
      <div className="hero-floating-seed seed-2" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="6" fill="#7EE88B" fillOpacity="0.55" />
        </svg>
      </div>
    </div>
  </div>
);

// Approach Section Botanical Composition with Central Flower & 4 Floating Bubbles (Mind, Body, Balance, Growth)
export const ApproachBotanicalComposition = () => (
  <div className="approach-artwork-container">
    <div className="approach-blob-bg">
      <svg
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="approach-bg-svg"
      >
        <path
          d="M390 160C430 250 410 350 330 410C250 470 140 450 75 375C10 300 15 180 85 105C155 30 350 70 390 160Z"
          fill="#7EE88B"
          fillOpacity="0.78"
        />
        <path
          d="M360 180C395 255 375 340 305 385C235 430 145 410 90 350C35 290 40 190 100 130C160 70 325 105 360 180Z"
          fill="#9CF0A6"
          fillOpacity="0.45"
        />
      </svg>
    </div>

    {/* Central Botanical Flower */}
    <div className="approach-central-flower">
      <svg viewBox="0 0 220 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="approach-flower-svg">
        {/* Curved graceful stem */}
        <path
          d="M110 300 C110 220 125 150 110 85"
          stroke="#1F3624"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Left graceful leaf */}
        <path
          d="M112 210 C80 190 55 160 65 130 C85 140 105 170 112 210"
          fill="#FFFFFF"
          stroke="#1F3624"
          strokeWidth="1.5"
        />
        {/* Right graceful leaf */}
        <path
          d="M112 165 C145 145 170 115 160 85 C140 95 120 125 112 165"
          fill="#FFFFFF"
          stroke="#1F3624"
          strokeWidth="1.5"
        />
        {/* Flower Head */}
        <circle cx="110" cy="70" r="18" fill="#EAF9EB" stroke="#1F3624" strokeWidth="2" />
        <circle cx="110" cy="70" r="8" fill="#3E8A49" />
        {/* Petals */}
        <circle cx="110" cy="46" r="9" fill="#FFFFFF" stroke="#1F3624" strokeWidth="1.5" />
        <circle cx="132" cy="58" r="9" fill="#FFFFFF" stroke="#1F3624" strokeWidth="1.5" />
        <circle cx="130" cy="84" r="9" fill="#FFFFFF" stroke="#1F3624" strokeWidth="1.5" />
        <circle cx="110" cy="94" r="9" fill="#FFFFFF" stroke="#1F3624" strokeWidth="1.5" />
        <circle cx="90" cy="84" r="9" fill="#FFFFFF" stroke="#1F3624" strokeWidth="1.5" />
        <circle cx="88" cy="58" r="9" fill="#FFFFFF" stroke="#1F3624" strokeWidth="1.5" />
      </svg>
    </div>

    {/* 4 Organic Floating Bubbles Arranged Organically (Mind, Body, Balance, Growth) */}
    <div className="organic-bubble bubble-mind" style={{ animationDelay: "0s" }}>
      <span className="bubble-dot"></span>
      <span className="bubble-text">Mind</span>
    </div>

    <div className="organic-bubble bubble-body" style={{ animationDelay: "1.2s" }}>
      <span className="bubble-dot"></span>
      <span className="bubble-text">Body</span>
    </div>

    <div className="organic-bubble bubble-balance" style={{ animationDelay: "2.4s" }}>
      <span className="bubble-dot"></span>
      <span className="bubble-text">Balance</span>
    </div>

    <div className="organic-bubble bubble-growth" style={{ animationDelay: "3.6s" }}>
      <span className="bubble-dot"></span>
      <span className="bubble-text">Growth</span>
    </div>
  </div>
);

// 4 Custom Illustrated Avatars (Maya, Alex, Sophia, Emma) in Pastel Green Palette
export const PractitionerAvatar = ({ type, name }) => {
  switch (type) {
    case "maya":
      return (
        <div className="practitioner-avatar-box avatar-maya">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="76" fill="#F4FAF5" stroke="#D3EBD5" strokeWidth="2" />
            <path d="M48 60 C40 85 42 120 48 135 C58 138 102 138 112 135 C118 120 120 85 112 60 C108 40 52 40 48 60Z" fill="#1F3624" />
            <path d="M72 108 L72 126 C72 126 50 134 40 152 L120 152 C110 134 88 126 88 126 L88 108 Z" fill="#E8D8CC" />
            <path d="M40 152 C50 135 72 128 80 128 C88 128 110 135 120 152 Z" fill="#7EE88B" stroke="#3E8A49" strokeWidth="1.5" />
            <path d="M58 72 C58 55 102 55 102 72 C102 96 94 112 80 112 C66 112 58 96 58 72Z" fill="#F7EBE1" />
            <path d="M52 64 C55 45 75 42 80 44 C85 42 105 45 108 64 C100 56 88 56 80 58 C72 56 60 56 52 64Z" fill="#1F3624" />
            <path d="M68 76 C70 78 74 78 76 76" stroke="#1F3624" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M84 76 C86 78 90 78 92 76" stroke="#1F3624" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M76 94 C78 97 82 97 84 94" stroke="#3E8A49" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="66" cy="84" r="4" fill="#F0C5B8" opacity="0.6" />
            <circle cx="94" cy="84" r="4" fill="#F0C5B8" opacity="0.6" />
          </svg>
        </div>
      );

    case "alex":
      return (
        <div className="practitioner-avatar-box avatar-alex">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="76" fill="#F4FAF5" stroke="#D3EBD5" strokeWidth="2" />
            <path d="M72 105 L72 125 C72 125 48 132 38 152 L122 152 C112 132 88 125 88 125 L88 105 Z" fill="#DECBBA" />
            <path d="M38 152 C48 132 70 126 80 126 C90 126 112 132 122 152 Z" fill="#3E8A49" />
            <path d="M74 126 L80 142 L86 126" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M57 68 C57 52 103 52 103 68 C103 94 95 110 80 110 C65 110 57 94 57 68Z" fill="#ECD8C8" />
            <path d="M55 64 C53 45 70 38 80 38 C90 38 107 45 105 64 C100 52 92 48 80 48 C68 48 60 52 55 64Z" fill="#3D352E" />
            <path d="M66 70 C70 68 75 69 77 71" stroke="#3D352E" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M83 71 C85 69 90 68 94 70" stroke="#3D352E" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="72" cy="77" r="2.2" fill="#1F3624" />
            <circle cx="88" cy="77" r="2.2" fill="#1F3624" />
            <path d="M75 95 C78 98 82 98 85 95" stroke="#1F3624" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "sophia":
      return (
        <div className="practitioner-avatar-box avatar-sophia">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="76" fill="#F4FAF5" stroke="#D3EBD5" strokeWidth="2" />
            <path d="M46 62 C38 90 42 135 50 148 C60 150 100 150 110 148 C118 135 122 90 114 62 C110 40 50 40 46 62Z" fill="#5A4638" />
            <path d="M72 108 L72 126 C72 126 50 134 40 152 L120 152 C110 134 88 126 88 126 L88 108 Z" fill="#F1DDD0" />
            <path d="M40 152 C50 134 72 127 80 127 C88 127 110 134 120 152 Z" fill="#D2F6D6" stroke="#3E8A49" strokeWidth="1.2" />
            <path d="M58 70 C58 54 102 54 102 70 C102 95 94 111 80 111 C66 111 58 95 58 70Z" fill="#FCEEE5" />
            <path d="M50 64 C56 46 76 43 80 45 C84 43 104 46 110 64 C100 52 86 52 80 56 C74 52 60 52 50 64Z" fill="#5A4638" />
            <path d="M65 74 C69 72 75 73 78 75" stroke="#3E8A49" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M82 75 C85 73 91 72 95 74" stroke="#3E8A49" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="72" cy="79" r="2.2" fill="#1F3624" />
            <circle cx="88" cy="79" r="2.2" fill="#1F3624" />
            <path d="M76 96 C78 98 82 98 84 96" stroke="#3E8A49" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="66" cy="85" r="4.5" fill="#F4BCAE" opacity="0.5" />
            <circle cx="94" cy="85" r="4.5" fill="#F4BCAE" opacity="0.5" />
          </svg>
        </div>
      );

    case "emma":
    default:
      return (
        <div className="practitioner-avatar-box avatar-emma">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="76" fill="#F4FAF5" stroke="#D3EBD5" strokeWidth="2" />
            <circle cx="80" cy="38" r="14" fill="#6B5B4F" />
            <path d="M72 108 L72 126 C72 126 50 134 40 152 L120 152 C110 134 88 126 88 126 L88 108 Z" fill="#E6D3C4" />
            <path d="M40 152 C50 134 72 127 80 127 C88 127 110 134 120 152 Z" fill="#7EE88B" stroke="#3E8A49" strokeWidth="1.5" />
            <path d="M58 72 C58 56 102 56 102 72 C102 96 94 112 80 112 C66 112 58 96 58 72Z" fill="#F7EBE0" />
            <path d="M54 68 C58 48 74 46 80 48 C86 46 102 48 106 68 C98 56 86 56 80 58 C74 56 62 56 54 68Z" fill="#6B5B4F" />
            <path d="M54 84 C52 87 52 92 55 94 C57 92 57 87 54 84" fill="#3E8A49" />
            <circle cx="71" cy="77" r="2.2" fill="#1F3624" />
            <circle cx="89" cy="77" r="2.2" fill="#1F3624" />
            <path d="M76 94 C78 97 82 97 84 94" stroke="#1F3624" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="65" cy="83" r="4" fill="#F0C2B4" opacity="0.6" />
            <circle cx="95" cy="83" r="4" fill="#F0C2B4" opacity="0.6" />
          </svg>
        </div>
      );
  }
};
