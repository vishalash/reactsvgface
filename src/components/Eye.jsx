import useBlink from "../hooks/useBlink";
import style from "./Face.module.css";

const Eye = ({ type }) => {
  const eyeRadius = useBlink(20, 10);
  const eyeOffsetX = 100;
  const eyeOffsetY = 100;

  return (
    <ellipse
      cx={type === "left" ? -eyeOffsetX : eyeOffsetX}
      cy={-eyeOffsetY}
      rx={eyeRadius}
      ry={eyeRadius + 5}
      className={style.transition}
    />
  );
};

export default Eye;
