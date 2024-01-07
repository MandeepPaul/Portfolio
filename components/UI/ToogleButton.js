import { motion } from "framer-motion";

export const ToggleButton = ({ onClick, animate }) => (
  <motion.button
    className={
      "flex flex-col gap-1 items-center justify-center bg-white h-12 w-12 rounded-full z-50"
    }
    onClick={onClick}
    animate={animate}
  >
    <motion.span
      variants={{
        closed: {
          y: 0,
          rotate: 0,
        },
        open: {
          y: "6px",
          rotate: "-45deg",
        },
      }}
      className="bg-black w-6 h-[3px]"
    />
    <motion.span
      className="bg-black w-6 h-[3px]"
      variants={{
        closed: {
          width: "50%",
        },
        open: {
          width: 0,
        },
      }}
    />

    <motion.span
      variants={{
        closed: {
          y: 0,
          rotate: 0,
        },
        open: {
          y: "-8px",
          rotate: "45deg",
        },
      }}
      className="bg-black  w-6 h-[3px]"
    />
  </motion.button>
);
