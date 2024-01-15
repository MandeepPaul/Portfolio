import SkillCard from "@/components/UI/Card/SkillCard";
import { Skills as SkillsArray, AdditionalSkills } from "@/utils/Skills";
const Skills = () => {
  return (
    <>
      <section className="mx-4 p-1 bg-neutral-900 bg-opacity-70 rounded-lg space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center">
          My Choice <span className="gradient-text-teal-sky">Tech Stack</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          {SkillsArray.map((eachSkill, index) => (
            <SkillCard key={index} {...eachSkill} />
          ))}
        </div>
      </section>

      <section className="mx-4 p-1 bg-neutral-900 bg-opacity-70 rounded-lg space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center">
          Some other <span className="gradient-text-teal-sky">Tech Stack</span>{" "}
          that <span className="gradient-text-teal-sky">I love</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          {AdditionalSkills.map((eachSkill, index) => (
            <SkillCard key={index} {...eachSkill} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
