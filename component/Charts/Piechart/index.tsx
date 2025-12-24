"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { CategoryStats } from "@/app/utils/graph";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  stats: CategoryStats;
}

const CategoryPieChart: React.FC<Props> = ({ stats }) => {
  const categories = Object.keys(stats);
  const counts = Object.values(stats);

  const data = {
    labels: categories,
    datasets: [
      {
        data: counts,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.parsed;
            const label = context.label || "";
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: "200px", margin: "0 auto" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CategoryPieChart;
