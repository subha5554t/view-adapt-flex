/**
 * Hero Section Component
 * Pixel-perfect responsive implementation
 * Desktop: Two-column layout (1440px container)
 * Mobile: Stacked layout (375px)
 * All measurements match Figma specifications
 */

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="bg-secondary">
      {/* Container: max-width 1440px, responsive padding */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            
            {/* Main Heading - Desktop: 48px, Mobile: 32px, Line Height: 1.2 */}
            <h1 className="font-bold leading-[1.2] text-[32px] lg:text-[48px]">
              Your Resume <br />
              <span className="text-primary">Deserves A Yes</span> Let's <br />
              Make It Happen
            </h1>

            {/* Description Text - Font: 14px, Line Height: 1.6, Max Width: 520px */}
            <p className="text-muted-foreground text-[14px] lg:text-[15px] leading-[1.6] max-w-[520px]">
              If Your Resume Isn't Getting Responses, It's Time For An Upgrade. 
              Get An AI+TE Optimized Resume Crafted By HR Experts To Help You 
              Land More Interviews. Our Resumes Are Designed To Get You Paid 
              In The Door And Place Your Name At The Top Of The Shortlist.
            </p>

            {/* CTA Buttons - Height: 48px, Padding: 16px 32px, Gap: 16px */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="heroOutline" 
                className="h-12 px-8 text-[14px] font-semibold rounded-lg uppercase tracking-wide"
              >
                Resume Packages
              </Button>
              <Button 
                variant="hero" 
                className="h-12 px-8 text-[14px] font-semibold rounded-lg uppercase tracking-wide"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Column - Image with Floating Cards */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative max-w-[600px] mx-auto lg:mx-0">
              
              {/* Main Hero Image - Rounded: 24px */}
              <img
                src={heroImage}
                alt="Professional resume consultant with study materials"
                className="w-full h-auto rounded-[24px] shadow-2xl"
              />
              
              {/* Rating Card - Top Left, Desktop: top-8 left-8, Mobile: top-4 left-4 */}
              <div className="absolute top-4 left-4 lg:top-8 lg:left-8 bg-background rounded-2xl p-4 lg:p-5 shadow-xl">
                <div className="flex items-baseline gap-2 mb-1">
                  {/* Rating Number - Font: 36px, Weight: 700 */}
                  <span className="text-[32px] lg:text-[36px] font-bold text-primary leading-none">4.9</span>
                  {/* Stars - Size: 16px */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
                {/* Rating Label - Font: 12px */}
                <p className="text-[12px] text-muted-foreground font-medium leading-tight">
                  Instructor Rating
                </p>
              </div>

              {/* Students Stats Card - Bottom Right, Desktop: bottom-8 right-8 */}
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-background rounded-2xl p-4 lg:p-5 shadow-xl min-w-[140px]">
                <div className="text-center">
                  {/* Stats Number - Font: 32px, Weight: 700 */}
                  <p className="text-[28px] lg:text-[32px] font-bold text-primary leading-none mb-2">260+</p>
                  {/* Stats Label - Font: 12px, Line Height: 1.4 */}
                  <p className="text-[11px] lg:text-[12px] text-muted-foreground leading-[1.4] font-medium">
                    Online Students <br /> Created
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
