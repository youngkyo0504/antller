import tw, { css } from "twin.macro";
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";

interface AppearingEachOneLetterProps {
  text: string;
  color: string;
}
const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.08 },
  },
};
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      type: "tween",
      duration: 0.4,
    },
  },
};
const AppearingEachOneLetter: FC<AppearingEachOneLetterProps> = ({
  color,
  text,
}) => {
  return (
    <motion.h3
      variants={sentenceVariants}
      initial={"hidden"}
      whileInView="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          css={[
            tw`md:text-4xl lg:text-5xl sm:text-3xl text-2xl mb-2 inline-block font-bold  first-of-type:pl-0 pl-0.5`,
            css`
              color: ${color};
            `,
          ]}
          variants={letterVariants}
          key={`${char}-${index}`}
        >
          {char}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default AppearingEachOneLetter;
