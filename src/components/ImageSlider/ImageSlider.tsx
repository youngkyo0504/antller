import {
  AnimationPlaybackControls,
  motion,
  useMotionValue,
} from "framer-motion";
import React, { useImperativeHandle } from "react";
import ImageSliderContainer from "./ImageSliderContainer";
import { useAutoplay } from "./useAutoPlay";
import { useOnChange } from "./useOnchange";
import { animateSpring } from "./utils";

const MotionSlider = motion(ImageSliderContainer);

export interface ImageSliderHandle {
  slideNext: (onComplete?: Function) => AnimationPlaybackControls;
  slidePrev: (onComplete?: Function) => AnimationPlaybackControls;
  slideTo: (index: number) => void;
}

interface Props {
  autoplayInterval?: number;
  children?: React.ReactNode;
  className?: string;
  count?: number;
  draggable?: boolean;
  margin?: number;
  style?: React.CSSProperties;
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
    }),
    [autoplay, index]
  );

  useOnChange({
    childrenCount: React.Children.count(children),
    index,
    onChange,
  });

  return (
    <MotionSlider
      ref={sliderRef}
      index={index}
      count={count}
      margin={margin}
      //   {...panProps}
      {...props}
    >
      {children}
    </MotionSlider>
  );
});

export default ImageSlider;
