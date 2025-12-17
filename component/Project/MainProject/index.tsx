import Image from "next/image";
import "./mainproject.css";

interface MainProjectProps {
  title: string;
  image: string;
  description: string;
  url?: string;
}

function MainProject(props: MainProjectProps) {
  const { title, image, description } = props;

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <Image src={image} alt="logo" width={42} height={42} />
        </div>
        <div>
          <span className="title">{title}</span>
        </div>
      </div>
      <div className="card-body">
        <div>
          <span className="description">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default MainProject;
