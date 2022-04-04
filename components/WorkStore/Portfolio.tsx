import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useState } from "react";
import tw from "twin.macro";
import { workClassification } from "../../data/simple-work.data";
import { TabId } from "../../types";
import PortfolioItem from "./PortfolioItem";
import PortfolioList from "./PortfolioList";

interface WorkStoreProps {}

const Title = tw.div`text-black font-bold text-6xl pb-4  border-b border-[#e3e4e5] max-w-content mx-auto  
`;
const SubTitle = tw.span`text-black font-bold text-4xl pb-4 `;

const TabUnderLine = tw(
  motion.div
)`absolute bottom-[1px] left-0 right-0 h-[1px] bg-antller-black`;
interface TabProps {
  selectedTab: TabId;
  setSelectedTab: React.Dispatch<React.SetStateAction<TabId>>;
}
const Tab = ({ selectedTab, setSelectedTab }: TabProps) => {
  return (
    <ul tw="flex">
      {workClassification.map((work) => (
        <li
          key={work.id}
          className={work.id === selectedTab ? "selected" : ""}
          onClick={() => setSelectedTab(work.id)}
          tw="py-1 px-2 relative cursor-pointer"
        >
          {work.name}
          {work.id === selectedTab ? (
            <TabUnderLine className="" layoutId="underline" />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

const Portfolio: FC<WorkStoreProps> = () => {
  const imageHasLoaded = true;
  const [id, setId] = useState(null);
  const [selectedTab, setSelectedTab] = useState<TabId>("dataAnalysis");
  return (
    <>
      <div tw=" mt-header">
        <div tw="w-full max-w-content mx-auto px-content flex justify-center items-center">
          {/* <Title>Work</Title> */}
          <Tab {...{ selectedTab, setSelectedTab }} />
        </div>
        <PortfolioList {...{ setId, selectedTab }} selectedId={id} />
      </div>

      <AnimatePresence>
        {id && imageHasLoaded && (
          <PortfolioItem setId={setId} id={id} key="item" />
        )}
      </AnimatePresence>
    </>
  );
};
export default Portfolio;
