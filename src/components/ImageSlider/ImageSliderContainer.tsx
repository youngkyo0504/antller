import tw from "twin.macro";
import React, { FC } from "react";
import {
  motion,
  MotionStyle,
  MotionValue,
  useMotionTemplate,
  useTransform,
} from "framer-motion";
import ItemWrapper from "./ItemWrapper";

type ImageSliderProps = {
  children?: React.ReactNode;
  /**
   * 한 화면에 몇개?
   */
  count: number;
  index: MotionValue<number>;
  margin: number;
  style?: React.CSSProperties;
};

const ImageSliderContainer = React.forwardRef<HTMLDivElement, ImageSliderProps>(
  function Slider(
    { children, style = {}, margin, count, index, ...props },
    ref
  ) {
    // count 한 화면에 몇개?
    const childrenCount = React.Children.count(children);

    const tail = childrenCount - count; // 몇번째냐 지금 꼬리 꼬리 children 8개라면 count뺀게 꼬리가 맞네 ..>!!!!
    /**
     * frame하나당 진행도
     */
    const frameWidth = 100 / childrenCount; //

    const startIndex: MotionValue = useTransform(index, (value) => {
      if (!tail) {
        // tail이 0이라면??? 아니면 없다면
        return 0;
      }

      if (value >= 0) {
        return (Math.floor(value / tail) * tail) % childrenCount; // childrenCount 3
      }
      // index가 0보다 작을 수 있나????

      return (
        (childrenCount +
          ((Math.ceil(value / tail) * tail - tail) % childrenCount)) %
        childrenCount
      );
    });

    const translate = useTransform(index, (value) => {
      if (!tail) {
        return 0;
      }

      if (value >= 0) {
        return frameWidth * (value % tail);
      }

      return frameWidth * (tail + (value % tail));
    });

    const containerStyle = {
      ...style,
      overflow: "hidden",

      // https://github.com/framer/motion/issues/281
      touchAction: "pan-y",
    };

    const transform = useMotionTemplate`translateX(-${translate}%)`;

    const sliderStyle: MotionStyle = {
      transform,
      willChange: "transform",
      width: `calc(((100% - ${
        (count - 1) * margin
      }px) / ${count} + ${margin}px)*${childrenCount})`,
    };

    return (
      <div ref={ref} style={containerStyle} {...props} tw="h-full w-full">
        <motion.div
          tw="absolute flex top-0 left-0 w-full h-full will-change[transform]"
          style={sliderStyle}
        >
          {React.Children.map(children, (child, i) => (
            <ItemWrapper
              childrenCount={childrenCount}
              index={i}
              margin={margin}
              startIndex={startIndex}
            >
              {child}
            </ItemWrapper>
          ))}
        </motion.div>
      </div>
    );
  }
);

export default ImageSliderContainer;
