import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import React, { FC } from "react";
import { sliderVariants } from "../../data/variants";
import "twin.macro";
interface ImageContainerProps {
  setIsEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  direction: number;
  style?: MotionStyle | undefined;
  duration: number;
  imageRef: React.RefObject<HTMLDivElement>;
}
export const ImageContainer: FC<ImageContainerProps> = ({
  setIsEndAnimation,
  direction,
  style,
  duration,
  children,
  imageRef,
}) => {
  return (
    <motion.div
      ref={imageRef}
      onAnimationComplete={(definition) => {
        setIsEndAnimation(true);
        console.log("애니메이션 끝");
      }}
      style={{ ...style }}
      tw="z-[1] top-0 absolute h-full w-full bg-cover bg-no-repeat "
      custom={direction}
      variants={sliderVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: duration,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
