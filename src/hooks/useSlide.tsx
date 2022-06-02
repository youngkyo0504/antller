import React, { useCallback, useEffect, useRef } from "react";
import useWindowGeometry from "./useWindowGeometry";

interface MouseXInfo {
  oldX: number;
  moveX: number;
  isDown: boolean;
}

interface MaxXInfo {
  left: number;
  right: number;
}

const PADDING = 50;
const VELOCITY = 2;
const MAX_CONTENT_WIDTH = 1200;

const useSlide = () => {
  const mouseXInfoRef = useRef<MouseXInfo>();
  const slideRef = useRef<HTMLDivElement>(null);
  const { windowWidth } = useWindowGeometry();
  const maxRef = useRef<MaxXInfo>();

  const isOverLimit = useCallback((x: number) => {
    if (!maxRef.current) return false;
    const { left, right } = maxRef.current;

    if (x < right && x > left) {
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    if (!slideRef.current || !mouseXInfoRef.current) return;

    let margin = (windowWidth - MAX_CONTENT_WIDTH) / 2;
    margin = margin > 0 ? margin + PADDING : PADDING;

    mouseXInfoRef.current = {
      oldX: 0,
      moveX: 0,
      isDown: false,
    };

    maxRef.current = {
      left: windowWidth - slideRef.current.clientWidth - margin,
      right: 0,
    };

    console.log(mouseXInfoRef.current, maxRef.current);
  }, [windowWidth]);

  useEffect(() => {
    mouseXInfoRef.current = {
      oldX: 0,
      moveX: 0,
      isDown: false,
    };
  }, []);

  useEffect(() => {}, []);
  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!mouseXInfoRef.current || !slideRef.current) return;

    const { oldX, moveX, isDown } = mouseXInfoRef.current;
    if (!isDown) return;

    const distance = e.clientX - oldX;
    let newMoveX = moveX + VELOCITY * distance;
    newMoveX = isOverLimit(newMoveX) ? newMoveX : moveX;

    slideRef.current.style.transform = `translateX(${newMoveX}px)`;
    mouseXInfoRef.current = { oldX: e.clientX, moveX: newMoveX, isDown };
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (mouseXInfoRef.current) {
      mouseXInfoRef.current = {
        ...mouseXInfoRef.current,
        oldX: 0,
        isDown: false,
      };
    }
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (mouseXInfoRef.current) {
      mouseXInfoRef.current = {
        ...mouseXInfoRef.current,
        oldX: e.clientX,
        isDown: true,
      };
    }
  }, []);

  const onMouseLeave = useCallback((e: React.MouseEvent) => {
    if (mouseXInfoRef.current) {
      mouseXInfoRef.current = {
        ...mouseXInfoRef.current,
        oldX: 0,
        isDown: false,
      };
    }
  }, []);

  return { onPointerDown, onPointerMove, onPointerUp, onMouseLeave, slideRef };
};

export default useSlide;
