import { useViewportScroll, Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ScrollDirection } from "./header.type";

export const useHeader = (stickyHeaderThreshold: number = 300) => {
  const { scrollY } = useViewportScroll();
  const [viewPortScrollY, setViewPortScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");
  console.log("hi");

  useEffect(() => {
    function updateScrollState() {
      const direction: ScrollDirection =
        scrollY.getPrevious() < scrollY.get() ? "down" : "up";
      setScrollDirection(direction);
      setViewPortScrollY(scrollY.get());
    }
    const unscribeScrollY = scrollY.onChange(updateScrollState);

    return () => {
      unscribeScrollY();
    };
  }, []);

  return { scrollDirection, scrollY: viewPortScrollY };
};

export default useHeader;
