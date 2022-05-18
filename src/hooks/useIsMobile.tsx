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
    // const isMobile = !window.matchMedia("(min-width: 640)").matches;
    console.log(window.matchMedia("(min-width: 640px)").matches);
    const value = window.matchMedia("(min-width: 640px)").matches;
    setIsMobile(!value);
    // const { innerWidth } = getWindowDimensions();
    // setContentWidth(innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    const value = window.matchMedia("(min-width: 640px)").matches;
    setIsMobile(!value);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    // if (!contentWidth) return;
    // setIsMobile(contentWidth < 640 ? true : false);
  }, [contentWidth]);

  return [isMobile];
};

export default useIsMobile;
