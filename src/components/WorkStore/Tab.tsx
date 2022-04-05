import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";
import { workClassification } from "src/datas/simple-work.data";
import { TabId } from "@types";

const TabItem = styled.li(({ selected }: { selected: boolean }) => [
  tw`h-full py-3 px-6 relative cursor-pointer text-gray`,
  selected && tw`text-antller-black`,
]);
const TabUnderLine = tw(
  motion.div
)`absolute bottom-[-1px] left-0 right-0 h-[1px] bg-antller-black`;

interface TabProps {
  selectedTab: TabId;
  setSelectedTab: React.Dispatch<React.SetStateAction<TabId>>;
}

const Tab = ({ selectedTab, setSelectedTab }: TabProps) => {
  return (
    <ul tw="flex h-full">
      {workClassification.map((work) => (
        <TabItem
          key={work.id}
          onClick={() => setSelectedTab(work.id)}
          selected={work.id === selectedTab}
        >
          {work.name}
          {work.id === selectedTab ? (
            <TabUnderLine className="" layoutId="underline" />
          ) : null}
        </TabItem>
      ))}
    </ul>
  );
};
export default Tab;
