import React from "react";
import { Esquare } from "../Pizza/stylede";

type IDados = {
  titulo: string;
  valor: number
}

interface ColumnSvgProps {
  dados: IDados[];
  titulo: string;
}

const SvgColumn: React.FC<ColumnSvgProps> = ({ dados, titulo }) => {
  const [highlightedIndex, setHighlightedIndex] = React.useState<number | null>(null);
  const [tooltip, setTooltip] = React.useState<{ x: number; y: number; value: number } | null>(null);

  const total = dados.reduce((sum, item) => sum + item.valor, 0);

  const colors = ["#FD4037", "#94C650", "#FCCE54", "#39BDFD", "#FF5733", "#C70039", "#900C3F"];
  const maxValor = Math.max(...dados.map(item => item.valor));
  const barWidth = 100 / dados.length;

  return (
    <div style={{ display: 'flex' }}>
      <svg viewBox="0 0 100 100"
        width="300"
        height="300"
        onMouseLeave={() => setTooltip(null)}>
        {dados.map((item, index) => {
          const barHeight = (item.valor / maxValor) * 100;
          const x = index * barWidth;
          const y = 100 - barHeight;

          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={barWidth - 2} // Espaço entre as barras
                height={barHeight}
                fill={colors[index % colors.length]}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseMove={(event) => {
                  const svg = event.currentTarget.ownerSVGElement!;
                  const rect = svg.getBoundingClientRect();
                  const mouseX = event.clientX - rect.left;
                  const mouseY = event.clientY - rect.top;
                  setTooltip({ x: mouseX, y: mouseY, value: item.valor });
                }}
                onMouseLeave={() => setHighlightedIndex(null)}
                style={{ opacity: highlightedIndex === index ? 0.7 : 1 }}
              />
              {highlightedIndex === index && (
                <text
                  x={x + barWidth / 2}
                  y={y - 2}
                  fontSize="5"
                  fill="black"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {item.valor}
                </text>
              )}
            </g>
          )
        })}
        {tooltip && (
          <text x={tooltip.x} y={tooltip.y} fontSize="5" fill="black" textAnchor="middle">
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
  )
}

export default SvgColumn;
