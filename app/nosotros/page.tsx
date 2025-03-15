"use client";

import AboutCtaSection from "../components/about/cta/AboutCtaSection";
import AboutHeroSection from "../components/about/hero/AboutHeroSection";
import HistoryTimeline from "../components/about/history/HistoryTimeline";
import OrganizationChart from "../components/about/organization/OrganizationChart";
import PhilosophyTabs from "../components/about/philosophy/PhilosophyTabs";
import ValuesSection from "../components/about/values/ValuesSection";

function AboutUsPage() {
  return (
    <>
      <AboutHeroSection></AboutHeroSection>
      <PhilosophyTabs></PhilosophyTabs>
      <OrganizationChart></OrganizationChart>
      <ValuesSection></ValuesSection>
      <HistoryTimeline></HistoryTimeline>
      <AboutCtaSection></AboutCtaSection>
    </>
  );
}

export default AboutUsPage;
