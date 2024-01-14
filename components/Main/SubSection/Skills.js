import SkillCard from "@/components/UI/Card/SkillCard";

const Skills = () => {
  return (
    <section className="mx-4 p-1 bg-neutral-900 bg-opacity-70 rounded-lg space-y-4">
      <h2 className="text-xl md:text-3xl lg:text-4xl">
        My Choice <span className="gradient-text-teal-sky">Tech Stack</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        <SkillCard />
      </div>
    </section>
  );
};

export default Skills;
