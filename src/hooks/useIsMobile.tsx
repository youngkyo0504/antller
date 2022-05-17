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
    const { innerWidth } = getWindowDimensions();
    setContentWidth(innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!contentWidth) return;
    setIsMobile(contentWidth < 640 ? true : false);
  }, [contentWidth]);

  return [isMobile];
};

export default useIsMobile;
