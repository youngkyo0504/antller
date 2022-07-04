import {
  AnimationPlaybackControls,
  motion,
  MotionStyle,
  MotionValue,
  useMotionValue,
} from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
interface ProgressTextProps {
  style?: MotionStyle | undefined;
  page: number;
  pagesLength: number;
  rotate?: MotionValue | undefined;
}

import "twin.macro";
import tw from "twin.macro";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { SLIDER_DURATION } from "@components/Common/globalStyleComponent";
import { animateSpring } from "@components/ImageSlider/utils";

const ProgressText: FC<ProgressTextProps> = ({ style, pagesLength, page }) => {
  const { isBgBlack } = useDarkBgContext();
  const [count, _] = useState({ value: 1 });
  const rotate = useMotionValue(0);
  const barControl = useRef<AnimationPlaybackControls>();

  useEffect(() => {
    if (barControl.current?.isAnimating()) {
      count.value++;
      barControl.current = animateSpring(rotate, count.value * 360, () => {
        rotate.set(0);
      });
    } else {
      count.value = 1;
      barControl.current = animateSpring(rotate, 360, () => {
        rotate.set(0);
      });
    }
  }, [page]);

  useEffect(() => {}, [page]);

  return (
    <motion.div
      style={{ ...style }}
      tw="absolute sm:bottom-10 bottom-5  z-10  text-3xl  w-full mx-auto px-mo-content"
      css={[isBgBlack ? tw`text-white` : tw`text-antller-black`]}
    >
      <div
        css={{
          transitionDuration: `${SLIDER_DURATION * 1000}ms`,
        }}
        tw="font-semibold  text-xl sm:text-2xl max-w-sliderDescription mx-auto justify-end text-right flex items-center "
      >
        <span tw="align-top inline-block origin-center w-4  ">{page + 1}</span>
        <motion.span
          style={{ rotate: rotate }}
          tw="font-light inline-block origin-[center center 0] leading-none text-lg  sm:text-xl mx-[0.7rem]  "
        >
          /
        </motion.span>
        <span tw="leading-normal">{pagesLength}</span>
      </div>
    </motion.div>
  );
};

export default ProgressText;
