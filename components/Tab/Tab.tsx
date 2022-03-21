import { FC } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./ingredients";

interface TabProps {}

const Tab: FC<TabProps> = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="window">
      <nav>
        <ul className="flex gap-4">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={`${item === selectedTab ? "selected" : ""} relative`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  className="underline absolute left-0 right-0 border-blue-400 border-b h-1 "
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="text-center mt-6"
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Tab;
