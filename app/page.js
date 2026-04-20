"use client";
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  AboutSection,
  JourneySection,
} from "./components";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}