import React, { useState } from "react";

export const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="cta-journey-section">
      <div className="container">
        <div className="cta-journey-card">
          <h2 className="cta-journey-heading">
            Begin your wellness <br />
            journey today.
          </h2>

          <p className="cta-journey-subtext">
            Connect with our team to explore a tailored path toward your wellbeing.
          </p>

          {isSubmitted ? (
            <div className="cta-success-bubble">
              <span className="cta-success-icon">✓</span>
              <span>Thank you! We'll reach out to <strong>{email}</strong> to schedule your free call.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cta-bubble-form" noValidate>
              <div className="cta-input-bubble-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter mail"
                  className="cta-mail-input"
                  aria-label="Enter email address"
                />
                <button type="submit" className="cta-book-bubble-btn">
                  Book free call
                </button>
              </div>
              {error && <p className="cta-error-msg">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
