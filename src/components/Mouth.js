import { arc } from "d3";
import style from "./Face.module.css";
import useBlink from "../hooks/useBlink";

export const Mouth = () => {
  const mouthWidth = useBlink(15, 10);
  const mouthRadius = 140;

  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * (3 / 2));

  return <path d={mouthArc()} className={style.transition} />;
};
