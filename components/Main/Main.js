import About from "./SubSection/About";
import Skills from "./SubSection/Skills";
import Work from "./SubSection/Work";

const Main = () => {
  return (
    <main className="h-full bg-opacity-50 font-primaryFont text-white space-y-10">
      <About />
      <Skills />
      <Work />
    </main>
  );
};

export default Main;
