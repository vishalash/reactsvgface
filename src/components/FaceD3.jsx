import { useEffect, useState } from "react";
import style from "./Face.module.css";
import BackgroundCircle from "./BackgroudCircle";
import { Mouth } from "./Mouth";

const FaceD3 = () => {
  const width = 960;
  const height = 500;
  const strokeWidth = 10;
  const centerX = width / 2;
  const centerY = height / 2;
  const eyeOffsetX = 100;
  const eyeOffsetY = 100;
  const [eyeRadius, setEyeRadius] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setEyeRadius((radius) => {
        if (radius === 20) {
          return 10;
        } else {
          return 20;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <BackgroundCircle
            strokeWidth={strokeWidth}
            radius={centerY - strokeWidth / 2}
          />
          <ellipse
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            rx={eyeRadius}
            ry={eyeRadius + 5}
            className={style.eye}
          />
          <ellipse
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            rx={eyeRadius}
            ry={eyeRadius + 5}
            className={style.eye}
          />
          <Mouth />
        </g>
      </svg>
    </>
  );
};

export default FaceD3;
