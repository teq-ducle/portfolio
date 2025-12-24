import matter from "gray-matter";
import path from "path";
import fs from "fs";

export type CategoryStats = Record<string, number>;

export const getCategoryStats = async (): Promise<CategoryStats> => {
  const filesDir = await path.join(process.cwd(), "app/contents/projects");

  const files = fs.readdirSync(filesDir).filter((file) => file.endsWith(".md"));

  const stats: CategoryStats = {};

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
/*
  1. Phân tách data và content = grey-matter
  2. Count tổng sản phẩm(files.length)
  3. Lấy frontmatter.category của từng file trong directory và phân loại
  4. Count số lượng category theo từng loại
  */

