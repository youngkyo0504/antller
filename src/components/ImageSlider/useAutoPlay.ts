import React from "react";

import { MotionValue } from "framer-motion";

import { animateSpring } from "./utils";
import { ImageSliderHandle } from "./ImageSlider";

interface Controls {
  stop: () => void;
  start: () => void;
}

export function useAutoplay(
  index: MotionValue<number>,
  interval: number,
  onComplete?: Function
): Controls {
  const timer = React.useRef<number>(0);

  const stop = React.useCallback(() => {
    if (!timer.current) {
      return;
    }

    window.clearInterval(timer.current);
    timer.current = 0;
  }, [timer]);

  const start = React.useCallback(() => {
    stop();

    if (!interval) {
      return;
    }

    timer.current = window.setInterval(() => {
      // paginate

      animateSpring(index, Math.floor(index.get() + 1), onComplete);
    }, interval);
  }, [index, interval, timer, stop]);

  React.useEffect(() => {
    start();

    return (): void => {
      stop();
    };
  }, [start, stop]);

  return { start, stop };
}
