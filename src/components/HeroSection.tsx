import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Your Resume <br />
              <span className="text-primary">Deserves A Yes</span> Let's <br />
              Make It Happen
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
              If Your Resume Isn't Getting Responses, It's Time For An Upgrade. 
              Get An AI+TE Optimized Resume Crafted By HR Experts To Help You 
              Land More Interviews. Our Resumes Are Designed To Get You Paid 
              In The Door And Place Your Name At The Top Of The Shortlist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                RESUME PACKAGES
              </Button>
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                CONTACT US
              </Button>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional with study materials"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Rating Badge */}
              <div className="absolute top-4 left-4 bg-background rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold text-primary">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  Instructor Rating
                </p>
              </div>

              {/* Students Badge */}
              <div className="absolute bottom-4 right-4 bg-background rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">260+</p>
                  <p className="text-xs text-muted-foreground">
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
