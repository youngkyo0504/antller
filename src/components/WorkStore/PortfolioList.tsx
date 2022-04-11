import "twin.macro";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { FC, useState } from "react";
import { TabId, Work } from "../../types";
import { items } from "src/datas/simple-work.data";

interface CardProps {
  id: string;
  subCategory: string;
  category: string;
  title: string;
  pointOfInterest: number;
  theme?: string;
}

const variants: Variants = {
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: -15 },
  initial: { opacity: 0, y: 15 },
};
function Card({ id, title, subCategory }: CardProps) {
  return (
    <motion.li
      className="group"
      animate={"animate"}
      variants={variants}
      initial="initial"
      exit={"exit"}
      transition={{ type: "tween", duration: 0.15 }}
      tw=" flex flex-col justify-between h-auto  mb-6 cursor-pointer z-0 "
    >
      {/* Image Container */}
      <div tw="w-full  relative block  ">
        <motion.div
          // bg-[#1c1c1e]
          tw="   w-full  h-full mx-auto   rounded-2xl"
        >
          <motion.div tw=" h-auto  relative ease-in-out overflow-hidden  group-hover:(-translate-y-0.5 shadow-lg) rounded-2xl transition-all   ">
            <img tw="rounded-2xl " src={`/images/${id}.png`} alt="" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div tw="mt-2">
        <span tw=" text-sm uppercase">{subCategory}</span>
        <h2
          className=""
          tw="group-hover:underline  text-underline-offset[0.25rem]
           text-2xl font-bold transition-all ease-in"
        >
          {title}
        </h2>
      </motion.div>
    </motion.li>
  );
}

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
              <Card key={SelectedWork.data.id} {...SelectedWork.data} />
            ))}
        </AnimatePresence>
      </ul>
    </>
  );
};
export default PortfolioList;
