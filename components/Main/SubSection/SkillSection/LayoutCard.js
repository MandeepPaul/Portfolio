import { TerminalIcon } from "@/public/SVG/svg";
import { motion } from "framer-motion";

const LayoutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-neutral-950 w-[280px] md:w-[350px] lg:w-[400px] m-4 p-4 border-x-[0.5px] border-teal-400 flex flex-col items-center justify-start text-center space-y-2"
    >
      <TerminalIcon className="fill-teal-400" />
      <>
        <h3 className="text-lg font-headingFont font-bold ">
          Front-end Development
        </h3>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
      </>

      <h4 className="text-teal-400 pt-6">Front-end Toolbox</h4>
      <ul className="space-y-1">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React JS</li>
        <li>Next JS</li>
        <li>TailwindCSS</li>
        <li>React-Router</li>
        <li>Redux</li>
      </ul>
    </motion.div>
  );
};

export default LayoutCard;
