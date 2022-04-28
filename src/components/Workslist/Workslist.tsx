import tw, { css, styled } from "twin.macro";
import React, { FC } from "react";
import { items } from "src/datas/simple-work.data";
import PortfolioItem from "@components/WorkStore/Card";
import WorkItem from "./WorkItem";

interface WorkslistProps {}
const decideGridOrder = (index: number) => {
  if (index % 10 === 0) return css`order[${index + 4}] col-span-2 row-span-2`;
  if (index % 5 === 0) return tw`col-span-2 row-span-2`;
  return "";
};

const GridItem = styled.div(({ index }: { index: number }) => [
  css`
    &:nth-of-type(5n + 1) {
      ${tw`!col-start-3`}
      grid-column: auto / span 2;
      grid-row: auto / span 2;
    }
    &:nth-of-type(10n + 1) {
      grid-column: auto / span 2;
      grid-row: auto / span 2;
      ${tw`col-start-1`}
    }
    &:nth-of-type(1) {
      grid-column: auto / span 2;
      grid-row: auto / span 2;
      ${tw`!col-start-1`}
    }
  `,
]);

const FlexItem = styled.div(() => [
  css`
    &:nth-of-type(5n) {
      ${tw`w-1/2`}
    }
    &:nth-of-type(6n) {
      ${tw`w-1/2`}
    }
    ${tw`w-1/4`}
  `,
]);

const Workslist: FC<WorkslistProps> = ({}) => {
  return (
    <>
      <section tw="grid lg:(grid-cols-4) auto-cols-max max-w-[1600px] px-[50px] mx-auto gap-y-[50px] gap-x-[20px] mt-20">
        {items.map((item, index) => (
          <GridItem index={index}>
            <WorkItem index={index} {...item} />
          </GridItem>
        ))}
      </section>
      {/* <section tw="flex max-w-[1600px] px-[50px] mx-auto flex-wrap">
        {items.map((item, index) => (
          <div>
            <WorkItem index={index} {...item} />
          </div>
        ))}
      </section> */}
    </>
  );
};

export default Workslist;
