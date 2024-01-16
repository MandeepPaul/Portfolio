import EducationCard from "@/components/UI/Card/Education/EducationCard";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";

const Education = () => {
  return (
    <SectionWrapper id="Education" className="h-scree lg:mx-14">
      <h2 className="sticky top-0 z-10 text-4xl md:text-5xl lg:text-6xl text-center">
        Schooling and <span className="gradient-text-teal-sky">Beyond.</span>
      </h2>
      <EducationCard />
    </SectionWrapper>
  );
};

export default Education;
