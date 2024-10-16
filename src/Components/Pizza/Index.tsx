import { useState } from "react";
import {Pie, Box, Charts, Esquare, Tooltip} from "./stylede";

export type IPieCharts = {
  title: string[];
  values: number[];
  colors: string[];
};

const StunningPie = ({ title, values, colors }: IPieCharts) => {
  const [tooltip, setTooltip] = useState<{ visible: boolean; x: number, y: number; value: number}>({
    visible: false,
    x: 0,
    y: 0,
    value: 0,
  });

  const total = values.reduce((acc, value) => acc + value, 0);
  const segments = values.map((value, index) => ({
    color: colors[index],
    percentage: (value / total) * 100,
    value: value
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, value: number) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      value
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, value: 0});
  }

  return (
    <Box>
      <Charts>
      <Pie
          segments={segments}
          onMouseMove={(e) => {
            const segmentIndex = Math.floor((e.nativeEvent.offsetX / e.currentTarget.clientWidth) * segments.length);
            handleMouseMove(e, segments[segmentIndex].value);
          }}
          onMouseLeave={handleMouseLeave}
        />
        {tooltip.visible && (
          <Tooltip style={{ top: tooltip.y, left: tooltip.x}}>{tooltip.value}</Tooltip>
        )}
        <ul>
        {title.map((a, index) => (
            <li style={{ listStyle: 'none', display: 'flex', gap: '8px' }} key={index}>
              <Esquare color={colors[index]} /> - {a}
            </li>
          ))}
        </ul>
      </Charts>
    </Box>
  )
}

export default StunningPie;
