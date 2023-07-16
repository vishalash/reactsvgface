import { useEffect, useState } from "react";
import style from "./Face.module.css";

const Face = () => {
  const width = 960;
  const height = 500;
  const strokeWidth = 10;
  const centerX = width / 2;
  const centerY = height / 2;
  const eyeOffsetX = 100;
  const eyeOffsetY = 100;
  const [eyeRadius, setEyeRadius] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      setEyeRadius((radius) => {
        if (radius === 25) {
          return 10;
        } else {
          return 25;
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
        <circle
          fill="yellow"
          strokeWidth={strokeWidth}
          stroke="black"
          cx={centerX}
          cy={centerY}
          r={centerY - strokeWidth / 2}
        />
        <circle
          cx={centerX - eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
          className={style.eye}
        />
        <circle
          cx={centerX + eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
          className={style.eye}
        />
      </svg>
    </>
  );
};

export default Face;
