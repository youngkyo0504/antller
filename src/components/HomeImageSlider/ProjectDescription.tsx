import { motion, MotionStyle } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { onVariants } from "../../datas/variants";
import "twin.macro";
import useSliderInfoContext from "@components/contexts/SliderContext/useSliderInfo";
interface ProjectDescriptionProps {
  delay: number;
  style?: MotionStyle;
}
import sliderMediaInfo from "./sliderMediaInfo";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import tw from "twin.macro";
function ProjectDescription({ style }: ProjectDescriptionProps) {
  const { isOnAnimation, page } = useSliderInfoContext();
  const [imageInfo, setImageInfo] = useState({ title: "", desc: "" });
  const { isBgBlack } = useDarkBgContext();
  useEffect(() => {
    const { title, desc } = sliderMediaInfo[page];
    if (!isOnAnimation) setImageInfo({ title, desc });
  }, [isOnAnimation]);

  return (
    <motion.div tw="px-mo-content  max-w-sliderDescription h-full leading-normal  w-full sm:pb-10 pb-5  text-xl font-medium sm:text-3xl flex justify-between  mx-auto items-end z-[12] ">
      <motion.div
        style={{ ...style }}
        variants={onVariants}
        custom={""}
        animate={isOnAnimation ? "hidden" : "visible"}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <div
          tw=""
          css={[
            isBgBlack ? tw`text-white` : tw`text-antller-black`,
            tw`delay-[0.2s]`,
          ]}
        >
          <h2>{imageInfo.title}</h2>
          <h3 tw="hidden sm:block text-2xl text-gray">{imageInfo.desc}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default ProjectDescription;
