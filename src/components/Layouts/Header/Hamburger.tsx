import tw from "twin.macro";
import React, { FC } from "react";
import { motion, Transition, Variants } from "framer-motion";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
interface HamburgerProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  isStickyHeader?: boolean;
  isHome?: boolean;
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

const Hamburger: FC<HamburgerProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isStickyHeader = true,
  isHome,
}) => {
  const { setIsBgBlack, isBgBlack } = useDarkBgContext();
  return (
    <motion.button
      onClick={() => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isStickyHeader) {
          window.scrollTo(0, 0);
        }
      }}
      tw="sm:hidden h-[3.75rem] w-[3.75rem] absolute right-0 top-0 p-5 flex items-center justify-center "
    >
      <div tw=" relative w-full flex justify-center h-2  ">
        <motion.span
          variants={variants}
          transition={transition}
          animate={isMobileMenuOpen ? "rotateLeft" : ""}
          tw="w-full h-[2px]  top-0 absolute transition-colors duration-[0.5s] "
          css={[
            isBgBlack || isMobileMenuOpen ? tw`bg-white` : tw`bg-antller-black`,
            isHome && !isMobileMenuOpen ? tw`bg-antller-black` : "",
          ]}
        ></motion.span>
        <motion.span
          variants={variants}
          transition={transition}
          animate={isMobileMenuOpen ? "rotateRight" : ""}
          tw="w-full h-[2px]  absolute bottom-0 bg-antller-black transition-colors duration-[0.5s]"
          css={[
            isBgBlack || isMobileMenuOpen ? tw`bg-white` : tw`bg-antller-black`,
            isHome && !isMobileMenuOpen ? tw`bg-antller-black` : "",
          ]}
        ></motion.span>
      </div>
    </motion.button>
  );
};

export default Hamburger;
