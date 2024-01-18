import { motion } from "framer-motion";

const Heading = ({ className = "", children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`sticky top-0 z-10 font-headingFont3 bg-gradient-to-b from-black via-neutral-950 to-transparent py-16 text-4xl md:text-5xl lg:text-6xl text-center ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
