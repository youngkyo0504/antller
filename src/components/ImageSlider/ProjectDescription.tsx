import { motion, MotionStyle } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { onVariants } from "../../datas/variants";
import "twin.macro";
interface ProjectDescriptionProps {
  delay: number;
  description: { title: string; desc: string };
  style?: MotionStyle;
  isOnAnimation: React.MutableRefObject<boolean>;
}
function ProjectDescription({
  style,
  isOnAnimation,
  delay,
  description,
}: ProjectDescriptionProps) {
  const [imageInfo, setImageInfo] = useState({ title: "", desc: "" });

  useEffect(() => {
    const { title, desc } = description;
    if (isOnAnimation.current) setImageInfo({ title, desc });
  }, [isOnAnimation.current]);

  return (
    <motion.div tw="max-w-content h-full leading-normal  w-full pb-10 text-3xl flex justify-between  text-white mx-auto items-end z-[12] ">
      <motion.div
        style={{ ...style }}
        // animate="visible"
        variants={onVariants}
        custom={""}
        animate={isOnAnimation.current ? "visible" : "hidden"}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <h2>{imageInfo.title}</h2>
        <h3>{imageInfo.desc}</h3>
      </motion.div>
    </motion.div>
  );
}
export default ProjectDescription;
