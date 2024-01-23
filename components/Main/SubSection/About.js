import { GitHubIcon, LinkedInIcon, MailIcon } from "@/public/SVG/svg";
import { motion } from "framer-motion";
import CustomFloatingAnimation from "@/components/UI/Animations/CustomFloatingAnimation";

const About = () => {
  return (
    <section id="About" className="h-screen bg-yello-600 bg-opacity-50">
      <div className="m-4 px-2 pt-4 h-full bg-re-500 bg-opacity-50 relative">
        <motion.p
          className="font-headingFont3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-3xl">Hey, I'm</span>
          <br />
          <span className="text-4xl">Mandeep</span>
        </motion.p>
        <motion.hr
          initial={{ x: 25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="my-2 w-[80px] border-t-2 border-teal-600"
        />
        <div>
          <span className="font-headingFont text-lg">
            I build things for web
          </span>
          <p className="my-2 text-sm">
            As a full stack developer, I bring hands-on experience gained
            through the successful completion of diverse projects. With a solid
            foundation in front-end and back-end technologies.
            <br />
            <br />I will love to hear from you. Whether It's a project, job
            opportunity, or just a chat. Feel free to {""}
            <a
              href="#Connect"
              className="underline decoration-teal-600 underline-offset-2"
            >
              contact me
            </a>
            .
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="my-4 pt-6 flex flex-col items-center justify-between relative bg-gree-500"
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
            className="h-[250px] w-[250px] bg-yello-500"
            src="/memoji2.png"
            alt="Profile_Pic"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
