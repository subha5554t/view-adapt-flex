/**
 * Services Section Component
 * Displays four service cards in a responsive grid
 * Desktop: 4 columns (1440px container)
 * Tablet: 2 columns
 * Mobile: 1 column (375px)
 * All spacing and typography match Figma specifications
 */

import { FileText, Mail, User, MessageSquare } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Service Card Component
 * Card Dimensions: Flexible width, Padding: 24px
 * Border Radius: 16px, Hover: Scale + Shadow
 */
const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group">
      {/* Icon Container - 80px square, Background: secondary */}
      <div className="mb-5 flex justify-center">{icon}</div>
      
      {/* Card Title - Font: 16px, Weight: 700, Line Height: 1.4 */}
      <h3 className="text-center font-bold text-foreground mb-3 text-[15px] lg:text-[16px] leading-[1.4] group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      {/* Card Description - Font: 13px, Line Height: 1.6, Color: muted */}
      <p className="text-center text-muted-foreground text-[13px] lg:text-[14px] leading-[1.6]">
        {description}
      </p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
          <FileText className="w-10 h-10 text-primary" strokeWidth={2} />
        </div>
      ),
      title: "A Resume Format That Gets You Interviews",
      description:
        "Get a professionally written, keyword-optimized resume that lands in recruiter shortlists.",
    },
    {
      icon: (
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
          <Mail className="w-10 h-10 text-primary" strokeWidth={2} />
        </div>
      ),
      title: "A Cover Letter Style That Stands Out Strong",
      description:
        "Stand out with a cover letter that speaks directly and reflects your strengths.",
    },
    {
      icon: (
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
          <User className="w-10 h-10 text-primary" strokeWidth={2} />
        </div>
      ),
      title: "A LinkedIn Profile That Works For You",
      description:
        "Attract the right eyes, start conversations, and show up in recruiter searches.",
    },
    {
      icon: (
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
          <MessageSquare className="w-10 h-10 text-primary" strokeWidth={2} />
        </div>
      ),
      title: "An Interview Strategy That Builds Confidence",
      description:
        "Interview with preparation and real HR professionals so you speak clearly, confidently.",
    },
  ];

  return (
    <section className="bg-background">
      {/* Container: max-width 1440px, Padding Y: 80px desktop, 48px mobile */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12 lg:py-20">
        
        {/* Section Header - Margin Bottom: 48px desktop, 32px mobile */}
        <div className="text-center mb-10 lg:mb-14 max-w-[900px] mx-auto">
          {/* Eyebrow Text - Font: 14px, Weight: 600, Color: primary */}
          <p className="text-primary font-semibold mb-3 text-[14px] uppercase tracking-wide">
            What You Get
          </p>
          
          {/* Section Heading - Font: Desktop 40px, Mobile 28px, Weight: 700 */}
          <h2 className="font-bold leading-[1.2] text-[28px] lg:text-[40px]">
            You're Not Just <span className="text-primary">Another Applicant</span> And Your{" "}
            <br className="hidden lg:block" />
            Resume Shouldn't Look Like One
          </h2>
        </div>

        {/* Services Grid - Gap: 24px, Columns: 1/2/4 based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
