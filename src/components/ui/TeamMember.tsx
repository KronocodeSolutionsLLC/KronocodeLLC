import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  delay?: number;
}

const TeamMember = ({ 
  name, 
  position, 
  image, 
  linkedin, 
  twitter,
  delay = 0
}: TeamMemberProps) => {
  return (
    <motion.div 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="text-navy-600 mb-3">{position}</p>
        
        <div className="flex space-x-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-primary-600 transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={18} />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-primary-600 transition-colors"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;