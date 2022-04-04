import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { FC, useState } from "react";
import { items } from "../../data/simple-work.data";
import "twin.macro";
import Image from "next/image";
import tw from "twin.macro";
import { TabId } from "../../types";

interface CardProps {
  id: string;
  subCategory: string;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
  isSelected: boolean;
  theme?: string;
  setId: Function;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const variants: Variants = {
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: -15 },
  initial: { opacity: 0, y: 15 },
};
function Card({
  setId,
  id,
  title,
  setHovered,
  category,
  subCategory,
  theme,
}: CardProps) {
  const [hoverable, setHoverable] = useState(true);
  return (
    <motion.li
      className="group"
      animate={"animate"}
      variants={variants}
      initial="initial"
      exit={"exit"}
      transition={{ type: "tween", duration: 0.15 }}
      tw="bg-transparent flex flex-col justify-between h-auto  mb-6 cursor-pointer z-0 "
      onClick={() => {
        setId(id);
      }}
      style={{ pointerEvents: hoverable ? "all" : "none" }}
    >
      {/* Image Container */}
      <div tw="w-full  relative block bg-transparent ">
        <motion.div
          // bg-[#1c1c1e]
          tw="   w-full mx-auto bg-transparent"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            tw="bg-transparent  overflow-hidden w-[484px] h-[303px] group-hover:(-translate-y-2 shadow-lg) rounded-2xl transition-all   "
            layoutId={`card-image-container-${id}`}
          >
            {/* <img src={`/images/${id}.jpeg`}></img> */}
            <Image
              layout="fill"
              objectFit="cover"
              tw="rounded-2xl group-hover:shadow-xl"
              src={`/images/${id}.png`}
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div tw="mt-2" layoutId={`title-container-${id}`}>
        <span tw=" text-sm uppercase">{subCategory}</span>
        <h2
          className="underline-offset-2"
          tw="group-hover:underline  text-2xl font-bold transition-all ease-in"
        >
          {title}
        </h2>
      </motion.div>
    </motion.li>
  );
}

interface PortfolioListProps {
  selectedId: string | null;
  setId: Function;
  selectedTab: TabId;
}

const PortfolioList: FC<PortfolioListProps> = ({
  selectedId,
  setId,
  selectedTab,
}) => {
  const imageHasLoaded = true;
  const [hoverd, setHovered] = useState(false);

  return (
    <>
      {/* <motion.div
        animate={{ opacity: hoverd ? 0.8 : 0 }}
        transition={{ duration: 0.15 }}
        tw="fixed will-change[opacity] top-0 bottom-0 z-[-1]   bg-black h-screen w-full"
      ></motion.div> */}

      <ul tw="  max-w-content mx-auto px-content gap-6 md:grid-cols-2 grid  grid-cols-1 lg:grid-cols-3 pt-16">
        <AnimatePresence exitBeforeEnter>
          {items
            .filter((card) => card.category === selectedTab)
            .map((SelectedItem) => (
              <Card
                setHovered={setHovered}
                key={SelectedItem.id}
                setId={setId}
                {...SelectedItem}
                isSelected={SelectedItem.id === selectedId}
              />
            ))}
        </AnimatePresence>
      </ul>
    </>
  );
};
export default PortfolioList;
