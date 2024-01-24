import { motion } from "framer-motion";
import CustomFloatingAnimation from "@/components/UI/Animations/CustomFloatingAnimation";
import Content from "./AboutSection/Content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/public/SVG/svg";

const About = () => {
  return (
    <section id="About" className="h-screen">
      <div className="m-4 px-2 pt-4 h-full relative md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 mt-[100px]">
        <div className="flex flex-col justify-between md:flex-none md:my-auto lg:col-span-2 lg:my-0 lg:flex lg:flex-col lg:justify-start">
          <motion.p
            className="font-headingFont3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-3xl md:text-4xl">Hey, I'm</span>
            <br />
            <span className="text-4xl md:text-5xl">Mandeep Kumar</span>
          </motion.p>
          <motion.hr
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="my-2 w-[80px] border-t-2 border-teal-600"
          />
          <Content className="md:hidden lg:pt-8 lg:block" />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="my-4 pt-6 flex flex-col items-center justify-between relative md:my-0 md:pt-0 md:justify-center lg:justify-start"
        >
          <CustomFloatingAnimation rotation={3}>
            <GitHubIcon className="h-8 w-8 fill-white absolute right-0 top-4" />
          </CustomFloatingAnimation>

          <CustomFloatingAnimation rotation={-3}>
            <MailIcon className="h-8 w-8 fill-white absolute right-16 top-16" />
          </CustomFloatingAnimation>

          <CustomFloatingAnimation rotation={4}>
            <LinkedInIcon className="h-8 w-8 fill-white absolute left-10 top-10" />
          </CustomFloatingAnimation>

          <img
            className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]"
            src="/memoji2.png"
            alt="Profile_Pic"
          />
        </motion.div>
        <Content className="hidden md:block md:col-span-2 lg:hidden" />
      </div>
    </section>
  );
};

export default About;
