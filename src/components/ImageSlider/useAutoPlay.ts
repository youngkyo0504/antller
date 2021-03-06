import React, { useEffect } from "react";

import { AnimationPlaybackControls, MotionValue } from "framer-motion";

interface Controls {
  stop: () => void;
  start: () => void;
}

export function useAutoplay(
  index: MotionValue<number>,
  interval: number,
  animateSlideTo: (newIndex: number) => AnimationPlaybackControls
): Controls {
  const timer = React.useRef<number>(0);

  const stop = React.useCallback(() => {
    if (!timer.current) {
      return;
    }

    window.clearTimeout(timer.current);
    timer.current = 0;
  }, [timer]);

  const start = React.useCallback(() => {
    stop();

    if (!interval) {
      return;
    }

    timer.current = window.setTimeout(() => {
      animateSlideTo(Math.floor(index.get() + 1));
      // animateSpring(index, Math.floor(index.get() + 1), onComplete);
      start();
    }, interval);
  }, [index, interval, timer, stop]);

  function setActionByVisibility() {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  }
  useEffect(() => {
    document.addEventListener("visibilitychange", setActionByVisibility);

    return () => {
      document.removeEventListener("visibilitychange", setActionByVisibility);
    };
  }, []);

  React.useEffect(() => {
    // start();

    return (): void => {
      stop();
    };
  }, [start, stop]);

  return { start, stop };
}
