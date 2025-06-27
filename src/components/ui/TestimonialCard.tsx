import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company, 
  image 
}: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-6 md:p-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-navy-600 mb-4 italic">"{quote}"</p>
          <div>
            <h4 className="font-semibold text-navy-900">{author}</h4>
            <p className="text-sm text-navy-500">{position}, {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;