import { motion } from "framer-motion";

const SectionWrapper = ({ id, className, children }) => {
  return (
    <motion.section
      id={id}
      className={`mx-10 py-6 space-y-10 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
