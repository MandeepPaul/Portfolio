import ReactDOM from "react-dom";
import Link from "next/link";
import { useRef } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";

import SideNav from "../Overlays/SideNav";
import { NavLinks } from "@/utils/NavLinks";
import { useDimensions } from "@/utils/useDimensions";
import { ToggleButton } from "../UI/Buttons/ToogleButton";
import { ConnectButton } from "../UI/Buttons/ConnectButton";

const Header = () => {
  const [isNavOpen, setNavOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <header className="h-18 max-w-[1440px] mx-auto flex items-center font-primaryFont text-white  justify-between p-4">
      <ToggleButton
        className="lg:hidden"
        onClick={() => setNavOpen(!isNavOpen)}
        animate={isNavOpen ? "open" : "closed"}
      />

      <nav className="hidden space-x-10 px-10 py-2 border-[0.5px] border-slate-700 rounded-full lg:flex lg:items-center">
        {NavLinks.map((links) => (
          <Link href={links.links}>{links.name}</Link>
        ))}
      </nav>

      <ConnectButton />
      {isNavOpen &&
        ReactDOM.createPortal(
          <AnimatePresence>
            <motion.nav animate={isNavOpen ? "open" : "closed"} exit="closed">
              <SideNav onReset={() => setNavOpen(false)} />
            </motion.nav>
          </AnimatePresence>,
          document.getElementById("back-drop")
        )}
    </header>
  );
};

export default Header;
