import tw from "twin.macro";
import React, { FC } from "react";
import {
  motion,
  MotionStyle,
  MotionValue,
  useMotionTemplate,
  useTransform,
} from "framer-motion";

interface ItemWrapperProps {
  childrenCount: number;
  index: number;
  margin: number;
  startIndex: MotionValue<number>;
}

const ItemWrapper: FC<ItemWrapperProps> = ({
  children,
  childrenCount,
  index,
  margin,
  startIndex,
}) => {
  const pos = useTransform(
    startIndex,
    (value) => (value <= index ? -value : childrenCount - value) * 100
  );

  const transform = useMotionTemplate`translateX(${pos}%)`;

  const style: MotionStyle = {
    transform,
    willChange: "transform",
  };

  return (
    <motion.div tw="h-full w-full" style={style}>
      {children}
    </motion.div>
  );
};

export default ItemWrapper;
