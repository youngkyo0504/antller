import tw, { css, styled } from "twin.macro";
import React, { FC } from "react";
import { items, workItem } from "src/datas/simple-work.data";
import PortfolioItem from "@components/WorkStore/Card";
import WorkItem from "./WorkItem";
import { chunk } from "src/util";

interface WorkslistProps {}
const decideGridOrder = (index: number) => {
  if (index % 10 === 0) return css`order[${index + 4}] col-span-2 row-span-2`;
  if (index % 5 === 0) return tw`col-span-2 row-span-2`;
  return "";
};

const GridItem = styled.div(({ index }: { index: number }) => [
  index === 0
    ? tw`col-span-2 row-span-2`
    : index % 5 === 0
    ? tw`col-span-2  col-start-3 row-span-2`
    : "",
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
const WorkItemsChunkedBy10 = (chunkedWorks: workItem[]) => {
  return (
    <>
      <div tw=" col-span-2    row-span-2   ">1</div>
      <div tw="">2</div>
      <div tw="h-24 bg-red-200">3</div>
      <div tw=" bg-red-200">4</div>
      <div tw="h-24 bg-red-200">5</div>
      <div tw="">6</div>
      <div tw="h-24 bg-red-200">7</div>
      <div tw="h-24 bg-red-200">8</div>
      <div tw="h-24 bg-red-200">9</div>
      <div tw="h-24 bg-red-200">10</div>
    </>
  );
};
const Workslist: FC<WorkslistProps> = ({}) => {
  console.log({ 배열들: chunk(items, 10) });
  return (
    <>
      <section tw="grid lg:(grid-cols-4) grid-flow-row-dense auto-cols-max max-w-[1600px] px-[50px] mx-auto gap-y-[50px] gap-x-[20px] mt-20 w-full overflow-hidden">
        {chunk(items, 10).map((chunkedWorks) =>
          chunkedWorks.map((work, index) => (
            <GridItem key={work.id} index={index}>
              <WorkItem index={index} {...work} />
            </GridItem>
          ))
        )}
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
