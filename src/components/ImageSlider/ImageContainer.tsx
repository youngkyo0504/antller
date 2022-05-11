import { motion, MotionStyle } from "framer-motion";
import React, { FC } from "react";
import "twin.macro";
import Image from "next/image";
import sliderMediaInfo from "./sliderMediaInfo.json";
import sliderVariants from "./Variants";

interface ImageContainerProps {
  isOnAnimation: React.MutableRefObject<boolean>;
  direction: number;
  style?: MotionStyle | undefined;
  duration: number;
  index: number;
  animationState?: string;
}

export const ImageContainer: FC<ImageContainerProps> = ({
  direction,
  style,
  duration,
  children,
  animationState = "",
  index,
  isOnAnimation,
}) => {
  return (
    <motion.div
      onAnimationComplete={(definition) => {
        console.log();
        if (
          definition.toString() === "current" &&
          isOnAnimation.current === false
        ) {
          isOnAnimation.current = true;
          console.log(
            "애니메이션 끝",
            isOnAnimation.current,
            animationState,
            sliderMediaInfo[index].title
          );
        }
      }}
      style={{ ...style }}
      tw=" top-0 absolute h-full w-full bg-cover
       bg-no-repeat bg-center overflow-hidden "
      custom={direction}
      variants={sliderVariants}
      animate={animationState}
      initial={false}
      transition={{
        duration: duration,
        ease: "easeInOut",
      }}
    >
      <Image
        tw="z-[-2]"
        layout="fill"
        src={sliderMediaInfo[index].imageSrc}
        objectFit="cover"
        objectPosition={""}
      />
      <div tw="w-full h-screen absolute z-[-1]">
        {sliderMediaInfo[index].videoSrc && (
          <video
            src={`video/soso${index + 1}.mp4`}
            tw="object-cover object-position[center] absolute w-[101%] h-[101%] z-[10] top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2"
            muted
            autoPlay
            loop
          ></video>
        )}
      </div>
    </motion.div>
  );
};
