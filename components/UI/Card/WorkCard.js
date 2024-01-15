import { motion, useAnimationControls } from "framer-motion";
import WorkCardButton from "../Buttons/WorkCardButton";

const hoverVariant = {
  open: {
    opacity: 1,
    y: -185,
    transition: { duration: 0.4 },
  },
  closed: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const WorkCard = () => {
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
      className="min-h-[600px] max-w-[400px] flex flex-col mx-4 p-4 bg-neutral-800 bg-opacity-60 rounded-xl space-y-4 group"
    >
      <div className="relative p-1 overflow-hidden">
        <img
          src="https://img.yumpu.com/62379956/1/500x640/uber-eats-clone.jpg"
          alt="UberEats_Logo"
          className="w-full h-full rounded-t-lg"
        />
        <motion.div
          variants={hoverVariant}
          animate={controls}
          className="absolute w-full h-[200px] bg-black rounded-t-lg flex flex-col items-center justify-center text-5xl"
        >
          <span>Uber</span>
          <span className="text-green-600">Eats</span>
        </motion.div>
      </div>

      <div className="flex gap-2">
        <span className="px-4 py-1 border-neutral-700 text-neutral-400 border-[0.5px] rounded-full group-hover:text-white group-hover:border-white">
          React
        </span>
        <span className="px-4 py-1 border-neutral-700 text-neutral-400 border-[0.5px] rounded-full group-hover:text-white group-hover:border-white">
          TypeScript
        </span>
      </div>

      <div className="px-1 space-y-2 h-[300px] flex flex-col justify-between">
        <h2 className="text-3xl">Uber Eats Clone</h2>
        <p className="flex-grow">
          Implemented restaurant listings with menus for multiple stores and
          designed order processing functionalities for users, including order
          history.
        </p>
        <div className="flex justify-between gap-2">
          <WorkCardButton />
          <WorkCardButton />
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
