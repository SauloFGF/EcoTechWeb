import {Pie, Box, Charts} from "./stylede";

export type IPieCharts = {
  title: string;
  values: number[];
  colors: string[];
};

const StunningPie = ({ title, values, colors }: IPieCharts) => {
  const total = values.reduce((acc, value) => acc + value, 0);
  const segments = values.map((value, index) => ({
    color: colors[index],
    percentage: (value / total) * 100,
  }));

  return (
    <Box>
      <Charts>
        <Pie segments={segments} />
      </Charts>
    </Box>
  )
}

export default StunningPie;
