import { motion } from "framer-motion";
import React, { FC } from "react";
import { items } from "../../data/simple-work.data";
import "twin.macro";
import Image from "next/image";
import tw from "twin.macro";

interface CardProps {
  id: string;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
  isSelected: boolean;
  theme?: string;
  setId: Function;
}

function Card({ setId, id, title, category, theme }: CardProps) {
  return (
    <li
      tw=" flex flex-col justify-between h-auto  mb-6  "
      onClick={() => {
        setId(id);
      }}
    >
      {/* Title Container */}
      <motion.div tw="mb-4 z-[3] " layoutId={`title-container-${id}`}>
        {/* <span tw="text-white text-sm uppercase">{category}</span> */}
        <h2 tw="text-2xl font-bold">{title}</h2>
      </motion.div>

      {/* Image Container */}
      <div tw="w-full  relative block ">
        <motion.div
          // bg-[#1c1c1e]
          tw="  overflow-hidden w-full mx-auto "
          layoutId={`card-container-${id}`}
        >
          <motion.div
            tw=" overflow-hidden aspect-ratio[1.6/1] "
            layoutId={`card-image-container-${id}`}
          >
            <Image
              width={600}
              layout={"fill"}
              tw=" bg-[rgb(238, 234, 231)] rounded-xl  "
              src={`/images/${id}.jpeg`}
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </li>
  );
}

interface PortfolioListProps {
  selectedId: string | null;
  setId: Function;
}

const PortfolioList: FC<PortfolioListProps> = ({ selectedId, setId }) => {
  const imageHasLoaded = true;

  return (
    <ul tw="  max-w-content mx-auto px-content gap-6 md:grid-cols-2 grid  grid-cols-1 lg:grid-cols-3 pt-16">
      {items.map((card) => (
        <Card
          key={card.id}
          setId={setId}
          {...card}
          isSelected={card.id === selectedId}
        />
      ))}
    </ul>
  );
};
export default PortfolioList;
