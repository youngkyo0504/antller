import tw from "twin.macro";
import React, { FC, useState } from "react";
import { motion, Transition, Variants } from "framer-motion";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
interface HamburgerProps {
  setIsOpen?: any;
}
const variants: Variants = {
  rotateLeft: {
    y: 3,
    rotate: 45,
  },
  rotateRight: {
    rotate: -45,
    y: -3,
  },
};
const transition: Transition = {
  duration: 0.3,
  ease: [0.61, 1, 0.88, 1],
};
const Hamburger: FC<HamburgerProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const { isBgBlack } = useDarkBgContext();

  return (
    <motion.button
      onClick={() => {
        setOpen(!open);
      }}
      tw="md:hidden h-[3.75rem] w-[3.75rem] p-5 flex items-center justify-center "
    >
      <div tw=" relative w-full flex justify-center h-2 ">
        <motion.span
          variants={variants}
          transition={transition}
          animate={open ? "rotateLeft" : ""}
          tw="w-full h-[2px]  top-0 absolute"
          css={[isBgBlack ? tw`bg-white` : tw`bg-antller-black`]}
        ></motion.span>
        <motion.span
          variants={variants}
          transition={transition}
          animate={open ? "rotateRight" : ""}
          tw="w-full h-[2px]  absolute bottom-0 bg-antller-black"
          css={[isBgBlack ? tw`bg-white` : tw`bg-antller-black`]}
        ></motion.span>
      </div>
    </motion.button>
  );
};

export default Hamburger;
