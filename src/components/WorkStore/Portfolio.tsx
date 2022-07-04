import { TabId, Work } from "@types";
import React, { FC, useState } from "react";
import { Container } from "@components/Common/globalStyleComponent";
import tw, { css } from "twin.macro";
import PortfolioList from "./PortfolioList";
import Tab from "./Tab";

interface PortfolioProps {
  works: Work[];
}

const scrollbarNoneStyle = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = tw.div`text-antller-black sm:absolute text-3xl mb-4 sm:mb-0 sm:text-4xl md:(bottom-4 text-5xl) font-bold px-mo-content sm:px-content 
`;

const ProtofolioContainer = tw.div`relative  flex w-full max-w-content mx-auto `;
const TabContainer = tw.div` w-full  sm:justify-center items-center  `;
const ContentContainer = tw.div`max-w-content  mx-auto w-full`;
const Portfolio: FC<PortfolioProps> = ({ works }) => {
  const [selectedTab, setSelectedTab] = useState<TabId>("dataAnalysis");
  return (
    <>
      <Container>
        <ContentContainer tw="relative">
          <Title>Work</Title>

          <Tab {...{ selectedTab, setSelectedTab }} />
        </ContentContainer>
        <ProtofolioContainer>
          <PortfolioList {...{ works, selectedTab }} />
        </ProtofolioContainer>
      </Container>
    </>
  );
};
export default Portfolio;
