import AnimatedText from "@components/Common/AnimatedText";
import { motion, Variants } from "framer-motion";
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
const Container = tw.div`relative w-full max-w-content mx-auto mt-header `;
const HistoryContainer = tw.div`relative flex w-[500px] mx-auto  mt-16`;
const HistoryGraph: FC<HistoryGraphProps> = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2022");
  return (
    <Container>
      <AnimatedText titleOption={{ text: "History", color: "#217F43" }} />
      <motion.h2
        viewport={{ once: true }}
        variants={variants}
        {...{ ...variants }}
        tw="text-center text-5xl text-white"
      >
        앤틀러가 걸어온 길
      </motion.h2>
      <HistoryContainer>
        <YearPicker {...{ selectedYear, setSelectedYear }} />
        <HistroyContent {...{ selectedYear }} />
      </HistoryContainer>
    </Container>
  );
};

export default HistoryGraph;
