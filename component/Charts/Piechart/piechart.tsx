"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
  ChartOptions,
} from "chart.js";
import { Stats } from "@/app/utils/graph";
import "./piechart.css";
import { PieLegend } from "./legend";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  graphTitle: string;
  stats: Stats;
  onSelectCategory?: (category: string) => void;
}

const PieChart: React.FC<Props> = ({ graphTitle, stats, onSelectCategory }) => {
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
        radius: "80%",
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    // maintainAspectRatio: false,
    onClick: (_, elements) => {
      if (!elements.length) return;

      const index = elements[0].index;
      const category = categories[index];
      onSelectCategory?.(category);
      console.log("index: ", index);
      console.log("category", category);
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"pie">) => {
            // const label = context.label ?? "";
            const value = context.parsed;
            // return `${label}: ${value}`;
            return `${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="graph-wrap">
      <h1>{graphTitle}</h1>
      <div className="piechart">
        <Pie data={data} options={options} />
      </div>
      <PieLegend
        labels={categories}
        colors={data.datasets[0].backgroundColor as string[]}
      />
    </div>
  );
};

export default PieChart;
