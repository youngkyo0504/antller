import { useEffect } from "react";

import { MotionValue } from "framer-motion";

interface Config {
  childrenCount: number;
  index: MotionValue<number>;
  onChange?: (index: number) => void;
}

export function useOnChange({ childrenCount, index, onChange }: Config): void {
  useEffect(() => {
    let prevIndex = -1;

    const unsubscribe = index.onChange((value) => {
      if (!onChange) {
        return;
      }

      const newIndex =
        // 나누면 음수일 수도 있기 때문에 이렇게한다.
        ((Math.round(value) % childrenCount) + childrenCount) % childrenCount;
      // prevIndex 0 이면?
      console.log({ prevIndex });
      // console.log(newIndex === 0);
      if (newIndex === prevIndex) {
        // console.log("0인가?", newIndex);
        return;
      }

      prevIndex = newIndex;

      onChange(newIndex);
    });

    return () => {
      unsubscribe();
    };
  }, [index, childrenCount, onChange]);
}
