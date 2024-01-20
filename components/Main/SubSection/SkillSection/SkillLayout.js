import LayoutCard from "./LayoutCard";

const SkillLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="hidden w-[350px] h-[18vh] m-4 sticky top-[50dvh] bg-gradient-to-b from-black lg:top-0 lg:block" />
      <LayoutCard />
      <LayoutCard />
      <LayoutCard />
    </div>
  );
};

export default SkillLayout;
