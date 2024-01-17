import EducationCard from "@/components/UI/Card/Education/EducationCard";
import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";

const Education = () => {
  return (
    <SectionWrapper id="Education" className="lg:mx-[150px]">
      <Heading>
        Schooling and{" "}
        <span className="gradient-text-teal-sky">&#60; / Beyond &#62;</span>
      </Heading>
      <EducationCard />
    </SectionWrapper>
  );
};

export default Education;
