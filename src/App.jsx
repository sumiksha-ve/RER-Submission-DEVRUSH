import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Approach } from "./components/Approach";
import { Practitioners } from "./components/Practitioners";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { ServiceModal, PractitionerModal } from "./components/Modals";

export function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPractitioner, setSelectedPractitioner] = useState(null);

  const scrollToBooking = () => {
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      const headerOffset = 80;
      const elementPosition = bookingEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToApproach = () => {
    const approachEl = document.getElementById("approach");
    if (approachEl) {
      const headerOffset = 80;
      const elementPosition = approachEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleBookFromServiceModal = () => {
    setSelectedService(null);
    scrollToBooking();
  };

  const handleBookFromPractitionerModal = () => {
    setSelectedPractitioner(null);
    scrollToBooking();
  };

  return (
    <div className="serene-app">
      {/* 1. Sticky Navigation Header */}
      <Header onBookClick={scrollToBooking} />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onApproachClick={scrollToApproach}
        />

        {/* 3. Services Section (6 Cards) */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 4. Our Approach Section */}
        <Approach />

        {/* 5. Practitioners Section (4 Cards with Dr. prefix) */}
        <Practitioners
          onSelectPractitioner={(practitioner) => setSelectedPractitioner(practitioner)}
        />

        {/* 6. Streamlined Bottom CTA Section: "Begin your wellness journey today" */}
        <CallToAction />
      </main>

      {/* 7. Understated Minimal Footer */}
      <Footer
        onNavigate={(id) => {
          const el = document.getElementById(id);
          if (el) {
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }}
      />

      {/* Interactive Modals */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookService={handleBookFromServiceModal}
        />
      )}

      {selectedPractitioner && (
        <PractitionerModal
          practitioner={selectedPractitioner}
          onClose={() => setSelectedPractitioner(null)}
          onBookWithPractitioner={handleBookFromPractitionerModal}
        />
      )}
    </div>
  );
}

export default App;
