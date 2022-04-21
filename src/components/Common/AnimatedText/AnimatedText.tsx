import tw from "twin.macro";
import React, { FC } from "react";
import AppearingEachOneLetter from "./AppearingEachOneLetter";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  titleOption: { text: string; color: string };
}

const iconVariants: Variants = {
  out: {
    opacity: 0,
    y: 40, // translateX(-600)
  },
  in: {
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      type: "tween",
      duration: 0.4,
    },
    y: 0,
  },
};

const AnimatedText: FC<AnimatedTextProps> = ({ titleOption, children }) => {
  return (
    <>
      <AppearingEachOneLetter {...titleOption} />
      <motion.h2
        tw="text-6xl leading-normal opacity-0  "
        whileInView={"in"}
        variants={iconVariants}
      >
        {children}
      </motion.h2>
    </>
  );
};
// 다음 세대를 위한
// <br />
// 단단한 축산
export default AnimatedText;
