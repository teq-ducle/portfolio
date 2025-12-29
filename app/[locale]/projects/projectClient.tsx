"use client";

import { useEffect, useMemo, useState } from "react";
import MainProject from "@/component/Project";
import { PieChart } from "@/component/Charts";
import { dataProjects } from "@/app/constants";
import { Stats } from "@/app/utils/graph";
import "./projects.css";

export default function ProjectClient({
  categoryStats,
  techStackStats,
}: {
  categoryStats: Stats;
  techStackStats: Stats;
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

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return dataProjects;
    return dataProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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
          <MainProject key={item.id} {...item} type="main" />
        ))}
      </div>
    </div>
  );
}
