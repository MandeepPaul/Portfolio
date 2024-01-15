import { motion, useAnimationControls } from "framer-motion";

const hoverVariant = {
  open: {
    opacity: 1,
    x: 125,
    transition: { duration: 0.4 },
  },
  closed: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const WorkCardButton = () => {
  const controls = useAnimationControls();

  const handleHoverState = () => {
    controls.start("open");
  };
  const handleUnhoverState = () => {
    controls.start("closed");
  };
  return (
    <motion.button
      onHoverStart={handleHoverState}
      onHoverEnd={handleUnhoverState}
      className="relative px-4 py-1 border-[0.5px] border-neutral-600 overflow-hidden"
    >
      Check Live
      <motion.span
        variants={hoverVariant}
        animate={controls}
        className="bg-white absolute -left-[125px] top-0 w-[115%] h-full rounded-r-full mix-blend-difference"
      />
    </motion.button>
  );
};

export default WorkCardButton;
