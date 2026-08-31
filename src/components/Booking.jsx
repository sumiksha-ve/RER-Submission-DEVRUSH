import React, { useState, useEffect } from "react";

export const Booking = ({ preselectedService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: preselectedService || "Mental Wellness",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Update selected service if parent changes it
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    "Mental Wellness",
    "Movement & Body",
    "Nutrition & Gut Health",
    "Sleep Optimization",
    "Herbal Integrative",
    "Restorative"
  ];

  const timeSlots = [
    "09:00 AM – Morning Glow",
    "11:00 AM – Mid-Morning",
    "02:00 PM – Afternoon Restorative",
    "04:30 PM – Late Afternoon",
    "06:00 PM – Twilight Wind-Down"
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.service) errs.service = "Please select a service.";
    if (!formData.preferredDate) errs.preferredDate = "Please choose a preferred date.";
    if (!formData.preferredTime) errs.preferredTime = "Please choose a preferred time.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate natural brief server response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      service: "Mental Wellness",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
    setErrors({});
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <div className="booking-grid">
          {/* Left Column: Context & Trust */}
          <div className="booking-content">
            <span className="eyebrow">START YOUR JOURNEY</span>

            <h2 className="booking-heading">
              Begin your journey <br />
              <span className="highlight">with Serene.</span>
            </h2>

            <p className="booking-desc">
              Take the first step toward a healthier, more balanced you. Our
              practitioners provide a calm, welcoming space to explore your
              unique needs.
            </p>

            <div className="booking-trust-items">
              <div className="trust-item">
                <div className="trust-icon-box" aria-hidden="true">✓</div>
                <span>100% Confidential & Secure Care</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon-box" aria-hidden="true">✓</div>
                <span>Personalized, Integrative Treatment Plan</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon-box" aria-hidden="true">✓</div>
                <span>Virtual & In-Studio Consultation Options</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Booking Form */}
          <div className="booking-card">
            {isSubmitted ? (
              <div className="booking-success-box">
                <div className="success-icon-badge" aria-hidden="true">✓</div>
                <h3 className="success-title">
                  Thank you — your consultation request has been received.
                </h3>
                <p className="success-desc">
                  We look forward to meeting you, <strong>{submittedData?.name}</strong>.
                  Our team has reserved a preliminary slot for <strong>{submittedData?.service}</strong> on{" "}
                  <strong>{submittedData?.preferredDate}</strong> at{" "}
                  <strong>{submittedData?.preferredTime}</strong>. A confirmation email with intake details has been sent to{" "}
                  <strong>{submittedData?.email}</strong>.
                </p>
                <button
                  onClick={handleReset}
                  className="btn-pill btn-secondary btn-sm"
                  style={{ marginTop: "12px" }}
                >
                  Book another consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form" noValidate>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor Vance"
                    className="form-input"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="eleanor@example.com"
                    className="form-input"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>

                {/* Service Dropdown */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && <span className="form-error-msg">{errors.service}</span>}
                </div>

                {/* Date & Time Row */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="preferredDate" className="form-label">
                      Preferred Date *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="form-input"
                      aria-invalid={!!errors.preferredDate}
                    />
                    {errors.preferredDate && (
                      <span className="form-error-msg">{errors.preferredDate}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredTime" className="form-label">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="form-select"
                      aria-invalid={!!errors.preferredTime}
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <span className="form-error-msg">{errors.preferredTime}</span>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Notes or Health Goals (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about what you'd like to focus on..."
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill btn-primary booking-submit-btn"
                >
                  {isSubmitting ? "Submitting Request..." : "Book a Consultation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
