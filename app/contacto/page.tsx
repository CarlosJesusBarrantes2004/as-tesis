"use client";

import BenefitsSection from "../components/contact/benefits/BenefitsSection";
import ContactInfo from "../components/contact/ContactInfo";
import ContactCtaSection from "../components/contact/cta/ContactCtaSection";
import ContactForm from "../components/contact/form/Form";
import ContactHeroSection from "../components/contact/hero/ContactHeroSection";
import LocationMap from "../components/contact/map/LocationMap";
import ServiceList from "../components/contact/services/ServiceList";

function ContactPage() {
  return (
    <>
      <ContactHeroSection></ContactHeroSection>

      {/* Sección de información de contacto y formulario */}
      <section className="section container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulario de contacto */}
          <div id="contactForm" className="card p-6 md:p-8 animate-slide-up">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Envíanos un mensaje
              </h2>
              <p className="text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo lo
                antes posible.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <ContactInfo />
            <ServiceList></ServiceList>
          </div>
        </div>
      </section>

      {/* Sección de mapa */}
      <LocationMap></LocationMap>

      {/* Sección de ventajas */}
      <BenefitsSection></BenefitsSection>

      {/* CTA */}
      <ContactCtaSection></ContactCtaSection>
    </>
  );
}

export default ContactPage;
