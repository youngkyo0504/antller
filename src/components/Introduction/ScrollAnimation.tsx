import {
  motion,
  MotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import useWindowGeometry from "src/hooks/useWindowGeometry";
import tw from "twin.macro";

const ScrollAnimation = ({ messages }: { messages: string[] }) => {
  const { windowHeight } = useWindowGeometry();
  const { scrollY } = useViewportScroll();

  const degreeOfMovement = windowHeight * 0.05;
  const textGapY = windowHeight * 0.8;
  const yOfElements: MotionValue<number>[] = [];
  const opacityOfElements: MotionValue<number>[] = [];

  messages.forEach((message, index) => {
    const sequence = [index * textGapY, (index + 1) * textGapY];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const y = useTransform(scrollY, sequence, [degreeOfMovement, 0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(scrollY, sequence, [0, 1]);
    yOfElements.push(y);
    opacityOfElements.push(opacity);
  });

  return (
    <>
      {messages.map((text, index) => (
        <motion.div
          key={index}
          style={{ opacity: opacityOfElements[index], y: yOfElements[index] }}
          tw="margin-top[5vh] first-of-type:margin-top[0] "
        >
          <span tw="leading-relaxed" css={{ wordBreak: "keep-all" }}>
            {text}
          </span>
        </motion.div>
      ))}
    </>
  );
};

export default ScrollAnimation;
