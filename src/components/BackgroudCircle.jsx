import PropTypes from "prop-types";

const BackgroundCircle = (props) => {
  return (
    <circle
      fill="yellow"
      strokeWidth={props.strokeWidth}
      stroke="black"
      r={props.radius}
    />
  );
};

BackgroundCircle.propTypes = {
  strokeWidth: PropTypes.number,
  radius: PropTypes.number,
};

export default BackgroundCircle;
