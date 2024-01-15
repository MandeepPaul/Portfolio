import WorkCard from "@/components/UI/Card/WorkCard";

const Work = () => {
  return (
    <section className="h-screen">
      <h2 className="text-4xl mb-4 md:text-5xl lg:text-6xl text-center">
        Dive into <span className="gradient-text-teal-sky">the work.</span>
      </h2>
      <WorkCard />
    </section>
  );
};

export default Work;
