import styled from "styled-components";

type Segment = {
  color: string;
  percentage: number
}

export const Pie = styled.div<{segments: Segment[]}>`
  flex: 1 0 225px;
  max-width: 325px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: ${({ segments }) => {
    const gradient = segments.map(({ color, percentage }, index) => {
      const start = index === 0 ? 0 : segments.slice(0, index).reduce((acc, seg) => acc + seg.percentage, 0);
      return `${color} ${start}%, ${color} ${start + percentage}%`;
    }).join(', ');
    return `conic-gradient(${gradient})`;
  }};
`;

export const Box = styled.div`
  max-width: 90%;
  margin-inline: auto;
  text-align: center;
`;

export const Charts = styled.figure`
  display: flex;
  place-content: center;
  flex-flow: wrap;
  gap: 2rem;
`;
