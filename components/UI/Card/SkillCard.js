const SkillCard = ({ svg: SVG, title, className, style }) => {
  return (
    <div style={style} className={` flex flex-col items-center ${className}`}>
      <SVG className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px] p-2 bg-opacity-20" />
    </div>
  );
};

export default SkillCard;
