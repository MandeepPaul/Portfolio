import { motion } from "framer-motion";

const buttonVar = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

export const ConnectButton = () => {
  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={buttonVar}
      className={`px-4 py-1 rounded-full border-[0.5px] border-blue-400 bg-gradient-to-r from-sky-600  to-blue-800 hover:to-sky-600 hover:shadow-md`}
    >
      Connect
    </motion.button>
  );
};
