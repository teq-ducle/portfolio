"use client";

import { useEffect, useMemo, useState } from "react";
import Project from "@/component/Project";
import { PieChart } from "@/component/Charts";
// import { dataProjects } from "@/app/constants";
import { Stats } from "@/app/utils/graph";
import "./projects.css";

export default function ProjectClient({
  categoryStats,
  techStackStats,
  datas,
}: {
  categoryStats: Stats;
  techStackStats: Stats;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  datas: any[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    () => {
      // window là biến khi js chạy ở client, nên cần check để không crash app
      if (typeof window === "undefined") return null;
      return sessionStorage.getItem("selectedCategory");
    }
  );

  useEffect(() => {
    if (selectedCategory) {
      sessionStorage.setItem("selectedCategory", selectedCategory);
    } else {
      sessionStorage.removeItem("selectedCategory");
    }
  }, [selectedCategory]);

  // // eslint-disable-next-line react-hooks/preserve-manual-memoization
  // const filteredProjects = useMemo(() => {
  //   // if (!selectedCategory) return dataProjects;
  //   if (!selectedCategory) return datas;

  //   // return dataProjects.filter(
  //   //   (p) =>
  //   //     p.category === selectedCategory || p.tech.includes(selectedCategory)
  //   // );
  //   return datas.filter((p) => {
  //     return (
  //       p.category === selectedCategory || p.tech.includes(selectedCategory)
  //     );
  //   });
  //   // return datas.filter(
  //   //   p.category === selectedCategory || p.tech.includes(selectedCategory)
  //   // );
  // }, [selectedCategory]);

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return datas;
    return datas.filter((i) => {
      return (
        i.category === selectedCategory || i.tech.includes(selectedCategory)
      );
    });
  }, [selectedCategory, datas]);

  return (
    <div>
      <div className="graphs">
        <PieChart
          graphTitle="Business Domain"
          stats={categoryStats}
          onSelectCategory={setSelectedCategory}
        />
        <PieChart
          graphTitle="Tech stack"
          stats={techStackStats}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {selectedCategory && (
        <div>
          <p>
            Filtering by category:
            <strong> {selectedCategory}</strong>
          </p>
          <button onClick={() => setSelectedCategory(null)}>Reset</button>
        </div>
      )}

      <div className="projects">
        {filteredProjects.map((item) => (
          <Project
            key={item.id}
            image={item.image}
            title={item.titleVI}
            url={item.url}
            description={item.descriptionVI}
            type={"main"}
          />
        ))}
      </div>
    </div>
  );
}
