import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { VideosSection } from "@/components/VideosSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="smooth-scroll">
      <HeroSection />
      <AboutSection />
      <VideosSection />
      <Footer />
    </main>
  );
};

export default Index;
