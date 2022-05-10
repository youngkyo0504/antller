import { motion, MotionStyle } from "framer-motion";
import React, { FC } from "react";
import "twin.macro";
import Image from "next/image";
import sliderMediaInfo from "./sliderMediaInfo";
import sliderVariants from "./Variants";
import useSliderInfoContext from "@components/contexts/SliderContext/useSliderInfo";
import tw from "twin.macro";

interface ImageContainerProps {
  style?: MotionStyle | undefined;
  duration: number;
  index: number;
}
const length = sliderMediaInfo.length;
const initialAnimateState = {
  0: "current",
  1: "next",
  [length - 1]: "pre",
};

export const ImageContainer: FC<ImageContainerProps> = ({
  style,
  duration,
  children,
  index,
}) => {
  const { setIsOnAnimation, isOnAnimation, imagePosition, direction } =
    useSliderInfoContext();
  console.log(imagePosition[index], sliderMediaInfo[index]);
  return (
    <motion.div
      onAnimationComplete={(definition) => {
        if (definition.toString() === "current" && isOnAnimation === true) {
          console.log("애니메이션 끝");
          setIsOnAnimation(false);
        }
      }}
      style={{ ...style }}
      tw=" top-0 absolute h-full w-full bg-cover
       bg-no-repeat bg-center overflow-hidden "
      custom={direction}
      variants={sliderVariants}
      animate={imagePosition[index] || ""}
      initial={initialAnimateState[index] || ""}
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
        loading={"eager"}
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
