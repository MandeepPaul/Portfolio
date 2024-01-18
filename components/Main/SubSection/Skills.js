import { useState, useEffect } from "react";
import SkillCard from "@/components/UI/Card/SkillCard";
import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import { Skills as SkillsArray } from "@/utils/Skills";
const Skills = () => {
  const [radius, setRadius] = useState(200);
  const angleIncrement = 31;
  let initialAngle = 0;

  useEffect(() => {
    const updateRadius = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 320) {
        setRadius(230);
      } else if (screenWidth < 425) {
        setRadius(300);
      } else if (screenWidth < 768) {
        setRadius(400);
      } else if (screenWidth < 1024) {
        setRadius(500);
      } else {
        setRadius(600);
      }
    };
    updateRadius();

    // Attach the event listener to update the radius on window resize
    window.addEventListener("resize", updateRadius);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <>
      <SectionWrapper id="Skills">
        <Heading>
          My Choice{" "}
          <span className="gradient-text-teal-sky">
            &#60; / Tech Stack &#62;
          </span>
        </Heading>

        <div className="py-10 flex justify-center items-start h-screen bg-green-900 bg-opacity-45">
          <div className="relative">
            <img
              src="/memoji.png"
              alt="memoji"
              className="h-[70%] absolute top-0 left-1/2 transform -translate-x-1/2 animate-none"
            />
            <div
              style={{ height: radius, width: radius }}
              className={`rounded-full flex items-center justify-center relative animate-spin-wheel bg-opacity-45`}
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
                    className={`z-10 absolute inset-x-0 animate-spin-spokes `}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Skills;
