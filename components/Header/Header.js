import ReactDOM from "react-dom";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";

import SideNav from "../Overlays/SideNav";
import { NavLinks } from "@/utils/NavLinks";
import { ToggleButton } from "../UI/Buttons/ToogleButton";
import { ConnectButton } from "../UI/Buttons/ConnectButton";

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const hoverStartHandler = (index, isHovering) => {
    const liNode = scope.current.children[index];
    const originalLink = liNode.children[0];
    const tempLink = liNode.children[1];

    if (originalLink && isHovering) {
      console.log(originalLink);

      const enterAnimation = async () => {
        animate(originalLink, { opacity: 0, y: -24 }, { duration: 0.2 });
        animate(tempLink, { y: -24 }, { duration: 0.2 });
      };
      enterAnimation();
    }

    if (!isHovering) {
      const exitAnimation = async () => {
        animate(originalLink, { opacity: 1, y: 0 }, { duration: 0.2 });
        animate(tempLink, { y: 0 }, { duration: 0.2 });
      };
      exitAnimation();
    }
  };

  return (
    <header className="h-18 max-w-[1440px] mx-auto flex items-center font-primaryFont text-white p-4 lg:justify-around">
      <ToggleButton
        className="lg:hidden"
        onClick={() => setNavOpen(!isNavOpen)}
        animate={isNavOpen ? "open" : "closed"}
      />

      <motion.ul
        ref={scope}
        className="hidden bg-neutral-900 bg-opacity-80 px-5 max-h-10 border-[0.5px] border-slate-700 rounded-full lg:flex lg:items-center"
      >
        {NavLinks.map((links, index) => (
          <motion.li
            className=" h-6 my-2 px-5 flex flex-col overflow-hidden"
            key={links.id}
            onHoverStart={() => hoverStartHandler(index, true)}
            onHoverEnd={() => hoverStartHandler(index, false)}
          >
            <Link className="text-gray-300 " href={links.links}>
              {links.name}
            </Link>
            <Link className="font-semibold" href={links.links}>
              {links.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* <ConnectButton /> */}
      {isNavOpen &&
        ReactDOM.createPortal(
          <AnimatePresence>
            <motion.nav initial="closed" animate="open" exit="closed">
              <SideNav onReset={() => setNavOpen(false)} />
            </motion.nav>
          </AnimatePresence>,
          document.getElementById("back-drop")
        )}
    </header>
  );
};

export default Header;
