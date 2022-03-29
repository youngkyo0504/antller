import { motion } from "framer-motion";
import React, { FC } from "react";
import { items } from "../../data/simple-work.data";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import "twin.macro";
import Image from "next/image";
interface PortfolioItemProps {
  id: string;
  setId: Function;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ id, setId }) => {
  const item = items.find((item) => item.id === id)!;
  const { category, title } = item;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      ></motion.div>

      <div
        className="card-content-container open"
        onClick={(e) => {
          console.log(e.currentTarget);
          setId(null);
        }}
      >
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            // tw="w-[calc((((100vw - 320px)/ 12) * 4) + 60px)]  aspect-ratio[1.6/1]"
            tw="w-full aspect-ratio[16/9] overflow-hidden absolute top-0 left-0"
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <Image
              width={600}
              height={200}
              layout="fill"
              className="card-image w-full"
              src={`/images/${id}.jpeg`}
              alt=""
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default PortfolioItem;
