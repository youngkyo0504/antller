import { useViewportScroll, Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ScrollDirection } from "./header.type";

export const useStickyHeader = (stickyHeaderThreshold: number = 300) => {
  const { scrollY } = useViewportScroll();
  const [viewPortScrollY, setViewPortScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");

  useEffect(() => {
    function isDownScroll() {
      return scrollY.getPrevious() < scrollY.get();
    }
    function updateScrollState() {
      const direction: ScrollDirection = isDownScroll() ? "down" : "up";
      setViewPortScrollY(scrollY.get());
      setScrollDirection(direction);
    }
    // onChange는 unscribe함수를 내보낸다.
    const unscribeScrollY = scrollY.onChange(updateScrollState);

    return () => {
      unscribeScrollY();
    };
  }, []);

  const getStickyHeaderVariants: (
    stickyHeaderThreshold?: number
  ) => Variants = (stickyHeaderThreshold = 300) => {
    return {
      initial: {
        y: -100,
      },
      scroll: ({
        direction,
        scrollY,
      }: {
        direction: ScrollDirection;
        scrollY: number;
      }) => {
        return {
          position: "fixed",
          y: direction === "up" && scrollY > stickyHeaderThreshold ? 0 : -100,
          transition: {
            type: "tween",
            duration: 0.4,
            ease: "easeOut",
          },
        };
      },
    };
  };
  return {
    scrollDirection,
    scrollY: viewPortScrollY,
    headerVariants: getStickyHeaderVariants(stickyHeaderThreshold),
  };
};

export default useStickyHeader;
