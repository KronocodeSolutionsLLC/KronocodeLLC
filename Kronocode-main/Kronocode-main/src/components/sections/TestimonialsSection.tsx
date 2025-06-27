import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    id: 1,
    quote: "Kronocode's team helped us transform our digital presence with a beautiful website and robust backend systems. Their attention to detail and technical expertise is exceptional.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechStart Solutions",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    quote: "Working with Kronocode on our staffing needs has been a game-changer. They consistently provide top-tier talent that perfectly matches our requirements.",
    author: "Michael Chen",
    position: "VP of Engineering",
    company: "Innovate Inc.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    quote: "The consulting services provided by Kronocode helped us optimize our development processes and reduce costs by 30%. They're truly partners in our success.",
    author: "Emily Rodriguez",
    position: "Product Manager",
    company: "FutureTech",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    quote: "Kronocode delivered our complex web application ahead of schedule and under budget. Their developers are some of the most skilled professionals we've worked with.",
    author: "David Williams",
    position: "CEO",
    company: "GrowthLabs",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 2);
  const hasNext = currentIndex + 2 < testimonials.length;
  const hasPrev = currentIndex > 0;
  
  // Automatically advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (hasNext && !isAnimating) {
        handleNext();
      } else if (!hasPrev && !isAnimating) {
        setCurrentIndex(0); // Loop back to beginning
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex, hasNext, hasPrev, isAnimating]);
  
  const handleNext = () => {
    if (hasNext && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const handlePrev = () => {
    if (hasPrev && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from our satisfied clients about their experience working with Kronocode."
        />
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={isAnimating ? { opacity: 0, x: 20 } : false}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              disabled={!hasPrev || isAnimating}
              className={`p-2 rounded-full ${
                hasPrev && !isAnimating
                  ? 'bg-white shadow-md text-navy-800 hover:bg-primary-50'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              } transition-colors`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext || isAnimating}
              className={`p-2 rounded-full ${
                hasNext && !isAnimating
                  ? 'bg-white shadow-md text-navy-800 hover:bg-primary-50'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              } transition-colors`}
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;