import Link from "next/link";
import React from "react";
import "./subproject.css";
import Image from "next/image";

interface SubProjectProps {
  title: string;
  image: string;
  description: string;
  url: string;
}
function SubProject(props: SubProjectProps) {
  const { image, title, description, url } = props;

  return (
    <Link href={url} className="card-sub-project">
      <Image src={image} alt="logo" width={42} height={42} />
      <div className="content">
        <div>
          <span className="title">{title}</span>
        </div>
        <div>
          <span className="description">{description}</span>
        </div>
      </div>
    </Link>
  );
}

export default SubProject;
