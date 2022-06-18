import { useCallback, useEffect, useLayoutEffect, useState } from "react";

const useWindowGeometry = () => {
  const [windowHeight, setWindowHeight] = useState(600);
  const [windowWidth, setWindowWidth] = useState(500);
  const resize = useCallback(() => {
    if (windowHeight !== window.innerHeight) {
      setWindowHeight(window.innerHeight);
    }
    if (windowWidth !== window.innerWidth) {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resize, { passive: false });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return { windowHeight, windowWidth };
};

export default useWindowGeometry;
