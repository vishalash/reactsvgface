import BackgroundCircle from "./BackgroudCircle";
import { Mouth } from "./Mouth";
import FaceContainer from "./FaceContainer";
import Eye from "./Eye";

const FaceD3 = () => {
  const width = 960;
  const height = 500;
  const strokeWidth = 5;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <>
      <FaceContainer
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
      >
        <BackgroundCircle
          strokeWidth={strokeWidth}
          radius={centerY - strokeWidth / 2}
        />
        <Eye type="left"/>
        <Eye type="right"/>
        <Mouth />
      </FaceContainer>
    </>
  );
};

export default FaceD3;
