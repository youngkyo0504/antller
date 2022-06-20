/* eslint-disable react-hooks/exhaustive-deps */
import { useWindowGeometry } from "@hooks";
import { animate, PanInfo, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { angle, angleIsVertical } from "src/util";

const PADDING = 50;
const VELOCITY = 1;
const MAX_CONTENT_WIDTH = 1200;
const WHEELVELOCITY = 0.9;
const usePanSlide = () => {
  const x = useMotionValue(0);

  const slideRef = useRef<HTMLDivElement>(null);

  let [maxInfo, setMaxInfo] = useState({ left: 0, right: 0 });
  const { windowWidth } = useWindowGeometry();

  let [mouseXInfo, _] = useState(() => ({
    /** 마우스, 펜, 터치 (클릭여부) */
    isDown: false,
    /** 이동한 거리 */
    moveX: 0,
  }));

  useEffect(() => {
    if (!slideRef.current) return;
    const constraint = getConstraint();
    if (!constraint) return;

    animate(x, 0, {});
    setMaxInfo({ ...constraint });
    console.log(constraint);
  }, [windowWidth]);

  const getMaxValus = useCallback(
    (x: number) => {
      // if (!maxRef.current) return false;
      const { left, right } = maxInfo;
      if (x >= right) {
        return right;
      } else {
        // x < left
        return left;
      }
    },
    [maxInfo, windowWidth]
  );

  const isOverLimit = useCallback(
    (x: number) => {
      const { left, right } = maxInfo;
      console.log({ left, right });
      if (x < right && x > left) {
        return false;
      }

      return true;
    },
    [maxInfo, windowWidth]
  );

  const getAdjustedValue = useCallback(
    (x: number) => {
      return isOverLimit(x) ? getMaxValus(x) : x;
    },
    [maxInfo, windowWidth]
  );

  const getConstraint = useCallback(() => {
    if (!slideRef.current) return;
    let margin = (windowWidth - MAX_CONTENT_WIDTH) / 2;
    margin = margin > 0 ? margin + PADDING : PADDING;

    let left = windowWidth - slideRef.current.clientWidth - margin;

    return {
      left: left < 0 ? left : 0,
      right: 0,
    };
  }, [windowWidth]);

  const onPanStart = useCallback(
    (_, info: PanInfo) => {
      x.stop();

      mouseXInfo.isDown = true;
      mouseXInfo.moveX = x.get();
    },
    [x, mouseXInfo, maxInfo]
  );

  const onPan = useCallback(
    (_, info: PanInfo) => {
      const { moveX, isDown } = mouseXInfo;
      if (!isDown) return;
      let newMoveX = moveX + info.delta.x * VELOCITY;
      newMoveX = getAdjustedValue(newMoveX);

      // translateX변경
      x.set(newMoveX);

      mouseXInfo = { moveX: newMoveX, isDown };
    },
    [x, mouseXInfo, maxInfo]
  );

  const onPanEnd = useCallback(
    (_, info: PanInfo) => {
      let newMoveX = x.getVelocity() / 5 + mouseXInfo.moveX;
      newMoveX = getAdjustedValue(newMoveX);

      mouseXInfo = { ...mouseXInfo, isDown: false };

      animate(x, newMoveX, {
        bounce: 0,
        type: "spring",
        velocity: 0,
        duration: 1,
      });
    },
    [maxInfo]
  );

  const onMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      mouseXInfo = { ...mouseXInfo, isDown: false };
    },
    [maxInfo]
  );

  const onWheel = useCallback(
    (e: WheelEvent) => {
      const wheelAngle = angle({
        x: e.deltaX,
        y: e.deltaY,
      });
      if (angleIsVertical(wheelAngle)) return;

      e.stopPropagation();
      e.preventDefault();

      let newMoveX = x.get() - e.deltaX * WHEELVELOCITY;
      newMoveX = getAdjustedValue(newMoveX);
      x.set(newMoveX);
    },
    [maxInfo, windowWidth]
  );

  // event passive 처리하기
  const LastOnWheeleventHandler = useRef<(e: any) => void>();

  useEffect(() => {
    if (LastOnWheeleventHandler.current) {
      slideRef.current?.removeEventListener(
        "wheel",
        LastOnWheeleventHandler.current
      );
    }

    slideRef.current?.addEventListener("wheel", onWheel, {
      passive: false,
    });

    LastOnWheeleventHandler.current = onWheel;

    return () => {};
  }, [onWheel]);

  const panProps = {
    onPanEnd,
    onPanStart,
    onPan,
    onMouseLeave,
  };
  return { panProps, x, slideRef };
};

export default usePanSlide;
