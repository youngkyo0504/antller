import { TabId, Work } from "@types";
import React, { FC, useState } from "react";
import { Container, ContentContainer } from "styles/globalStyleComponent";
import tw from "twin.macro";
import PortfolioList from "./PortfolioList";
import Tab from "./Tab";

interface PortfolioProps {
  works: Work[];
}

const Title = tw.div`text-antller-black sm:absolute text-3xl mb-4 sm:mb-0 sm:text-4xl md:(bottom-4 text-5xl) font-bold 
`;
const ProtofolioContainer = tw.div`relative  flex w-full max-w-content mx-auto `;
const TabContainer = tw.div`border-b-divider border-b w-full flex justify-center items-center`;

const Portfolio: FC<PortfolioProps> = ({ works }) => {
  const [selectedTab, setSelectedTab] = useState<TabId>("dataAnalysis");
  return (
    <>
      <Container>
        <ContentContainer tw="relative">
          <Title>Work</Title>
          <TabContainer>
            <Tab {...{ selectedTab, setSelectedTab }} />
          </TabContainer>
        </ContentContainer>
        <ProtofolioContainer>
          <PortfolioList {...{ works, selectedTab }} />
        </ProtofolioContainer>
      </Container>
    </>
  );
};
export default Portfolio;
