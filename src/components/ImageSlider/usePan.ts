import { MotionValue, PanInfo } from "framer-motion";
import React, { useCallback, useMemo, useState } from "react";
import { animateSpring } from "./utils";

export type OnPan = (
  event: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo,
  onComplete?: Function
) => void;

interface Config {
  count: number;
  index: MotionValue<number>;
  margin: number;
  ref: React.RefObject<HTMLElement>;
}

interface Result {
  onPanStart: OnPan;
  onPan: OnPan;
  onPanEnd: OnPan;
}

function calcItemWidth(
  ref: React.RefObject<HTMLElement>,
  count: number,
  margin: number
): number {
  const width = ref.current?.getBoundingClientRect().width!;
  return (width - margin * (count - 1)) / count + margin;
}

export function usePan({ count, index, margin, ref }: Config): Result {
  /**
   * rerender 되지 않음 setState를 사용하지 않기 때문에
   */
  const [initial] = useState(() => ({
    dragging: false,
    index: index.get(),
    itemWidth: calcItemWidth(ref, count, margin),
  }));

  // const onTouchMove = useCallback((event: TouchEvent) => {
  //   // 수직 스크롤 방지
  //   event.preventDefault();
  // }, []);

  const onPanStart = useCallback(() => {
    // Stop active animation
    index.stop();

    initial.dragging = true;
    initial.index = index.get();
    initial.itemWidth = calcItemWidth(ref, count, margin);

    // document.documentElement.addEventListener("touchmove", onTouchMove, {
    //   passive: false,
    // });
  }, [ref, count, index, initial, margin]);

  const onPan = useCallback(
    (_, info: PanInfo) => {
      const newIndex = initial.index - info.offset.x / initial.itemWidth;

      index.set(newIndex);
    },
    [index, initial]
  );

  const onPanEnd = useCallback(
    (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
      onComplete?: Function
    ) => {
      // Prevent click after drag
      initial.dragging = false;

      if (event instanceof MouseEvent) {
        event.target?.addEventListener(
          "click",
          (e) => {
            e.preventDefault();
          },
          { once: true }
        );
      }

      // Adjust position
      let newIndex: number;

      if (info.velocity.x > 100) {
        newIndex = Math.floor(index.get());
      } else if (info.velocity.x < -100) {
        newIndex = Math.ceil(index.get());
      } else {
        newIndex = Math.round(index.get());
      }

      animateSpring(index, newIndex, onComplete);

      // document.documentElement.removeEventListener("touchmove", onTouchMove);
    },
    [index, initial]
  );

  return useMemo(
    () => ({
      onPanStart,
      onPan,
      onPanEnd,
    }),
    [onPanStart, onPan, onPanEnd]
  );
}
