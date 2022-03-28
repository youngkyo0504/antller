import { motion } from "framer-motion";
import React from "react";
import "twin.macro";
import { rotateVariants } from "../../data/variants";
interface ProgressTextProps {
  isEndAnimation: boolean;
  duration: number;
}
export function ProgressText({ isEndAnimation, duration }: ProgressTextProps) {
  return (
    <div tw="absolute bottom-10  text-white z-30 text-3xl  w-full mx-auto">
      <div tw=" max-w-content mx-auto justify-end text-right flex items-center">
        <span tw=" align-top inline-block leading-normal  ">1</span>
        <motion.span
          transition={{
            duration: duration,
            ease: "easeOut",
          }}
          variants={rotateVariants}
          animate={isEndAnimation ? "stop" : "rotate"}
          tw="inline-block origin-center text-2xl mx-[0.7rem]"
        >
          /
        </motion.span>
        <span tw="leading-normal">4</span>
      </div>
    </div>
  );
}
