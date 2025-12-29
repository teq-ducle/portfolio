// import { getCategoryStats, getTechStackStats } from "@/app/utils/graph";
// import ProjectClient from "./projectClient";
import { getListMarkdownData } from "@/app/utils";
import HomePageClient from "./homePageClient";

export default async function HomePage() {
  const data = await getListMarkdownData();
  return <HomePageClient data={data} />;
}
