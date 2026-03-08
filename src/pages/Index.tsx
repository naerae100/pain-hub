import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import CredibilityStrip from "@/components/CredibilityStrip";
import AboutSection from "@/components/AboutSection";
import ClinicalAreasSection from "@/components/ClinicalAreasSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import EducationEvidenceSection from "@/components/EducationEvidenceSection";
import ProductsSection from "@/components/ProductsSection";
import ResearchSection from "@/components/ResearchSection";
import ContactCTASection from "@/components/ContactCTASection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeatureCards />
      <CredibilityStrip />
      <AboutSection />
      <ClinicalAreasSection />
      <TreatmentsSection />
      <EducationEvidenceSection />
      <ProductsSection />
      <ResearchSection />
      <ContactCTASection />
    </main>
  );
};

export default Index;
