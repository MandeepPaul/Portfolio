import { motion } from "framer-motion";

const buttonVar = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

export const ResumeButton = ({ className }) => {
  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      transition={{ type: "spring", stiffness: 600 }}
      variants={buttonVar}
      className={`px-4 py-1 rounded-full border-[0.5px] border-blue-400 bg-gradient-to-r from-teal-800 to-blue-800 ${className}`}
    >
      Resume
    </motion.button>
  );
};
