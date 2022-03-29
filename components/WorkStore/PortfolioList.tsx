import { motion } from "framer-motion";
import React, { FC } from "react";
import { items } from "../../data/simple-work.data";
import "twin.macro";
import Image from "next/image";

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
      className={``}
      tw="relative w-[calc((((100vw - 320px)/ 12) * 4) + 60px)]  h-auto p-6 "
    >
      {/* Title Container */}
      <motion.div tw="z-[3] mb-2" layoutId={`title-container-${id}`}>
        <span tw="text-white text-sm uppercase">{category}</span>
        <h2 tw="text-white text-xl">{title}</h2>
      </motion.div>

      {/* Image Container */}
      <div tw="w-full  relative block">
        <motion.div
          tw=" bg-[#1c1c1e] overflow-hidden w-full mx-auto"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            tw=" overflow-hidden aspect-ratio[16/9]"
            layoutId={`card-image-container-${id}`}
          >
            <Image
              width={600}
              layout={"fill"}
              tw=" bg-[rgb(238, 234, 231)] rounded-2xl  "
              src={`/images/${id}.jpeg`}
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
      <button
        onClick={() => {
          setId(id);
        }}
        className={`card-open-link`}
      />
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
    <ul tw="flex flex-wrap max-w-content mx-auto px-content mt-header ">
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
