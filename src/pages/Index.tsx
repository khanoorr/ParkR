import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { HeroSection } from "@/components/Home/HeroSection";
import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { HowItWorksSection } from "@/components/Home/HowItWorksSection";
import { CTASection } from "@/components/Home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
