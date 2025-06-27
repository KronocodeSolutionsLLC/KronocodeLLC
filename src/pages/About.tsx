import { motion } from "framer-motion";
import { CheckCircle2, Award, Clock, UserCheck, Building } from "lucide-react";
import Timeline from "../components/about/Timeline";
import SEO from "../components/SEO";
import SectionHeading from "../components/ui/SectionHeading";
import TeamMember from "../components/ui/TeamMember";
import ParallaxSection from "../components/ui/ParallaxSection";
import AnimatedText from "../components/ui/AnimatedText";
import GradientButton from "../components/ui/GradientButton";
import FloatingCard from "../components/ui/FloatingCard";

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Kronocode Solutions LLC, our mission, values, and expert team dedicated to delivering innovative technology solutions."
        keywords="about kronocode, technology company, IT consulting firm, software development company"
        canonical="https://kronocode.com/about"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="About Kronocode"
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-tight mb-6"
            />

            <motion.p
              className="text-xl text-navy-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We're a team of passionate technology experts dedicated to helping
              businesses succeed in the digital landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
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
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Kronocode team"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>

              <div>
                <SectionHeading title="Our Story" centered={false}>
                  <div className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-full mt-4 mb-6"></div>
                </SectionHeading>

                <div className="space-y-6 text-navy-600">
                  <p>
                    <b>Kronocode Solutions LLC</b> began with a bold vision in{" "}
                    <b>2020</b>, rooted in the heart of the United States—to
                    bridge the gap between exceptional talent and growing
                    businesses through innovative consulting and staffing
                    solutions. What started as a small team with big dreams
                    quickly evolved into a trusted partner for companies seeking
                    transformation through technology.{" "}
                  </p>
                  <p>
                    Recognizing the global demand for agile digital solutions
                    and reliable tech professionals, we expanded operations to
                    India in <b>2023</b>, establishing a strong offshore
                    delivery model. This move enabled us to blend global reach
                    with local expertise, offering 24/7 support and
                    cost-effective solutions without compromising quality.{" "}
                  </p>
                  <p>
                    Over the years, we have grown into a full-service firm,
                    integrating IT consulting, staff augmentation, web
                    development, and digital marketing under one roof. Every
                    project we take on is driven by a commitment to excellence,
                    integrity, and long-term partnerships.{" "}
                  </p>
                  <p>
                    Our journey is powered by people—clients who trust us, teams
                    who believe in us, and a passion for solving real-world
                    business challenges through technology.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>
      {/* Timeline Section */}
      <Timeline />
      {/* Our Values */}
      <ParallaxSection>
        <section className="section bg-gray-50">
          <div className="container">
            <SectionHeading
              title="Our Values"
              subtitle="These core principles guide everything we do at Kronocode."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  icon: <Award size={32} />,
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, from code quality to client communication.",
                },
                {
                  icon: <UserCheck size={32} />,
                  title: "Integrity",
                  description:
                    "We operate with honesty and transparency, always doing what's right for our clients.",
                },
                {
                  icon: <Building size={32} />,
                  title: "Innovation",
                  description:
                    "We embrace new technologies and approaches to solve complex business challenges.",
                },
                {
                  icon: <Clock size={32} />,
                  title: "Commitment",
                  description:
                    "We're dedicated to our clients' success and delivering on our promises.",
                },
              ].map((value, index) => (
                <FloatingCard key={index}>
                  <motion.div
                    className="card p-6 h-full flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-4 p-3 bg-primary-50 rounded-lg w-fit">
                      <div className="text-primary-600">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-navy-600">{value.description}</p>
                  </motion.div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      <ParallaxSection>
        <section className="section">
          <div className="container">
            <SectionHeading title="Meet Our Team" />

            <motion.p
              className="text-gray-700 text-lg mt-6 max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              At <strong>Kronocode Solutions</strong>, we believe that great
              results come from great people. Our leadership team brings decades
              of combined experience in{" "}
              <strong>technology, staffing, consulting, and innovation</strong>.
              We’re driven by a shared passion to empower businesses and
              individuals by delivering tailored solutions and real impact
              across the globe.
            </motion.p>

            <motion.p
              className="text-gray-600 text-md mt-6 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From strategic advisors to technical leads, our diverse team
              collaborates seamlessly across continents—blending expertise with
              empathy to ensure every project is handled with precision, care,
              and commitment to your success.
            </motion.p>
          </div>
        </section>
      </ParallaxSection>

      {/* Why Clients Choose Us */}
      <ParallaxSection>
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading title="Why Clients Choose Us" centered={false}>
                  <div className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-full mt-4 mb-6"></div>
                </SectionHeading>

                <div className="space-y-6">
                  {[
                    {
                      title: "Technical Expertise",
                      description:
                        "Our team brings deep expertise across a wide range of technologies and domains.",
                    },
                    {
                      title: "Proven Results",
                      description:
                        "We have a track record of delivering successful projects for clients across industries.",
                    },
                    {
                      title: "Transparent Communication",
                      description:
                        "We keep you informed and involved throughout the entire process.",
                    },
                    {
                      title: "Flexible Engagement Models",
                      description:
                        "We offer various engagement models to suit your specific needs and budget.",
                    },
                    {
                      title: "Long-term Partnership",
                      description:
                        "We focus on building lasting relationships, not just completing transactions.",
                    },
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
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-navy-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Client meeting"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxSection>

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
              text="Ready to Transform Your Business?"
              className="text-white text-3xl md:text-4xl font-semibold mb-6"
            />
            <p className="text-white/90 text-lg mb-8">
              Get in touch with us today to discuss how we can help you achieve
              your technology goals.
            </p>
            <GradientButton to="/contact" className="inline-block">
              Schedule a Consultation
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
