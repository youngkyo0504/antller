import { AnimatePresence } from "framer-motion";
import React, { FC, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioList from "./PortfolioList";

interface WorkStoreProps {}

const Portfolio: FC<WorkStoreProps> = () => {
  const imageHasLoaded = true;
  const [id, setId] = useState(null);
  return (
    <>
      <PortfolioList setId={setId} selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && (
          <PortfolioItem setId={setId} id={id} key="item" />
        )}
      </AnimatePresence>
    </>
  );
};
export default Portfolio;
