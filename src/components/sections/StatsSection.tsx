import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Building, Award, Briefcase } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  startCounting: boolean;
}

const StatItem = ({ icon, value, label, suffix = '+', delay = 0, startCounting }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // don't start counting if not visible

    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [startCounting, value]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={startCounting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.3 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg">
        {icon}
      </div>
      <h3 className="text-4xl font-extrabold mb-2 text-gray-900">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-700 font-medium">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // triggers when about 100px into viewport

  return (
    <section ref={ref} className="section bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <StatItem
            icon={<Users size={32} />}
            value={150}
            label="Talented Professionals"
            delay={0}
            startCounting={isInView}
          />
          <StatItem
            icon={<Building size={32} />}
            value={200}
            label="Projects Completed"
            delay={1}
            startCounting={isInView}
          />
          <StatItem
            icon={<Briefcase size={32} />}
            value={50}
            label="Corporate Clients"
            delay={2}
            startCounting={isInView}
          />
          <StatItem
            icon={<Award size={32} />}
            value={15}
            label="Years of Experience"
            delay={3}
            startCounting={isInView}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
