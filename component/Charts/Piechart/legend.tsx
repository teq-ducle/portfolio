import React from "react";

interface PieLegendProps {
  labels: string[];
  colors: string[];
}

const PieLegend: React.FC<PieLegendProps> = ({ labels, colors }) => {
  return (
    <ul className="pie-legend">
      {labels.map((label, i) => (
        <li key={`${label}-${i}`}>
          <span className="dot" style={{ backgroundColor: colors[i] }} />
          {label}
        </li>
      ))}
    </ul>
  );
};

export { PieLegend };
