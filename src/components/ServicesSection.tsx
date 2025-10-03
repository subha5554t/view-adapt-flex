import { FileText, Mail, User, MessageSquare } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-center font-bold text-foreground mb-3 text-lg">
        {title}
      </h3>
      <p className="text-center text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center">
          <FileText className="w-10 h-10 text-primary" />
        </div>
      ),
      title: "A Resume Format That Gets You Interviews",
      description:
        "Get a professionally written, keyword-optimized resume that lands in recruiter shortlists.",
    },
    {
      icon: (
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center">
          <Mail className="w-10 h-10 text-primary" />
        </div>
      ),
      title: "A Cover Letter Style That Stands Out Strong",
      description:
        "Stand out with a cover letter that speaks directly and reflects your strengths.",
    },
    {
      icon: (
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center">
          <User className="w-10 h-10 text-primary" />
        </div>
      ),
      title: "A LinkedIn Profile That Works For You",
      description:
        "Attract the right eyes, start conversations, and show up in recruiter searches.",
    },
    {
      icon: (
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center">
          <MessageSquare className="w-10 h-10 text-primary" />
        </div>
      ),
      title: "An Interview Strategy That Builds Confidence",
      description:
        "Interview with preparation and real HR professionals so you speak clearly, confidently.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold mb-2">What You Get</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            You're Not Just <span className="text-primary">Another Applicant</span> And Your <br className="hidden md:block" />
            Resume Shouldn't Look Like One
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
