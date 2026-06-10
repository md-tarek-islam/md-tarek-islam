import { HeroSection } from "@/components/home/HeroSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { SkillsSection } from "@/components/home/SkillsSection"
import { PricingSection } from "@/components/home/PricingSection"
import { ContactSection } from "@/components/home/ContactSection"

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <PricingSection />
      <ContactSection />
    </>
  )
}
