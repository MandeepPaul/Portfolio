const SkillCard = ({ svg: SVG, title, className, style }) => {
  return (
    <div style={style} className={` flex flex-col items-center ${className}`}>
      <SVG className="h-20 w-20" />
    </div>
  );
};

export default SkillCard;
