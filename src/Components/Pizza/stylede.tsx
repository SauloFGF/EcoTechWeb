import styled from "styled-components";

type Segment = {
  color: string;
  percentage: number;
  value: number;
}

export const Pie = styled.div<{ segments: Segment[] }>`
  flex: 1 0 225px;
  max-width: 300px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: ${({ segments }) => {
    const gradient = segments
      .map(({ color, percentage }, index) => {
        const start =
          index === 0
            ? 0
            : segments.slice(0, index).reduce((acc, seg) => acc + seg.percentage, 0);
        return `${color} ${start}%, ${color} ${start + percentage}%`;
      })
      .join(', ');
    return `conic-gradient(${gradient})`;
  }};
  position: relative;
  image-redering: optimizeQuality;
  filter: blur(0.5px)

  &::before {
  content: '';
  display: block;
  padding-top: 100%;
  }

  & > * {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  }

  &:hover {
  filter: brightness(1.1);
  }
`;

export const Esquare = styled.div<{ color: string }>`
  width: 15px;
  aspect-ratio: 1;
  background-color: ${({ color }) => color};
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
