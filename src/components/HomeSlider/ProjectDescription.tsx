import { motion, MotionStyle } from "framer-motion";
import React, { FC } from "react";
import { onVariants } from "../../datas/variants";
import "twin.macro";
interface ProjectDescriptionProps {
  delay: number;
  description: { title: string; desc: string };
  style?: MotionStyle;
}
function ProjectDescription({
  style,
  delay,
  description,
}: ProjectDescriptionProps) {
  return (
    <motion.div tw="max-w-content h-full leading-normal  w-full pb-10 text-3xl flex justify-between  text-white mx-auto items-end z-[3] ">
      <motion.div
        style={{ ...style }}
        animate="visible"
        variants={onVariants}
        custom={""}
        initial="hidden"
        transition={{
          delay: delay,
          duration: 0.2,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <h2>{description.title}</h2>
        <h3>{description.desc}</h3>
      </motion.div>
    </motion.div>
  );
}
export default ProjectDescription;
