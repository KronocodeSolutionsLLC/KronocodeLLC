import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative w-32 h-32">
        {/* Outer Arc */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full border-t-[3px] border-pink-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        {/* Inner Arc (smaller, counter-rotating) */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border-b-[3px] border-pink-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
