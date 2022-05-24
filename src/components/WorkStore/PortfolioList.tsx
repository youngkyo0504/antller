import "twin.macro";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { TabId, Work } from "../../types";
import PortfolioItem from "./Card";
import WorkItem from "@components/Workslist/WorkItem";

interface PortfolioListProps {
  selectedTab: TabId;
  works: Work[];
}

const PortfolioList: FC<PortfolioListProps> = ({ selectedTab, works }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.ul
          key={selectedTab}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          tw="  max-w-content w-full px-mo-content sm:px-content gap-6 md:grid-cols-2 grid  grid-cols-1 lg:grid-cols-3 md:pt-16 pt-8"
        >
          {works
            .filter((work) => work.data.category === selectedTab)
            .map((SelectedWork, index) => (
              <WorkItem
                key={SelectedWork.data.id}
                {...SelectedWork.data}
                index={index}
              />
              // <PortfolioItem
              //   key={SelectedWork.data.id}
              //   {...SelectedWork.data}
              // />
            ))}
        </motion.ul>
        )
      </AnimatePresence>
    </>
  );
};
export default PortfolioList;
