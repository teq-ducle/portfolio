/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const NUMBER_SLICE = 4;

export const getAllDataContentMD = async (
  id: string,
  isSlice: boolean = false
) => {
  const projectsDir = await path.join(
    process.cwd(),
    "app",
    "contents",
    "projects"
  );
  const fileNames = await fs.readdirSync(projectsDir);

  let data: any[] | any[] = [];

  data = fileNames.map((fileName, index) => {
    const filePath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      slug: data.slug,
      titleVI: data.titleVI,
      titleEN: data.titleEN,
      descriptionVI: data.descriptionVI,
      descriptionEN: data.descriptionEN,
      tech: data.tech || [], // for project
      tag: data.tag || [], // for blog
      link: data.link || "", // for project
      date: data.date,
      image: data.image,
      content, // for project
    };
  });

  return data.find((i) => i.id === id) || null
};
