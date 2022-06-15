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

export const NewImageContainer: FC<ImageContainerProps> = ({
  style,
  duration,
  children,
  index,
}) => {
  const x = motionValue<number>(0);
  const { setIsOnAnimation, isOnAnimation, imagePosition, direction, page } =
    useSliderInfoContext();

  const pos = motionValue<number>(0);
  const transform = useMotionTemplate`translateX(${pos}%)`;

  useEffect(() => {
    console.log(index);
    const num = animateXState[imagePosition[index]];
    pos.set(num);
    console.log(index);
    // pos.set(animateXState[imagePosition[index]]);
    // console.log(animateXState[imagePosition[index]]);
  }, [page]);

  console.log(transform.get());
  return (
    <motion.div
      style={{
        transform: transform,
      }}
      tw=" top-0 absolute h-full w-full bg-cover bg-no-repeat bg-center overflow-hidden"
    >
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
    </motion.div>
  );
};
