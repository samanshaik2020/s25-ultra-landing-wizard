import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SpecsSection } from "@/components/SpecsSection";
import { CameraSection } from "@/components/CameraSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { BatterySection } from "@/components/BatterySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CameraSection />
      <PerformanceSection />
      <BatterySection />
      <SpecsSection />
    </div>
  );
};

export default Index;