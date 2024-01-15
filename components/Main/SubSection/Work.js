import WorkCard from "@/components/UI/Card/WorkCard";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import { ProjectData } from "@/utils/ProjectData";

const Work = () => {
  return (
    <SectionWrapper id="Work" className="flex flex-col">
      <h2 className="text-4xl mb-4 md:text-5xl lg:text-6xl text-center">
        Dive into <span className="gradient-text-teal-sky">the work.</span>
      </h2>
      <div className="mx-auto grid grid-cols-1 gap-14 md:gap-0 md:grid-cols-2 md:grid-flow-row">
        {ProjectData.map(({ className, ...rest }, index) => (
          <WorkCard
            key={index}
            {...rest}
            className={`${
              index % 2 === 0 ? "md:mb-[80px]" : "md:mt-[80px]"
            } md:mx-[15px]`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Work;
