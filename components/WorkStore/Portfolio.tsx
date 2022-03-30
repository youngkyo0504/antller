import { AnimatePresence } from "framer-motion";
import React, { FC, useState } from "react";
import tw from "twin.macro";
import PortfolioItem from "./PortfolioItem";
import PortfolioList from "./PortfolioList";

interface WorkStoreProps {}

const Title = tw.div`text-black font-bold text-5xl pb-4  border-b border-[#e3e4e5] max-w-content mx-auto  
`;
const Portfolio: FC<WorkStoreProps> = () => {
  const imageHasLoaded = true;
  const [id, setId] = useState(null);
  return (
    <>
      <div tw=" mt-header">
        <div tw="w-full max-w-content mx-auto px-content">
          <Title>Work</Title>
        </div>
        <PortfolioList setId={setId} selectedId={id} />
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
