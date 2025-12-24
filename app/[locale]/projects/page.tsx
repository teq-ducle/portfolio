
import MainProject from "@/component/Project";
import { dataProjects } from "@/app/constants";
import "./projects.css"

export default function Projects(){
  return(
    <div>
      <h1 className="page_title">Projects</h1>
      <p className="page_description"></p>
      <div className="projects">
      {dataProjects.map((item) => (
        <MainProject
        key={item.id} 
        image={item.image}
        title={item.title}
        description={item.description}
        url={item.url}
        type={"main"}
        />
      ))}
      </div>
    </div>
  )
}

