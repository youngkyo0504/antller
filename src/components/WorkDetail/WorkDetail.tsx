import Image from "next/image";
import React, { FC } from "react";
import tw, { styled, TwStyle } from "twin.macro";
import mockup from "public/images/newso/mockup.png";
import graph1 from "public/images/newso/graph1.png";
import graph2 from "public/images/newso/graph2.png";
import jonnie from "public/images/newso/jonnie-02.png";
import jonnie2 from "public/images/newso/img-jonnie-04.png";
interface WorkDetailProps {}

const CardContainerVariants: Record<CardContainerVariant, TwStyle> = {
  // Named class sets
  "6": tw`col-span-6`,
  "4": tw`col-span-4`,
  "8": tw`col-span-8`,
};
const CardContainerBgVariants: Record<CardContainerBgVariant, TwStyle> = {
  blue: tw`bg-[#d6e7ec]`,
  orange: tw`bg-[#f9f7ed]`,
  yellow: tw`bg-[#ffe5a6]`,
  green: tw`bg-[#c7e4ca]`,
};

type CardContainerVariant = "6" | "8" | "4";
type CardContainerBgVariant = "yellow" | "green" | "blue" | "orange";
interface CardContainerProps {
  variant?: CardContainerVariant;
  bgColor: CardContainerBgVariant;
}
const CardContainer = styled.section<CardContainerProps>(() => [
  // Return a function here
  tw` rounded-2xl py-content`,
  ({ variant = "6" }) => CardContainerVariants[variant], // Grab the variant style via a prop
  ({ bgColor }) => CardContainerBgVariants[bgColor],
]);

const Container = tw.div`max-w-content mx-auto px-content mt-header`;
const Title = tw.p`text-6xl font-bold tracking-wider`;
const SubTitle = tw.p`text-xl pt-4 text-gray`;
const Grid = tw.div`grid grid-cols-12 gap-6`;
const CardTitleContainer = tw.div`px-content  line-height[1.15] word-break[keep-all]  `;
const CardTitle = tw.p`text-5xl`;
const CardSubTitle = tw.p`mt-3`;
const CircleNumber = tw.div`rounded-full bg-white mr-2 w-6 h-6 border-2 border-[#231e1f] flex justify-center items-center `;
const DiscList = tw.li`list-style-position[inside] list-disc text-xl mt-2`;

interface CardProps {
  twProps?: string;
  colSpan?: CardContainerVariant;
  bgColor: CardContainerBgVariant;
  title: string;
  subTitle: string;
}

const Card: FC<CardProps> = ({
  children,
  twProps,
  title,
  subTitle,
  colSpan,
  bgColor,
}) => {
  return (
    <CardContainer bgColor={bgColor} variant={colSpan} className={twProps}>
      <CardTitleContainer>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>{subTitle}</CardSubTitle>
      </CardTitleContainer>
      {children}
    </CardContainer>
  );
};

interface ClircleListProps {
  content: string;
  number?: number;
}
const ClircleList: FC<ClircleListProps> = ({ content, number }) => {
  return (
    <div tw="flex items-center mt-2 px-content">
      <CircleNumber>
        <span>{number}</span>
      </CircleNumber>
      <span>{content}</span>
    </div>
  );
};

const WorkDetail: FC<WorkDetailProps> = () => {
  return (
    <Container>
      <div tw="pb-12">
        <Title>????????????</Title>
        <SubTitle>??????</SubTitle>
      </div>
      <div tw="my-5 bg-[rgba(255,248,232,.9)] w-full rounded-3xl">
        <div tw="w-1/2 mx-auto p-16">
          <Image tw="w-1/2" src={mockup}></Image>
        </div>
      </div>
      <div tw="flex justify-end my-16 font-bold text-4xl ">
        <span tw=" relative">
          {'"????????? ????????? ????????? ???????????? ????????????"'}
          <span tw="absolute h-1/3 bg-yellow-300/30 -bottom-1 left-0 w-full"></span>
        </span>
      </div>
      <Grid>
        <Card
          bgColor="yellow"
          title="???????????? ??????"
          subTitle="?????? ????????? ????????? ?????? ?????? ?????? ??????"
          colSpan="8"
        >
          <div tw="flex mt-12">
            <div tw="w-1/2 ">
              <Image src={graph1} alt="" />
            </div>
            <div tw="w-1/2 ">
              <Image src={graph2} alt="" />
            </div>
          </div>
        </Card>
        <Card
          title="????????? ??????"
          bgColor="orange"
          colSpan="4"
          subTitle="?????? ????????? ????????? ?????? ?????? ?????? ??????"
        >
          {/* <CardTitleContainer>
            <CardTitle>????????? ??????</CardTitle>
            <CardSubTitle>?????? ????????? ????????? ?????? ?????? ?????? ??????</CardSubTitle> */}
          {/* ???????????? ???????????? & ???????????? */}
          {/* </CardTitleContainer> */}
          <div tw="px-content">
            <div tw="w-1/2 mt-12">
              <Image src={jonnie} />
            </div>
          </div>
        </Card>

        <Card
          bgColor="green"
          title="??????????????????????????? ????????????"
          subTitle="???????????? ???????????????  
????????? ??????,???????????? ??? ????????? ??????"
        >
          <div tw="mt-10 text-xl">
            <ClircleList content="??????????????????" number={1} />
            <ClircleList content="????????? ??????" number={2} />
            <ClircleList content="????????????" number={3} />
          </div>
        </Card>
        <Card
          bgColor="blue"
          title="???????????? ????????????"
          subTitle="????????? ???????????? ??? ?????? ????????????, 
???????????? ?????? ?????? ??????"
        >
          <ul tw="px-content mt-10">
            <DiscList>?????? ?????? ????????????</DiscList>
            <DiscList>?????? C?????? ????????? ????????? ??????</DiscList>
            <DiscList>
              ???????????? ?????? ??????, ???, ?????? ?????? ???????????? ??????!
            </DiscList>
          </ul>
        </Card>
      </Grid>
    </Container>
  );
};

export default WorkDetail;
