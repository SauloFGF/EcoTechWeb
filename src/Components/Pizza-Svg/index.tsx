import React, { useState } from 'react';
import { Esquare } from '../Pizza/stylede';

type IDados = {
  titulo: string;
  valor: number;
};

interface SvgTestProps {
  dados: IDados[];
}

const SvgTest: React.FC<SvgTestProps> = ({ dados }) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; value: number } | null>(null);

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
    <div style={{ display: 'flex' }}>
      <svg
        viewBox="0 0 100 100"
        width="512"
        height="512"
        onMouseLeave={() => setTooltip(null)}
      >
        {sectors.map((sector, index) => {
          const [startAngle, endAngle] = [
            cumulativePercentage * 360 / 100,
            (cumulativePercentage + sector.percentage) * 360 / 100
          ];
          cumulativePercentage += sector.percentage;

          const midAngle = (startAngle + endAngle) / 2;
          const textCoords = polarToCartesian(50, 50, 30, midAngle);

          return (
            <g key={index}>
              <path
                d={describeArc(50, 50, 50, startAngle, endAngle)}
                fill={sector.color}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseMove={(event) => {
                  const svg = event.currentTarget.ownerSVGElement!;
                  const rect = svg.getBoundingClientRect();
                  const x = event.clientX - rect.left;
                  const y = event.clientY - rect.top;
                  setTooltip({ x, y, value: sector.value });
                }}
                onMouseLeave={() => setHighlightedIndex(null)}
                style={{ opacity: highlightedIndex === index ? 0.7 : 1 }}
              />
              {highlightedIndex === index && (
                <text
                  x={textCoords.x}
                  y={textCoords.y}
                  fontSize="5"
                  fill="black"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {sector.value}
                </text>
              )}
            </g>
          );
        })}
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
  );
};

export default SvgTest;
