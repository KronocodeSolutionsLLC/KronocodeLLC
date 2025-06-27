import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface GradientButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GradientButton = ({ to, children, className = '', onClick }: GradientButtonProps) => {
  return (
    <Link to={to} onClick={onClick}>
      <motion.div
        className={`relative group ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative px-6 py-3 bg-white rounded-lg leading-none flex items-center">
          <span className="bg-gradient-to-r from-secondary-500 to-primary-600 bg-clip-text text-transparent font-medium">
            {children}
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default GradientButton;