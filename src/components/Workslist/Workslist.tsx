import tw, { css, styled } from "twin.macro";
import React, { FC } from "react";
import { items, workItem } from "src/datas/simple-work.data";
import WorkItem from "./WorkItem";
import { chunk } from "src/util";

interface worksListProps {}

const GridItem = styled.li(({ index }: { index: number }) => [
  index === 0
    ? tw`lg:(col-span-2 row-span-2)`
    : index % 5 === 0
    ? tw`lg:(col-span-2  col-start-3 row-span-2)`
    : "",
]);
const Title = tw.h2`text-antller-black  text-3xl max-w-[100rem] mx-auto   sm:text-4xl md:( text-5xl) font-bold `;
const WorkGrid = tw.ul`grid lg:(grid-cols-4   )  //
sm:grid-cols-2
 grid-cols-1  grid-flow-row-dense auto-cols-max max-w-[100rem] mx-auto gap-y-[2.2rem] lg:gap-y-[3.125rem] gap-x-[1.25rem] w-full overflow-hidden`;

const WorksList: FC<worksListProps> = ({}) => {
  return (
    <section tw="relative z-index[1] bg-white px-mo-content sm:px-content mt-10 lg:(px-[3.125rem] mt-16)">
      <div tw="mb-10 lg:mb-16 ">
        <Title>Work</Title>
      </div>
      <WorkGrid>
        {/** 10개씩 끊습니다. 1번째와 10번째의 사이즈를 4배로 하기 위해서. */}
        {chunk(items, 10).map((chunkedWorks) =>
          chunkedWorks.map((work, index) => (
            <GridItem key={work.id} index={index}>
              <WorkItem isHome={true} index={index} {...work} />
            </GridItem>
          ))
        )}
      </WorkGrid>
    </section>
  );
};

export default WorksList;
