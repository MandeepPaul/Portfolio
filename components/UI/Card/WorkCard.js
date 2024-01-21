import { motion, useAnimationControls } from "framer-motion";
import WorkCardButton from "../Buttons/WorkCardButton";

const hoverVariant = {
  open: {
    opacity: 1,
    y: -200,
    transition: { duration: 0.4 },
  },
  closed: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const WorkCard = ({
  className,
  imageSrc,
  imageAlt,
  techStack,
  hoverText1,
  hoverColor,
  hoverText2,
  projectName,
  content,
  liveLink,
  codeLink,
}) => {
  const controls = useAnimationControls();
  const handleHoverState = () => {
    controls.start("open");
  };
  const handleUnhoverState = () => {
    controls.start("closed");
  };

  return (
    <motion.div
      onHoverStart={handleHoverState}
      onHoverEnd={handleUnhoverState}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`p-4 space-y-4 min-h-[600px] mx-4 w-[350px] lg:w-[400px] flex flex-col bg-neutral-900 bg-opacity-85 rounded-xl group ${className}`}
    >
      <div className="relative p-1 overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-[200px] rounded-t-lg object-fit"
        />
        <motion.div
          variants={hoverVariant}
          animate={controls}
          className="absolute w-full h-[200px] bg-black rounded-t-lg flex flex-col items-start pl-10 justify-center text-5xl"
        >
          <span>{hoverText1}</span>
          <span className={hoverColor}>{hoverText2}</span>
        </motion.div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {techStack.map((item, index) => (
          <span
            key={index}
            className="px-4 py-1 border-neutral-700 text-neutral-400 border-[0.5px] rounded-full group-hover:text-white group-hover:border-white"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="px-1 space-y-2 h-[300px] flex flex-col flex-grow justify-between">
        <h2 className="text-3xl">{projectName}</h2>
        <p className="flex-grow pt-4">{content}</p>
        <div className="flex justify-between gap-2">
          <WorkCardButton title="Check Live" href={liveLink} />
          <WorkCardButton title="See Code" href={codeLink} />
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
