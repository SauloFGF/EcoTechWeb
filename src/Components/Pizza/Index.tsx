import { Pie, Box, Charts, Esquare } from "./Stylede";

export type IPieCharts = {
  title: string[];
  values: number[];
  colors: string[];
};

const StunningPie = ({ title, values, colors }: IPieCharts) => {
  const total = values.reduce((acc, value) => acc + value, 0);
  const segments = values.map((value, index) => ({
    color: colors[index],
    percentage: (value / total) * 100,
    value: value
  }));

  return (
    <Box>
      <Charts>
        <Pie segments={segments} />
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
