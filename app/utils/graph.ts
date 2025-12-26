import matter from "gray-matter";
import path from "path";
import fs from "fs";

export type Stats = Record<string, number>;

export const getCategoryStats = async (): Promise<Stats> => {
  const filesDir = await path.join(process.cwd(), "app/contents/projects");

  const files = fs.readdirSync(filesDir).filter((file) => file.endsWith(".md"));

  const stats: Stats = {};

  files.forEach((file) => {
    const fullPath = path.join(filesDir, file);

    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const { data } = matter(fileContent);

    const category = data.category;

    if (typeof category === "string" && category.trim() !== "") {
      stats[category] = (stats[category] || 0) + 1;
    }
  });
  return stats;
};

export const getTechStackStats = async (): Promise<Stats> => {
  const filesDir = await path.join(process.cwd(), "app/contents/projects");

  const files = fs.readdirSync(filesDir).filter((file) => file.endsWith(".md"));

  const techStackStats: Stats = {};

  let techList: string[] = [];

  files.forEach((file) => {
    const fullPath = path.join(filesDir, file);

    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const { data } = matter(fileContent);

    const tech = data.tech;

    techList = techList.concat(tech);
  });

  const uniqueTechList = [...new Set(techList)];
  uniqueTechList.forEach((tech) => {
    const countTech = techList.filter((i) => i === tech).length;
    techStackStats[tech] = countTech;
  });

  return techStackStats;
};
/*
  1. Phân tách data và content = grey-matter
  2. Count tổng sản phẩm(files.length)
  3. Lấy frontmatter.category của từng file trong directory và phân loại
  4. Count số lượng category theo từng loại
  */
