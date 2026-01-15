import Hero from "@/components/ui/Hero";
import TechStack from "@/components/ui/TechStack";
import FeaturedProjects from "@/components/ui/FeaturedProjects";
import ServicesPreview from "@/components/ui/ServicesPreview";
import ContactCTA from "@/components/ui/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <ServicesPreview />
      <ContactCTA />
    </>
  );
}
