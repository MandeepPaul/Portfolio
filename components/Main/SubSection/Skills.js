import SkillCard from "@/components/UI/Card/SkillCard";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import { Skills as SkillsArray, AdditionalSkills } from "@/utils/Skills";
const Skills = () => {
  return (
    <>
      <SectionWrapper id="Skills">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center">
          My Choice <span className="gradient-text-teal-sky">Tech Stack</span>
        </h2>
        <div className="grid grid-cols-2 space-y-6 mx-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {SkillsArray.map((details, index) => (
            <SkillCard key={index} {...details} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center">
          Some other <span className="gradient-text-teal-sky">Tech Stack</span>{" "}
          I had <span className="gradient-text-teal-sky">Exposure to</span>
        </h2>
        <div className="grid grid-cols-2 space-y-6 mx-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {AdditionalSkills.map((details, index) => (
            <SkillCard key={index} {...details} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Skills;
