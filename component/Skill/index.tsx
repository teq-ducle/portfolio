// import Image from "next/image";
import "./skill.css"

interface SkillProps {
  name: string;
  url?: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
  return (
    <div className="skill">
      <span>{name}</span>
    </div>
  );
};

export default Skill;
