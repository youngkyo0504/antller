import { motion } from "framer-motion";
import tw, { css, styled } from "twin.macro";
import { workClassification } from "src/datas/simple-work.data";
import { TabId } from "@types";
import { useEffect, useRef } from "react";

const TabItem = styled.li(({ selected }: { selected: boolean }) => [
  tw` relative cursor-pointer text-gray whitespace-nowrap inline-flex items-center   border-b-divider border-b h-[40px] first-of-type:pl-0 px-4`,
  selected && tw`text-antller-black`,
]);

const TabUnderLine = tw(
  motion.div
)`absolute bottom-[-1px] left-0 right-0 min-h-[1.5px] bg-antller-black z-10`;

interface TabProps {
  selectedTab: TabId;
  setSelectedTab: React.Dispatch<React.SetStateAction<TabId>>;
}

const scrollbarNoneStyle = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = ({ selectedTab, setSelectedTab }: TabProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // scrollRef?.current?.scroll(1000, 0);
    if (scrollRef.current) {
      scrollRef.current.scroll(100, 0);
    }
    return () => {};
  }, []);

  useEffect(() => {
    const LEFTMARGIN = 50;
    const selectedTabElement = document.querySelector<HTMLLIElement>(
      `[data-id=${selectedTab}]`
    );

    if (scrollRef.current && selectedTabElement) {
      scrollRef.current.scroll(selectedTabElement?.offsetLeft - LEFTMARGIN, 0);
    }
  }, [selectedTab]);

  return (
    <div
      ref={scrollRef}
      css={scrollbarNoneStyle}
      className="scroll-smooth"
      tw=" overflow-scroll overflow-x-auto overflow-y-hidden"
    >
      <ul
        css={scrollbarNoneStyle}
        tw=" border-b-divider box-content  border-b ml-mo-content sm:mx-content whitespace-nowrap sm:(flex justify-center) h-[39px] "
      >
        {workClassification.map((work) => (
          <TabItem
            data-id={work.id}
            key={work.id}
            selected={work.id === selectedTab}
          >
            <div
              tw=" relative h-full inline-flex items-center"
              key={work.id}
              onClick={() => setSelectedTab(work.id)}
            >
              {work.name}
              {work.id === selectedTab ? (
                <TabUnderLine className="" layoutId="underline" />
              ) : null}
            </div>
          </TabItem>
        ))}
      </ul>
    </div>
  );
};
export default Tab;
