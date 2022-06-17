import { useEffect } from "react";

import { MotionValue } from "framer-motion";

interface Config {
  childrenCount: number;
  index: MotionValue<number>;
  onChange?: (index: number) => void;
}

export function useOnChange({ childrenCount, index, onChange }: Config): void {
  useEffect(() => {
    let prevIndex = 0;
    console.log("useEffect시작");
    const unsubscribe = index.onChange((value) => {
      if (!onChange) {
        return;
      }

      const newIndex =
        // 나누면 음수일 수도 있기 때문에 이렇게한다.
        ((Math.round(value) % childrenCount) + childrenCount) % childrenCount;
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
  }, [childrenCount]);
}
