import Image from "next/image";
import "./project.css";
import { Link } from "@/i18n/routing";

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  url: string;
  type?: string;
}

function 
Project(props: ProjectProps) {
  const { title, image, description, url, type } = props;

  return (
    <>
      {type === "main" ? (
        <Link href={url} className="card">
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
        </Link>
      ) : (
        <Link href={url} className="card sub">
          <Image src={image} alt="logo" width={42} height={42} />
          <div className="content">
            <p className="title">{title}</p>
            <p className="sub-project-description">{description}</p>
          </div>
        </Link>
      )}
    </>
  );
}

export default Project;
