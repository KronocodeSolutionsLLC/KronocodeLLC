import { DollarSign, Stethoscope, GraduationCap, ShoppingBag, Briefcase, Factory } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../serviceCard';

const industries = [
  {
    title: "Financial Services",
    description: "Custom solutions for banks, insurance companies, and fintech startups.",
    icon: <DollarSign className="w-full h-full text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1600&q=80",
    link: "/industries/financial",
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant systems for healthcare providers and med-tech companies.",
    icon: <Stethoscope className="w-full h-full text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1470&q=80",
    link: "/industries/healthcare",
  },
  {
    title: "Education",
    description: "Digital platforms and learning systems for educational institutions.",
    icon: <GraduationCap className="w-full h-full text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80",
    link: "/industries/education",
  },
  {
    title: "Retail & E-commerce",
    description: "Scalable solutions for eCommerce and retail management.",
    icon: <ShoppingBag className="w-full h-full text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1470&q=80",
    link: "/industries/retail",
  },
  {
    title: "Professional Services",
    description: "Automation and workflow tools for service-based businesses.",
    icon: <Briefcase className="w-full h-full text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1470&q=80",
    link: "/industries/professional",
  },
  {
    title: "Manufacturing",
    description: "Industrial automation and smart supply chain systems.",
    icon: <Factory className="w-full h-full text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1470&q=80",
    link: "/industries/manufacturing",
  },
];

const IndustriesSection = () => {
  return (
    <section className="section bg-gray-100" id="industries">
      <div className="container">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Tailored technology solutions across sectors to help businesses innovate and grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <ServiceCard
              key={index}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              imageUrl={industry.imageUrl}
              link={industry.link}
              hideLink = {true}

              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
