import { useElementGeometry } from "@hooks";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { FC, useState } from "react";
import {
  AboutSubTitle,
  ContentContainer,
  SubTitleDescription,
} from "styles/globalStyleComponent";
import tw from "twin.macro";
import HistroyContent from "./HistoryContent";
import YearPicker from "./YearPicker";
interface HistoryGraphProps {}

const HistoryContainer = tw.div`relative flex max-width[100vw] min-h-[540px] mb-header flex-col sm:(w-[500px] flex-row pl-10 mt-about-item)  overflow-x-auto sm:(overflow[visible]) mt-mo-about-item  mx-auto  word-break[keep-all]`;

const HistoryGraph: FC<HistoryGraphProps> = () => {
  const [ref, elementHeight, offsetTop] = useElementGeometry<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(
    scrollY,
    // scroll animation element의 opacity가 0이 될 때
    [
      offsetTop - elementHeight,
      offsetTop - elementHeight * 0.3,
      offsetTop + elementHeight * 0.5,
      offsetTop + elementHeight * 0.9,
    ],
    [0, 1, 1, 0],
    {
      clamp: false,
    }
  );

  const [selectedYear, setSelectedYear] = useState<string>("2022");
  return (
    <motion.section
      tw="sm:mb-header sm:mt-header   mt-0 "
      style={{ opacity }}
      ref={ref}
    >
      <ContentContainer tw="relative">
        <AboutSubTitle>History</AboutSubTitle>
        <SubTitleDescription>앤틀러가 걸어온 길</SubTitleDescription>
      </ContentContainer>
      <HistoryContainer>
        <YearPicker {...{ selectedYear, setSelectedYear }} />
        <HistroyContent {...{ selectedYear }} />
      </HistoryContainer>
    </motion.section>
  );
};

export default HistoryGraph;
