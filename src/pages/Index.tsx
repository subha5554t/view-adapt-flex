/**
 * Main Index Page
 * Pixel-perfect responsive landing page
 * Components stack vertically with proper spacing
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <Navbar />
      
      {/* Main Content - No additional padding, components handle their own spacing */}
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </div>
  );
};

export default Index;
