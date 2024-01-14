import About from "./SubSection/About";
import Skills from "./SubSection/Skills";

const Main = () => {
  return (
    <main className="h-full bg-opacity-50 font-primaryFont text-white space-y-4">
      <About />
      <Skills />
    </main>
  );
};

export default Main;
