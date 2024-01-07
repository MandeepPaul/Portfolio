import { useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { Hamburger, Cross } from "../../public/SVG/svg";
import Button from "../UI/Button";
import SideNav from "../Overlays/SideNav";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Header = () => {
  const [navIsOpen, setNavOpen] = useState(true);

  return (
    <header className="h-24 max-w-[1440px] mx-auto flex items-center font-primaryFont text-white border-slate-700 justify-between px-10">
      <Button
        className={`lg:hidden z-50`}
        onClick={() => setNavOpen((navIsOpen) => !navIsOpen)}
      >
        {navIsOpen ? (
          <Cross className="h-8 w-8" />
        ) : (
          <Hamburger className="h-8 w-8" />
        )}
      </Button>

      <nav className="hidden space-x-8 px-8 py-2 border-[0.5px] border-slate-700 rounded-full lg:flex lg:items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#education">Education</a>
      </nav>

      <Button
        className={`px-4 py-1 rounded-full border-[0.5px] border-blue-400 bg-gradient-to-r from-sky-600  to-blue-800 hover:to-sky-600 hover:shadow-md`}
      >
        Connect
      </Button>

      {/* {navIsOpen &&
        ReactDOM.createPortal(
          <SideNav onReset={() => setNavOpen(false)} />,
          document.getElementById("back-drop")
        )} */}
    </header>
  );
};

export default Header;
