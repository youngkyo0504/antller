/* eslint-disable react-hooks/exhaustive-deps */
import { useWindowGeometry } from "@hooks";
import { animate, PanInfo, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { angle, angleIsVertical } from "src/util";

const PADDING = 50;
const VELOCITY = 0.9;
const MAX_CONTENT_WIDTH = 1200;

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
    [maxInfo]
  );

  const isOverLimit = useCallback(
    (x: number) => {
      const { left, right } = maxInfo;
      console.log({ left, right, x });

      if (x < right && x > left) {
        return false;
      }

      return true;
    },
    [maxInfo]
  );

  const getAdjustedValue = useCallback(
    (x: number) => {
      return isOverLimit(x) ? getMaxValus(x) : x;
    },
    [maxInfo]
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

  useEffect(() => {
    console.log(slideRef.current);
    if (!slideRef.current) return;
    const constraint = getConstraint();
    if (!constraint) return;

    animate(x, 0, {});
    setMaxInfo({ ...constraint });
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

      let newMoveX = moveX + info.offset.x * VELOCITY;
      newMoveX = getAdjustedValue(newMoveX);

      // translateX변경
      x.set(newMoveX);

      mouseXInfo = { moveX: newMoveX, isDown };
    },
    [x, mouseXInfo, maxInfo]
  );

  const onPanEnd = useCallback(
    (_, info: PanInfo) => {
      let newMoveX = x.getVelocity() / 10 + mouseXInfo.moveX;
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

  const onWheel = useCallback(() => {
    (e: React.WheelEvent) => {
      const wheelAngle = angle({
        x: e.deltaX,
        y: e.deltaY,
      });

      if (angleIsVertical(wheelAngle)) return;

      e.stopPropagation();
      e.preventDefault();

      let newMoveX = x.get() - e.deltaX;
      newMoveX = getAdjustedValue(newMoveX);
      x.set(newMoveX);
    };
  }, [maxInfo]);

  const panProps = {
    onPanEnd,
    onPanStart,
    onPan,
    onMouseLeave,
    onWheel,
  };
  return { panProps, x, slideRef };
};

export default usePanSlide;
