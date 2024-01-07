import { useState } from "react";
import ReactDOM from "react-dom";
import { motion, useCycle } from "framer-motion";
import { Hamburger, Cross } from "../../public/SVG/svg";
import SideNav from "../Overlays/SideNav";
import { ToggleButton } from "../UI/ToogleButton";

const buttonVar = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

const sidebar = {
  open: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [isNavOpen, setNavOpen] = useCycle(false, true);

  return (
    <header className="h-24 max-w-[1440px] mx-auto flex items-center font-primaryFont text-white  justify-between px-10">
      <ToggleButton
        onClick={() => setNavOpen(!isNavOpen)}
        animate={isNavOpen ? "open" : "closed"}
      />

      <nav className="hidden space-x-10 px-10 py-2 border-[0.5px] border-slate-700 rounded-full lg:flex lg:items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#education">Education</a>
      </nav>

      <motion.button
        whileHover="hover"
        whileTap="tap"
        variants={buttonVar}
        className={`px-4 py-1 rounded-full border-[0.5px] border-blue-400 bg-gradient-to-r from-sky-600  to-blue-800 hover:to-sky-600 hover:shadow-md`}
      >
        Connect
      </motion.button>

      {isNavOpen &&
        ReactDOM.createPortal(
          <SideNav variants={sidebar} onReset={() => setNavOpen(false)} />,
          document.getElementById("back-drop")
        )}
    </header>
  );
};

export default Header;
