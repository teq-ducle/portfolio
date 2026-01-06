"use client";
import Image from "next/image";
import "./experience.css";
import { useState } from "react";

interface ExperienceProps {
  image: string;
  position: string;
  company: string;
  duration: string;
  place?: string;
  description: string;
}

function Experience(props: ExperienceProps) {
  const { image, position, company, duration, place, description } = props;
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(prev => !prev);

  return (
    <div className="card-experience" onClick={toggleShow}>
      <Image src={image} alt="logo" width={42} height={42} />
      <div className="content">
        <div className="basic-info">
          <div>
            <span className="position">{position}</span>
          </div>
          <div>
            <span className="company ligth-color">{company}</span>
          </div>
          <div>
            <span className="duration ligth-color">{duration}</span>
          </div>
          <div>
            <span className="place">{place}</span>
          </div>
        </div>
        <div className="detail">
          <div
            className={
              show === false ? "description description-hide" : "description"
            }
          >
            <span className="description-text">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
