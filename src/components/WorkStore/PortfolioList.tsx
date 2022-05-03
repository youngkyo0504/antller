import "twin.macro";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { FC, useState } from "react";
import { TabId, Work } from "../../types";
import PortfolioItem from "./Card";

interface PortfolioListProps {
  selectedTab: TabId;
  works: Work[];
}

const PortfolioList: FC<PortfolioListProps> = ({ selectedTab, works }) => {
  return (
    <>
      <ul tw="  max-w-content mx-auto px-content gap-6 md:grid-cols-2 grid  grid-cols-1 lg:grid-cols-3 pt-16">
        <AnimatePresence exitBeforeEnter>
          {works
            .filter((work) => work.data.category === selectedTab)
            .map((SelectedWork) => (
              <PortfolioItem
                key={SelectedWork.data.id}
                {...SelectedWork.data}
              />
            ))}
        </AnimatePresence>
      </ul>
    </>
  );
};
export default PortfolioList;
