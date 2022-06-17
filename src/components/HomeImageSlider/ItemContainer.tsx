import { motion, MotionStyle } from "framer-motion";
import React, { FC } from "react";
import Image from "next/image";
import sliderMediaInfo from "./sliderMediaInfo";
import tw from "twin.macro";
import ProjectDescription from "./ProjectDescription";
import "twin.macro";

interface ImageContainerProps {
  style?: MotionStyle | undefined;
  index: number;
}

export const ItemContainer: FC<ImageContainerProps> = ({ index }) => {
  const { imageSrc, title, videoSrc } = sliderMediaInfo[index];

  return (
    <motion.div
      className="unselectable"
      style={{}}
      tw="relative h-full w-full "
    >
      <Image
        alt={""}
        tw=""
        layout="fill"
        src={imageSrc}
        objectFit="cover"
        objectPosition={""}
        loading={"eager"}
        draggable="false"
      />
      <div tw="w-full h-full absolute ">
        {videoSrc && (
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
