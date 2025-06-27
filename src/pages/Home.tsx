import { motion } from "framer-motion";
import {
  Code,
  Users,
  LineChart,
  MessageSquare,
  ChevronRight,
   Gamepad2,  BarChart3
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import StatsSection from "../components/sections/StatsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import IndustriesSection from "../components/sections/IndustriesSection";
import ParallaxSection from "../components/ui/ParallaxSection";
import AnimatedText from "../components/ui/AnimatedText";
import GradientButton from "../components/ui/GradientButton";
import ParticleBackground from "../components/ParticleBackground";
import ServiceCard from "../components/serviceCard";
import SEO from "../components/SEO";

const services = [
  {
    title: "IT Consulting",
    description:
      "Strategic technology consulting to solve complex business challenges and drive digital transformation.",
    icon: <LineChart className="w-full h-full text-indigo-400"/>,
    imageUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90",
    link: "/services/it-consulting",
  },
  {
    title: "Staff Augmentation",
    description:
      "Access to top-tier tech talent to enhance your team's capabilities and accelerate project delivery.",
    icon: <Users className="w-full h-full text-indigo-400" />,
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90",
    link: "/services/staff-augmentation",
  },
  {
    title: "Web Development",
    description:
      "Custom web applications and responsive websites built with the latest technologies.",
    icon: <Code className="w-full h-full text-indigo-400" />,
    imageUrl:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90",
    link: "/services/web-development",
  },
];

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Kronocode Solutions LLC provides expert technology consulting, staffing, and web development services. Transform your business with our innovative solutions."
        keywords="technology consulting, IT staffing, web development, software development, IT solutions, digital transformation"
        canonical="https://kronocode.com"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="container relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-4xl font-bold mb-8 text-black"
          >
            <span className="bg-gradient-to-r from-secondary-500 to-primary-600 bg-clip-text text-transparent">
              Kronocode Solutions
            </span>{" "}
            – Staffing Brilliance. Building Futures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto"
          >
            Empower your business with Kronocode's expert consulting, staffing,
            and web development services. We turn your technological challenges
            into opportunities for growth.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-12 justify-center items-center mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <GradientButton to="/services">Explore Our Services</GradientButton>
            <GradientButton to="/contact">Contact Us</GradientButton>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-white opacity-10 z-0"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-100 py-20">
        <div className="container mx-auto px-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Provide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative technology solutions designed to align with your business needs and accelerate growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
                link={service.link}
                hideLink = {true}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ParallaxSection>
        <StatsSection />
      </ParallaxSection>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ParallaxSection>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            </ParallaxSection>
            <div>
              <SectionHeading
                title="Why Choose Kronocode"
                subtitle="We combine technical expertise with business acumen to deliver solutions that drive real results."
                centered={false}
              />
              <div className="space-y-6">
                {[
                  {
                    title: "Technical Excellence",
                    description:
                      "Our team of experts stays at the forefront of technology trends and best practices.",
                  },
                  {
                    title: "Client-Centric Approach",
                    description:
                      "We work closely with you to understand your unique needs and deliver tailored solutions.",
                  },
                  {
                    title: "Proven Track Record",
                    description:
                      "We've successfully delivered hundreds of projects for clients across various industries.",
                  },
                  {
                    title: "End-to-End Support",
                    description:
                      "From strategy to implementation and beyond, we're with you every step of the way.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="mr-4 mt-1">
                      <div className="bg-primary-100 rounded-full p-1">
                        <ChevronRight size={20} className="text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-navy-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <GradientButton to="/about">Learn more about us</GradientButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ParallaxSection>
        <IndustriesSection />
      </ParallaxSection>

      <ParallaxSection>
        <TestimonialsSection />
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 -z-10"></div>
        <ParallaxSection
          className="absolute top-0 right-0 w-full h-full -z-20"
          offset={50}
        >
          <div className="bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 mix-blend-overlay w-full h-full"></div>
        </ParallaxSection>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <AnimatedText
              text="Ready to Innovate?"
              className="text-white text-3xl md:text-4xl font-semibold mb-6"
            />
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how we can help you achieve your technology goals
              and drive business growth.
            </p>
            <GradientButton to="/contact" className="inline-block">
              <MessageSquare size={18} className="mr-2 inline-block" />
              Schedule a Consultation
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
