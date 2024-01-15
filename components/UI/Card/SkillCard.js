const SkillCard = ({ title, svg }) => {
  return (
    <div className="flex flex-col items-center justify-end">
      <span>{svg}</span>
      {title}
    </div>
  );
};

export default SkillCard;
