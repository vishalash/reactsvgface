import { useEffect, useState } from "react";

const useBlink = (from, to) => {
  const [eyeRadius, setEyeRadius] = useState(from);

  useEffect(() => {
    const timer = setInterval(() => {
      setEyeRadius((radius) => {
        if (radius === from) {
          return to;
        } else {
          return from;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return eyeRadius;
};

export default useBlink;
