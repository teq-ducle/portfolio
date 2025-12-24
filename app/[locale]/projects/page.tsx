import MainProject from "@/component/Project";
import { dataProjects } from "@/app/constants";
import "./projects.css";
import CategoryPieChart from "@/component/Charts/Piechart";
import { getCategoryStats } from "@/app/utils/graph";

const stats = await getCategoryStats();
export default function Projects() {

  return (
    <div>
      <div>
        <h1>Project Categories</h1>
        <CategoryPieChart stats={stats} />
      </div>
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
  );
}
