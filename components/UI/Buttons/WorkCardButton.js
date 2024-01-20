import { LinkArrow } from "@/public/SVG/svg";
import { motion, useAnimationControls } from "framer-motion";

const hoverVariant = {
  open: {
    opacity: 1,
    x: 165,
    transition: { duration: 0.4 },
  },
  closed: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const WorkCardButton = ({ href, title }) => {
  const controls = useAnimationControls();

  const handleHoverState = () => {
    controls.start("open");
  };
  const handleUnhoverState = () => {
    controls.start("closed");
  };
  return (
    <motion.a
      href={href}
      target="_blank"
      onHoverStart={handleHoverState}
      onHoverEnd={handleUnhoverState}
      className="relative px-3 md:px-4 py-1 border-[0.5px] border-neutral-600 flex items-center justify-center gap-2 overflow-hidden cursor-pointer hover:underline underline-offset-2 text-sm md:text-base"
    >
      {title}
      <LinkArrow className="h-4 w-4 md:h-5 md:w-5" />
      <motion.span
        variants={hoverVariant}
        animate={controls}
        className="bg-white absolute -left-[165px] top-0 w-[120%] h-full rounded-r-full mix-blend-difference"
      />
    </motion.a>
  );
};

export default WorkCardButton;
