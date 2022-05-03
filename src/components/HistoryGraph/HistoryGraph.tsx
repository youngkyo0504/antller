import { useElementGeometry } from "@hooks";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { FC, useState } from "react";
import {
  AboutSubTitle,
  SubTitleDescription,
} from "styles/globalStyleComponent";
import tw from "twin.macro";
import HistroyContent from "./HistoryContent";
import YearPicker from "./YearPicker";
interface HistoryGraphProps {}

const Container = tw.div`relative min-h-[80vh] w-full max-w-content mx-auto mt-header `;
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
        <AboutSubTitle>History</AboutSubTitle>
        <SubTitleDescription>앤틀러가 걸어온 길</SubTitleDescription>
        <HistoryContainer>
          <YearPicker {...{ selectedYear, setSelectedYear }} />
          <HistroyContent {...{ selectedYear }} />
        </HistoryContainer>
      </motion.div>
    </Container>
  );
};

export default HistoryGraph;
