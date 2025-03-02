import CtaSection from "./components/home/cta/CtaSection";
import HeroSection from "./components/home/hero/HeroSection";
import StatisticsSection from "./components/home/statistics/StatisticsSection";
import ServicesSection from "./components/services/services/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <StatisticsSection></StatisticsSection>
      <CtaSection></CtaSection>
    </>
  );
}
