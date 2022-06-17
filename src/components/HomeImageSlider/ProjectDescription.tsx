import { motion, MotionStyle } from "framer-motion";
import React from "react";
import { onVariants } from "../../datas/variants";
import "twin.macro";
import sliderMediaInfo from "./sliderMediaInfo";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import tw from "twin.macro";

interface ProjectDescriptionProps {
  delay: number;
  index: number;
  style?: MotionStyle;
}

const transition = {
  delay: 0.3,
  duration: 0.5,
  ease: "easeInOut",
  type: "tween",
};

function ProjectDescription({ style, index }: ProjectDescriptionProps) {
  const { isBgBlack } = useDarkBgContext();
  const { title, desc } = sliderMediaInfo[index];

  return (
    <motion.div
      className="unselectable"
      tw="absolute top-0 px-mo-content pointer-events-none h-full leading-normal  w-full  pb-5  text-xl font-medium sm:(text-3xl pb-10) flex justify-between   mx-auto items-end z-[12] "
    >
      <motion.div
        style={{ ...style }}
        variants={onVariants}
        whileInView={"visible"}
        initial={"hidden"}
        tw="max-w-sliderDescription mx-auto w-full"
        transition={transition}
      >
        <div css={[isBgBlack ? tw`text-white` : tw`text-antller-black`]}>
          <p>{title}</p>
          <p tw="hidden sm:block text-2xl text-gray">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectDescription;
