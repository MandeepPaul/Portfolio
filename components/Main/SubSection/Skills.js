import SkillCard from "@/components/UI/Card/SkillCard";
import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import { Skills as SkillsArray } from "@/utils/Skills";
const Skills = () => {
  const radius = 600; // Adjust the radius as needed
  const totalIcons = SkillsArray.length;
  const angleIncrement = 31;

  let initialAngle = 0;

  return (
    <>
      <SectionWrapper id="Skills">
        <Heading>
          My Choice{" "}
          <span className="gradient-text-teal-sky">
            &#60; / Tech Stack &#62;
          </span>
        </Heading>

        <div className="flex justify-center items-center h-screen">
          <div
            style={{ height: radius, width: radius }}
            className={`rounded-full flex items-center justify-center relative`}
          >
            {SkillsArray.map((details, index) => {
              const marginLeft = `${(radius * Math.cos(initialAngle)).toFixed(
                2
              )}px`;
              const marginTop = `${(radius * Math.sin(initialAngle)).toFixed(
                2
              )}px`;

              initialAngle += angleIncrement;

              return (
                <SkillCard
                  key={index}
                  {...details}
                  style={{ marginLeft, marginTop }}
                  className={`absolute inset-x-0`}
                />
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Skills;
