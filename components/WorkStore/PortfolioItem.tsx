import { motion } from "framer-motion";
import React, { FC, useEffect } from "react";
import { items } from "../../data/simple-work.data";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import "twin.macro";
import Image from "next/image";
import tw, { styled } from "twin.macro";
interface PortfolioItemProps {
  id: string;
  setId: Function;
}
interface OverlayProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
      style={{ pointerEvents: "auto" }}
      tw="z-[3] fixed bg-black/80 will-change[opacity] top-0 bottom-0 left-1/2 -translate-x-1/2 w-full "
      onClick={onClick}
    ></motion.div>
  );
};

const ContentContainer = tw(motion.div)`px-8 py-8`;
const CardImageContainer = tw(
  motion.div
)`w-full aspect-ratio[16/9] overflow-hidden relative`;
const TitleContainer = tw(
  motion.div
)`  z-[3] absolute top-4 left-4 max-w-[300px]`;

const PortfolioItem: FC<PortfolioItemProps> = ({ id, setId }) => {
  const item = items.find((item) => item.id === id)!;
  const { category, title } = item;
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <>
      <Overlay
        onClick={() => {
          setId(null);
        }}
      />
      <div tw="text-white max-w-3xl w-full z-[3] left-1/2 -translate-x-1/2 bottom-0 fixed top-0 my-8 ">
        <motion.div
          tw="relative rounded-3xl bg-[#1c1c1e] overflow-hidden w-full h-full mx-auto "
          layoutId={`card-container-${id}`}
        >
          <CardImageContainer layoutId={`card-image-container-${id}`}>
            <Image
              width={600}
              height={200}
              layout="fill"
              tw="bg-[rgb(238, 234, 231)]"
              className="w-full  "
              src={`/images/${id}.jpeg`}
              alt=""
            />
          </CardImageContainer>
          <TitleContainer layoutId={`title-container-${id}`}>
            <span tw=" text-sm uppercase">{category}</span>
            <h2 tw="">{title}</h2>
          </TitleContainer>
          <ContentContainer>
            <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </ContentContainer>
        </motion.div>
      </div>
    </>
  );
};

export default PortfolioItem;
