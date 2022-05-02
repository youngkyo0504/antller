import AnimatedText from "@components/Common/AnimatedText";
import { useElementGeometry } from "@hooks";
import {
  motion,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
import React, { FC, useState } from "react";
import tw from "twin.macro";
import HistroyContent from "./HistoryContent";
import YearPicker from "./YearPicker";
interface HistoryGraphProps {}

const variants: Variants = {
  initial: { opacity: 0, y: 15 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.3 },
  },
};
// rgb(51, 61, 75);
const Container = tw.div`relative min-h-[70vh] w-full max-w-content mx-auto mt-header `;
const HistoryContainer = tw.div`relative flex w-[500px] mx-auto  mt-36 `;
const HistoryGraph: FC<HistoryGraphProps> = () => {
  const [ref, elementHeight, offsetTop] = useElementGeometry<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(
    scrollY,
    // scroll animation element의 opacity가 0이 될 때
    [offsetTop - elementHeight, offsetTop - elementHeight / 2],
    [0, 1],
    {
      clamp: false,
    }
  );
  const [selectedYear, setSelectedYear] = useState<string>("2022");
  return (
    <Container ref={ref}>
      <motion.div style={{ opacity }}>
        <p tw="text-5xl tracking-wide text-white font-bold">History</p>
        <p tw="text-white mt-4 text-xl">앤틀러가 걸어온 길 </p>
        {/* <AnimatedText titleOption={{ text: "History", color: "#fff" }} /> */}
        {/* <motion.h2
        viewport={{ once: true }}
        variants={variants}
        {...{ ...variants }}
        tw="text-center text-5xl text-white"
      >
        앤틀러가 걸어온 길
      </motion.h2> */}
        <HistoryContainer>
          <YearPicker {...{ selectedYear, setSelectedYear }} />
          <HistroyContent {...{ selectedYear }} />
        </HistoryContainer>
      </motion.div>
    </Container>
  );
};

export default HistoryGraph;
