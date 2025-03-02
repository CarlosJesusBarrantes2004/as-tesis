import ServicesCtaSection from "../components/services/cta/ServicesCtaSection";
import ServicesFaqSection from "../components/services/faq/ServicesFaqSection";
import ServicesHeroSection from "../components/services/hero/ServicesHeroSection";
import ServicesProcessSection from "../components/services/process/ServicesProcessSection";
import ServicesSection from "../components/services/services/ServicesSection";

function ServicesPage() {
  return (
    <>
      <ServicesHeroSection></ServicesHeroSection>
      <ServicesSection></ServicesSection>
      <ServicesProcessSection></ServicesProcessSection>
      <ServicesCtaSection></ServicesCtaSection>
      <ServicesFaqSection></ServicesFaqSection>
    </>
  );
}

export default ServicesPage;
