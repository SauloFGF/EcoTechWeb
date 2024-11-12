import React, { useState } from 'react';
import { Esquare } from '../Pizza/stylede';

type IDados = {
  titulo: string;
  valor: number;
};

interface SvgTestProps {
  dados: IDados[];
  title: string;
}

const SvgTest: React.FC<SvgTestProps> = ({ dados, title }) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<{ value: number } | null>(null);

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "L", x, y,
      "Z"
    ].join(" ");
  };

  const total = dados.reduce((sum, item) => sum + item.valor, 0);

  const colors = ["#FD4037", "#94C650", "#FCCE54", "#39BDFD", "#FF5733", "#C70039"];
  const sectors = dados.map((item, index) => {
    const percentage = (item.valor / total) * 100;
    return {
      percentage,
      color: colors[index % colors.length],
      value: item.valor
    };
  });

  let cumulativePercentage = 0;

  return (
    <div style={{ display: 'flex', flexDirection: "column" }}>
      <h1>{title}</h1>
      <div style={{ display: 'flex', flexDirection: "row" }}>
        <svg
          viewBox="0 0 100 100"
          width="300"
          height="300"
          onMouseLeave={() => setTooltip(null)}
        >
          {sectors.map((sector, index) => {
            const [startAngle, endAngle] = [
              cumulativePercentage * 360 / 100,
              (cumulativePercentage + sector.percentage) * 360 / 100
            ];
            cumulativePercentage += sector.percentage;

            return (
              <g key={index}>
                <path
                  d={describeArc(50, 50, 50, startAngle, endAngle)}
                  fill={sector.color}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onMouseMove={() => setTooltip({ value: sector.value })}
                  onMouseLeave={() => setHighlightedIndex(null)}
                  style={{ opacity: highlightedIndex === index ? 0.7 : 1 }}
                />
              </g>
            );
          })}
          {tooltip && (
            <text
              x="85"
              y="5"
              fontSize="5"
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {tooltip.value}
            </text>
          )}
        </svg>
        <ul style={{ marginLeft: '20px' }}>
          {dados.map((item, index) => (
            <li
              style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: highlightedIndex === index ? 'bold' : 'normal'
              }}
              key={index}
            >
              <Esquare color={colors[index % colors.length]} /> - {item.titulo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SvgTest;
