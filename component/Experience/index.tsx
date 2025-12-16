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

  return (
    <div className="card-experience">
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
              show === false ? "description description-line" : "description"
            }
          >
            <span className="description-text">{description}</span>
          </div>
          {show === false && (
            <span onClick={() => setShow(true)}>
              <button className="inline-see-more-button">...see more</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
