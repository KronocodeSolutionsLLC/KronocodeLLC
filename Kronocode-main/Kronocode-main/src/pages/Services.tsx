import { motion } from "framer-motion";
import {
  Code,
  Users,
  LineChart,
  Database,
  LightbulbIcon,
  CheckCircle2,
} from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";
import ParallaxSection from "../components/ui/ParallaxSection";
import AnimatedText from "../components/ui/AnimatedText";
import GradientButton from "../components/ui/GradientButton";
import FloatingCard from "../components/ui/FloatingCard";
import { TbGraph } from "react-icons/tb";

const Services = () => {
  return (
    <>
      <SEO
        title="Services"
        description="Comprehensive technology services including IT consulting, staff augmentation, and web development. Transform your business with our expert solutions."
        keywords="IT consulting, staff augmentation, web development, technology services, digital transformation"
        canonical="https://kronocode.com/services"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Our Services"
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-tight mb-6"
            />

            <motion.p
              className="text-xl text-navy-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Comprehensive technology solutions tailored to your business
              needs. From strategic consulting to technical implementation,
              we've got you covered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="What We Offer"
            subtitle="Explore our full range of services designed to help your business leverage technology for growth and innovation."
          />

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FloatingCard>
              <ServiceCard
                title="IT Consulting"
                description="Strategic technology consulting to solve complex business challenges and drive digital transformation initiatives."
                icon={<LineChart size={32} />}
                delay={0}
              />
            </FloatingCard>
            <FloatingCard>
              <ServiceCard
                title="Staff Augmentation"
                description="Access to top-tier tech talent to enhance your team's capabilities and accelerate project delivery."
                icon={<Users size={32} />}
                delay={1}
              />
            </FloatingCard>
            <FloatingCard>
              <ServiceCard
                title="Web Development"
                description="Custom web applications and responsive websites built with the latest technologies and best practices."
                icon={<Code size={32} />}
                delay={2}
              />
            </FloatingCard>
            <FloatingCard>
              <ServiceCard
                title="Digital Marketing"
                description="Our digital marketing services help businesses increase their online visibility, attract more customers, and grow their revenue."
                icon={<TbGraph size={32} />}
                delay={3}
              />
            </FloatingCard>
          </div> */}
        </div>
      </section>

      {/* Featured Service: Consulting */}
      <ParallaxSection>
        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <AnimatedText
                  text="IT Consulting & Strategy"
                  className="text-3xl font-semibold mb-6"
                />
                <p className="text-navy-600 mb-6">
                  Our expert consultants work closely with your team to
                  understand your business objectives and develop technology
                  strategies that drive real results. We identify opportunities
                  for improvement and innovation across your organization.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Technology roadmap development",
                    "Digital transformation strategy",
                    "IT infrastructure assessment",
                    "Process optimization",
                    "Vendor selection and management",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle2
                        size={20}
                        className="text-primary-600 mr-3 mt-1 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <GradientButton to="/contact">
                  Get a Consultation
                </GradientButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="IT Consulting"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Featured Service: Staffing */}
      <ParallaxSection>
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Staff Augmentation"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedText
                  text="Staff Augmentation"
                  className="text-3xl font-semibold mb-6"
                />
                <p className="text-navy-600 mb-6">
                  Scale your team quickly with our talented pool of technology
                  professionals. We provide skilled resources across various
                  disciplines to help you meet your project deadlines and
                  business objectives.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Software engineers and developers",
                    "UX/UI designers",
                    "DevOps specialists",
                    "Project managers",
                    "QA and testing professionals",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle2
                        size={20}
                        className="text-primary-600 mr-3 mt-1 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <GradientButton to="/contact">Find Talent</GradientButton>
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Featured Service: Web Development */}
      <ParallaxSection>
        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <AnimatedText
                  text="Web Development"
                  className="text-3xl font-semibold mb-6"
                />
                <p className="text-navy-600 mb-6">
                  Our expert development team creates custom web applications
                  and responsive websites that deliver exceptional user
                  experiences. We leverage the latest technologies and best
                  practices to ensure your web presence is fast, secure, and
                  scalable.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Custom web application development",
                    "Responsive website design and development",
                    "E-commerce solutions",
                    "Content management systems",
                    "API development and integration",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle2
                        size={20}
                        className="text-primary-600 mr-3 mt-1 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <GradientButton to="/contact">Start a Project</GradientButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <img
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Web Development"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Featured Service: Digital Marketing */}
      <ParallaxSection>
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
"
                  alt="Digital Marketing"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedText
                  text="Digital Marketing"
                  className="text-3xl font-semibold mb-6"
                />
                <p className="text-navy-600 mb-6">
                  Our digital marketing services are designed to grow your brand
                  online, generate qualified leads, and improve customer
                  engagement through targeted strategies and performance-based
                  campaigns.{" "}
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Search Engine Optimization (SEO)",
                    "Social Media Marketing & Management",
                    "Google Ads & PPC Campaigns",
                    "Email Marketing & Automation",
                    "Content Strategy & Branding",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle2
                        size={20}
                        className="text-primary-600 mr-3 mt-1 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <GradientButton to="/contact">Find Talent</GradientButton>
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Our Process */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Process"
            subtitle="We follow a structured approach to ensure successful delivery of every project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <LightbulbIcon size={32} />,
                title: "Discover",
                description:
                  "We work closely with you to understand your business needs and project requirements.",
              },
              {
                icon: <LineChart size={32} />,
                title: "Plan",
                description:
                  "Our team develops a detailed roadmap and strategy for implementing your solution.",
              },
              {
                icon: <Code size={32} />,
                title: "Build",
                description:
                  "We develop and implement your solution using agile methodologies and best practices.",
              },
              {
                icon: <Database size={32} />,
                title: "Deliver",
                description:
                  "We deploy your solution and provide ongoing support to ensure long-term success.",
              },
            ].map((step, index) => (
              <FloatingCard key={index}>
                <motion.div
                  className="card p-6 h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 p-3 bg-primary-50 rounded-lg w-fit">
                    <div className="text-primary-600">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-navy-600">{step.description}</p>
                </motion.div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <AnimatedText
              text="Let's Work Together"
              className="text-white text-3xl md:text-4xl font-semibold mb-6"
            />
            <p className="text-white/90 text-lg mb-8">
              Ready to take your business to the next level with our services?
              Contact us today to discuss your project.
            </p>
            <GradientButton to="/contact" className="inline-block">
              Get in Touch
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
