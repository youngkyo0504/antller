import {
  motion,
  MotionStyle,
  motionValue,
  useMotionTemplate,
} from "framer-motion";
import React, { FC, useEffect } from "react";
import "twin.macro";
import Image from "next/image";
import sliderMediaInfo from "./sliderMediaInfo";
import sliderVariants from "./Variants";
import useSliderInfoContext from "@components/contexts/SliderContext/useSliderInfo";
import tw from "twin.macro";
import ProgressText from "./ProgressText";
import ProjectDescription from "./ProjectDescription";

interface ImageContainerProps {
  style?: MotionStyle | undefined;
  duration: number;
  index: number;
}
const length = sliderMediaInfo.length;
interface AnimateState {
  [x: number]: "current" | "next" | "pre";
}
const initialAnimateState: AnimateState = {
  0: "current",
  1: "next",
  [length - 1]: "pre",
};
const animateXState = {
  current: 0,
  next: 100,
  pre: -100,
};

export const ItemContainer: FC<ImageContainerProps> = ({
  style,
  duration,
  children,
  index,
}) => {
  return (
    <motion.div style={{}} tw="relative h-full w-full ">
      <Image
        tw=""
        layout="fill"
        src={sliderMediaInfo[index].imageSrc}
        objectFit="cover"
        objectPosition={""}
        loading={"eager"}
      />
      <div tw="w-full h-full absolute ">
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

      <ProjectDescription index={index} delay={0.3} style={{}} />
    </motion.div>
  );
};
