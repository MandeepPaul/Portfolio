import About from "./SubSection/About";
import Education from "./SubSection/Education";
import Skills from "./SubSection/Skills";
import Work from "./SubSection/Work";

const Main = () => {
  return (
    <main className="h-full bg-opacity-50 font-primaryFont text-white space-y-10">
      <About />
      <Skills />
      <Work />
      <Education />
      <Work />
    </main>
  );
};

export default Main;
