import tw, { css, styled } from "twin.macro";
import React, { FC } from "react";
import { items, workItem } from "src/datas/simple-work.data";
import PortfolioItem from "@components/WorkStore/Card";
import WorkItem from "./WorkItem";
import { chunk } from "src/util";

interface WorkslistProps {}

const GridItem = styled.div(({ index }: { index: number }) => [
  index === 0
    ? tw`col-span-2 row-span-2`
    : index % 5 === 0
    ? tw`col-span-2  col-start-3 row-span-2`
    : "",
]);

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
    </>
  );
};

export default Workslist;
