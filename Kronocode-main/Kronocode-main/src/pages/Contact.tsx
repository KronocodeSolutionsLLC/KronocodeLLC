import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Kronocode Solutions LLC. Contact us for technology consulting, staffing, and web development services."
        keywords="contact kronocode, technology consulting contact, IT services contact"
        canonical="https://kronocode.com/contact"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-navy-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a question or want to discuss a project? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Contact Information"
                centered={false}
              >
                <div className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-full mt-4 mb-6"></div>
              </SectionHeading>
              
              <p className="text-navy-600 mb-8">
                We're here to help with any questions you may have about our services. Reach out to us using any of the following methods:
              </p>
              
              <div className="space-y-6 mb-12">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-navy-600">
                      1309 COFFEEN AVE STE1200<br />
                      SHERIDAN, WY 82801<br />
                      United States
                    </p>
                  </div>
                   {/* <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-navy-600">
                      123 Tech Boulevard<br />
                      Silicon Valley, CA 94085<br />
                      United States
                    </p>
                  </div> */}
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-navy-600">
                      <a href="mailto:info@kronocode.com" className="hover:text-primary-600 transition-colors">
                        info@kronocode.com
                      </a><br />
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-navy-600">
                      <a href="tel:+1234567890" className="hover:text-primary-600 transition-colors">
                        +1-(715)-629-3364
                      </a><br />
                      <a href="tel:+1987654321" className="hover:text-primary-600 transition-colors">
                        +1-(909)-403-3021
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Clock size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-navy-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="rounded-xl overflow-hidden h-[300px] shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101268.17002596055!2d-122.07335232547507!3d37.38911895201725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1650000000000!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location map"
                ></iframe>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Send a Message"
                centered={false}
              >
                <div className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-full mt-4 mb-6"></div>
              </SectionHeading>
              
              <p className="text-navy-600 mb-8">
                Fill out the form below and one of our team members will get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about working with Kronocode."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              {
                question: "What services does Kronocode offer?",
                answer: "Kronocode offers a comprehensive range of technology services including IT consulting, staff augmentation, web development, mobile app development, cloud solutions, and cybersecurity services."
              },
              {
                question: "How do I get started with Kronocode?",
                answer: "Getting started is easy! Simply fill out the contact form on this page or give us a call. We'll schedule an initial consultation to discuss your needs and how we can help."
              },
              {
                question: "What industries do you work with?",
                answer: "We work with clients across various industries including healthcare, finance, retail, education, manufacturing, and technology. Our solutions are tailored to meet the specific needs of each industry."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on the scope and complexity of the work. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes, we offer various support and maintenance plans to ensure your solution continues to perform optimally after launch. We can customize a support plan based on your needs."
              },
              {
                question: "How do you handle project communication?",
                answer: "We believe in transparent and regular communication. Depending on your preference, we can set up weekly status meetings, progress reports, and use project management tools to keep you informed."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-navy-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;