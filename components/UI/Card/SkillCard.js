import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const hoverVariant = {
  open: {
    opacity: 1,
    y: -44,
    transition: { duration: 0.3 },
  },
  closed: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const SkillCard = ({ title, svg: SVG }) => {
  const controls = useAnimationControls();
  const [isHovering, setHovering] = useState(false);

  console.log(SVG);

  const handleHoverState = () => {
    setHovering(true);
    controls.start("open");
  };
  const handleUnhoverState = () => {
    setHovering(false);
    controls.start("closed");
  };

  return (
    <motion.div
      onHoverStart={handleHoverState}
      onHoverEnd={handleUnhoverState}
      className="bg-neutral-800 relative flex justify-center items-center rounded overflow-hidden"
    >
      {isHovering && SVG ? (
        <span>{SVG}</span>
      ) : (
        <span className="p-2 lg:text-lg xl:text-xl">{title}</span>
      )}

      <motion.div
        variants={hoverVariant}
        animate={controls}
        className="absolute -bottom-[44px] bg-white w-full h-full rounded mix-blend-difference "
      ></motion.div>
    </motion.div>
  );
};

export default SkillCard;
