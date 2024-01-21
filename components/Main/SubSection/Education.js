import EducationCard from "@/components/UI/Card/Education/EducationCard";
import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";

const Education = () => {
  return (
    <SectionWrapper id="Education">
      <Heading className="bg-gradient-to-b from-black via-black to-transparent md:sticky md:top-0">
        Schooling and{" "}
        <span className="gradient-text-teal-sky">&#60; / Beyond &#62;</span>
      </Heading>
      <EducationCard className="xl:mx-[150px]" />
    </SectionWrapper>
  );
};

export default Education;
