import { Hero } from "@/components/sections/hero";
import { TrustOverview } from "@/components/sections/trust-overview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <Hero />
      <TrustOverview />
      <FeaturedProjects />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <WhyWorkWithMe />
      <ContactCTA />
    </div>
  );
}
