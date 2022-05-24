import { motion, MotionStyle } from "framer-motion";
import { FC } from "react";
import { rotateVariants } from "../../datas/variants";

interface ProgressTextProps {
  style?: MotionStyle | undefined;
  duration: any;
  pagesLength: number;
}

import "twin.macro";
import useSliderInfoContext from "@components/contexts/SliderContext/useSliderInfo";
import tw from "twin.macro";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";

const ProgressText: FC<ProgressTextProps> = ({
  duration,
  style,
  pagesLength,
}) => {
  const { page, isOnAnimation } = useSliderInfoContext();
  const { isBgBlack } = useDarkBgContext();

  return (
    <motion.div
      style={{ ...style }}
      tw="absolute sm:bottom-10 bottom-5  z-10  text-3xl  w-full mx-auto px-mo-content"
      css={[isBgBlack ? tw`text-white` : tw`text-antller-black`]}
    >
      <div
        css={{
          transitionDuration: `${duration * 1000}ms`,
        }}
        tw="font-semibold  text-xl sm:text-2xl max-w-sliderDescription mx-auto justify-end text-right flex items-center "
      >
        <span tw="align-top inline-block origin-center w-4  ">{page + 1}</span>
        <motion.span
          transition={{
            duration: duration,
            ease: "easeOut",
          }}
          variants={rotateVariants}
          initial={false}
          animate={isOnAnimation ? "rotate" : "stop"}
          tw="font-light inline-block origin-[center center 0] leading-none text-2xl mx-[0.7rem]  "
        >
          /
        </motion.span>
        <span tw="leading-normal">{pagesLength}</span>
      </div>
    </motion.div>
  );
};

export default ProgressText;
