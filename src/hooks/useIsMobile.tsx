import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth } = window;
  return {
    innerWidth,
  };
}

const useIsMobile = () => {
  const [contentWidth, setContentWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const onResize = () => {
    const value = window.matchMedia("(min-width: 640px)").matches;
    setIsMobile(!value);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    const value = window.matchMedia("(min-width: 640px)").matches;
    setIsMobile(!value);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {}, [contentWidth]);

  return [isMobile];
};

export default useIsMobile;
