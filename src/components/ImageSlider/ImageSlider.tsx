import {
  AnimationPlaybackControls,
  motion,
  MotionStyle,
  PanHandlers,
  PanInfo,
  useMotionValue,
} from "framer-motion";
import React, { useCallback, useEffect, useImperativeHandle } from "react";
import ImageSliderContainer from "./ImageSliderContainer";
import { useAutoplay } from "./useAutoPlay";
import { useOnChange } from "./useOnchange";
import { usePan } from "./usePan";
import { animateSpring } from "./utils";

const MotionSlider = motion(ImageSliderContainer);

export type OnPan = (
  event: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo
) => void;

export interface ImageSliderHandle {
  slideNext: (onComplete?: Function) => AnimationPlaybackControls;
  slidePrev: (onComplete?: Function) => AnimationPlaybackControls;
  slideTo: (index: number) => void;
  isAnimating: () => boolean;
}

interface Props {
  autoplayInterval?: number;
  children?: React.ReactNode;
  className?: string;
  count?: number;
  draggable?: boolean;
  margin?: number;
  // style?: React.CSSProperties;
  style?: MotionStyle | undefined;
  onChange?: (index: number) => void;
  onComplete?: () => void;
}

const ImageSlider = React.forwardRef<ImageSliderHandle, Props>(function Slider(
  {
    onComplete,
    autoplayInterval = 0,
    count = 1,
    children,
    draggable = true,
    margin = 0,
    onChange,
    style,

    ...props
  },
  ref: React.Ref<ImageSliderHandle>
) {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const index = useMotionValue(0);
  const autoplay = useAutoplay(index, autoplayInterval, onComplete);
  useImperativeHandle(
    ref,
    () => ({
      slideNext: () => {
        autoplay.start();

        const roundIndex = Number(index.get().toFixed(4));

        return animateSpring(index, Math.ceil(roundIndex + 1), onComplete);
      },

      slidePrev: () => {
        autoplay.start();

        const roundIndex = Number(index.get().toFixed(4));

        return animateSpring(index, Math.floor(roundIndex - 1), onComplete);
      },

      slideTo: (newIndex: number): void => {
        autoplay.start();

        animateSpring(index, newIndex);
      },
      isAnimating: () => index.isAnimating(),
    }),

    [autoplay, index]
  );

  useOnChange({
    childrenCount: React.Children.count(children),
    index,
    onChange,
  });

  const panHandlers = usePan({
    count,
    index,
    margin,
    ref: sliderRef,
  });

  const onPanStart: OnPan = useCallback(
    (...args) => {
      autoplay.stop();

      panHandlers.onPanStart(...args);
    },
    [autoplay, panHandlers]
  );

  const onPanEnd: OnPan = useCallback(
    (...args) => {
      autoplay.start();

      panHandlers.onPanEnd(...args, onComplete);
    },
    [autoplay, panHandlers]
  );

  let panProps: PanHandlers = {};

  if (draggable) {
    panProps = {
      onPanStart,
      onPan: panHandlers.onPan,
      onPanEnd,
    };
  }

  useEffect(() => {
    autoplay.start();
  }, []);

  return (
    <MotionSlider
      style={style}
      ref={sliderRef}
      index={index}
      count={count}
      margin={margin}
      {...panProps}
      {...props}
    >
      {children}
    </MotionSlider>
  );
});

export default ImageSlider;
