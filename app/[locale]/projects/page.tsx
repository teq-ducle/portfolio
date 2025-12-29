import { getCategoryStats, getTechStackStats } from "@/app/utils/graph";
import ProjectClient from "./projectClient";

export default async function ProjectPage() {
  const categoryStats = await getCategoryStats();
  const techStackStats = await getTechStackStats();
  return (
    <ProjectClient
      categoryStats={categoryStats}
      techStackStats={techStackStats}
    />
  );
}
