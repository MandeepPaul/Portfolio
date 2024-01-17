import { motion } from "framer-motion";

const SectionWrapper = ({ id, className, children }) => {
  return (
    <motion.section
      id={id}
      className={`py-2 space-y-4 min-h-screen md:py-6 md:space-y-10 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
