import React from 'react'

interface Coords {
  x: number;
  y: number;
}

interface Sector {
  percentage: number;
  color: string;
}

const SvgTest = () => {
  const [ coords, setCoods] = React.useState({ x: 0, y: 0})

  const handelMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect()
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;


    setCoods({x , y})

    console.log(`mouse coordinates: x=${x}, y=${y}`)
  }

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
  }

  const sectors = [
    { percentage: 10, color: "#FFFF"},
    { percentage: 15, color: "#FD4037"},
    { percentage: 10, color: "#94C650"},
    { percentage: 25, color: "#FFFF"},
    { percentage: 20, color: "#FCCE54"},
    { percentage: 20, color: "#39BDFD"}
  ]

  let cumulativePercentage = 0;

  return (
    <svg
      style={{border: "1px solid red"}}
      viewBox="0 0 100 100"
      width="512"
      height="512"
      onMouseMove={handelMouseMove}
      >
        {sectors.map((sector, index) => {
          const [stratAngle, endAnglec] = [
            cumulativePercentage * 360 /100,
            (cumulativePercentage + sector.percentage) * 360 / 100
          ];
          cumulativePercentage += sector.percentage;
          return (
            <path key={index}
            d={describeArc(50, 50, 50, stratAngle, endAnglec)}
            fill={sector.color} />
          )
        })}
</svg>)
}

export default SvgTest;
