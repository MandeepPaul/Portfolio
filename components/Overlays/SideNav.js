import { motion } from "framer-motion";
import Modal from "../UI/Overlay/Modal";

const SideNav = ({ onReset }) => {
  return (
    <Modal
      reset={onReset}
      modal="top-0 left-0 bg-slate-500  pt-16 w-full h-full md:w-1/2 font-primaryFont"
    >
      <motion.nav className="m-4 flex flex-col gap-6 text-lg">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#education">Education</a>
      </motion.nav>
    </Modal>
  );
};

export default SideNav;
