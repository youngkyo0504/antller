import { TabId, Work } from "@types";
import React, { FC, useState } from "react";
import { Container, ContentContainer } from "styles/globalStyleComponent";
import tw from "twin.macro";
import PortfolioList from "./PortfolioList";
import Tab from "./Tab";

interface PortfolioProps {
  works: Work[];
}

const Title = tw.div`text-antller-black absolute bottom-5 text-6xl
`;

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
        <PortfolioList {...{ works, selectedTab }} />
      </Container>
    </>
  );
};
export default Portfolio;
