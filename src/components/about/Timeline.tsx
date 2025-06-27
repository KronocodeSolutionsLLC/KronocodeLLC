import React, { useState, useEffect } from "react";
import { FaBuilding, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { CodeIcon } from "lucide-react";
import { TbGraph } from "react-icons/tb";

const steps = [
  {
    id: 1,
    year: "2020",
    title: "Kronocode Founded",
    description:
      "Founded with a mission to deliver premium tech services.",
    icon: <FaBuilding />,
    color: "bg-indigo-500",
  },
  {
    id: 2,
    year: "2020",
    title: "Expanded Services",
    description: "Added staffing solutions to our service offerings.",
    icon: <FaUsers />,
    color: "bg-purple-500",
  },
  {
    id: 3,
    year: "2021",
    title: "Web Development Division",
    description:
      "Launched our web development team to build scalable digital solutions.",
    icon: <CodeIcon />, // from lucide-react or import any preferred icon
    color: "bg-green-500",
  },
  {
    id: 4,
    year: "2022",
    title: "Digital Marketing Launch",
    description: "Began offering full-stack digital marketing services.",
    icon: <TbGraph />, // from react-icons or your library
    color: "bg-orange-500",
  },
  {
    id: 5,
    year: "2023",
    title: "New Headquarters",
    description:
      "Opened our current India headquarters and expanded the team.",
    icon: <FaMapMarkerAlt />,
    color: "bg-pink-500",
  },
 
];

// Variants for sliding in from left or right
const textVariants: Variants = {
  fromRightInitial: { opacity: 0, x: 30, pointerEvents: "none" },
  fromRightHover: {
    opacity: 1,
    x: 0,
    pointerEvents: "auto",
    transition: { duration: 0.6, ease: "easeOut" },
  },
  fromLeftInitial: { opacity: 0, x: -30, pointerEvents: "none" },
  fromLeftHover: {
    opacity: 1,
    x: 0,
    pointerEvents: "auto",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Timeline: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [animatedIds, setAnimatedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // On mobile, animate each step once on mount, from their respective side
  useEffect(() => {
    if (!isDesktop) {
      steps.forEach((step, i) => {
        setTimeout(() => {
          setAnimatedIds((prev) => new Set(prev).add(step.id));
        }, i * 200);
      });
    } else {
      setAnimatedIds(new Set());
    }
  }, [isDesktop]);

  return (
    <section className="py-16 bg-white font-poppins">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="mt-2 text-gray-500 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A journey of tech innovation and progress, from concept to market
            success.
          </motion.p>
        </div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 rounded hidden md:block"></div>
          <div className="w-px bg-gray-300 mx-auto h-full md:hidden absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2"></div>

          <div className="flex flex-col space-y-20 relative">
            {steps.map((step, index) => {
              const isRightSide = index % 2 === 0;
              const isAnimatedOnMobile = animatedIds.has(step.id);

              return (
                <div
                  key={step.id}
                  className={`relative flex md:justify-between items-center w-full flex-col md:flex-row`}
                  onMouseEnter={() => setHoveredId(step.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Left half container */}
                  <div
                    className={`w-full md:w-1/2 
                      ${!isRightSide ? "pr-0 md:pr-8" : "md:pr-0"} 
                      mb-4 md:mb-0
                      ${!isRightSide ? "order-2 md:order-1" : "order-2 md:order-1"}
                      text-center md:text-left
                    `}
                  >
                    {/* Left side text ONLY on desktop */}
                    {!(!isRightSide || !isDesktop) && null}
                    {/* So show left text only if left side AND desktop */}
                    {(!isRightSide && isDesktop) && (
                      <motion.div
                        className="inline-block"
                        variants={textVariants}
                        initial="fromLeftInitial"
                        animate={
                          hoveredId === step.id
                            ? "fromLeftHover"
                            : "fromLeftInitial"
                        }
                      >
                        <div className="text-2xl font-bold text-blue-500">
                          {step.year}
                        </div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center icon */}
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg ${step.color} text-white rotate-45 
                    z-10
                    order-1 md:order-2
                    relative md:absolute
                    md:left-1/2 md:transform md:-translate-x-1/2
                    mb-4 md:mb-0
                    `}
                  >
                    <div className="text-3xl -rotate-45">{step.icon}</div>
                  </div>

                  {/* Right half container */}
                  <div
                    className={`w-full md:w-1/2 
                      ${isRightSide ? "pl-0 md:pl-8" : "md:pl-0"} 
                      mb-4 md:mb-0
                      ${isRightSide ? "order-3 md:order-3" : "order-4 md:order-3"}
                      text-center md:text-right
                    `}
                  >
                    {/* Right side text ONLY on desktop */}
                    {isRightSide && isDesktop && (
                      <motion.div
                        className="inline-block"
                        variants={textVariants}
                        initial="fromRightInitial"
                        animate={
                          hoveredId === step.id
                            ? "fromRightHover"
                            : "fromRightInitial"
                        }
                      >
                        <div className="text-2xl font-bold text-blue-500">
                          {step.year}
                        </div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* MOBILE ONLY: Show single text below icon, centered */}
                  {!isDesktop && (
                    <motion.div
                      className="w-full mt-4 text-center px-2"
                      variants={textVariants}
                      initial={isRightSide ? "fromRightInitial" : "fromLeftInitial"}
                      animate={isAnimatedOnMobile ? (isRightSide ? "fromRightHover" : "fromLeftHover") : (isRightSide ? "fromRightInitial" : "fromLeftInitial")}
                    >
                      <div className="text-2xl font-bold text-blue-500">{step.year}</div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
