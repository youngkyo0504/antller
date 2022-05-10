import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import React, { FC } from "react";
import "twin.macro";
import Image from "next/image";
import { sliderVariants } from "src/datas/variants";
interface ImageContainerProps {
  setIsEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  direction: number;
  style?: MotionStyle | undefined;
  duration: number;
}
export const ImageContainer: FC<ImageContainerProps> = ({
  setIsEndAnimation,
  direction,
  style,
  duration,
  children,
}) => {
  return (
    <motion.div
      onAnimationComplete={(definition) => {
        setIsEndAnimation(true);
        console.log("애니메이션 끝");
      }}
      style={{ ...style }}
      tw=" top-0 absolute h-full w-full bg-cover
       bg-no-repeat bg-center overflow-hidden "
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
