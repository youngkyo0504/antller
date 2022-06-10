import tw from "twin.macro";
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { LinkItem } from "styles/globalStyleComponent";
import { links } from "./header.data";
import { itemVariants } from "./headervariants";
import { calcAxisDelta } from "framer-motion/types/projection/geometry/delta-calc";

interface MobileLinkItemsProps {
  isMobileMenuOpen: boolean;
  isHome: boolean;
  path: string;
}

const MobileLinkItems: FC<MobileLinkItemsProps> = ({
  isMobileMenuOpen,
  isHome,
  path,
}) => {
  const { isBgBlack } = useDarkBgContext();

  return (
    <div
      tw="absolute  top-[60px] flex flex-col justify-between  left-0 px-mo-content w-full font-semibold sm:hidden tracking-wide text-gray transition-colors"
      css={[isHome && tw`text-white`, `height: calc(100%-60px);`]}
    >
      <ul tw="mt-10">
        {links.map((link, index) => (
          <LinkItem key={link} isBgBlack={true} isActive={path === link}>
            <motion.div
              variants={itemVariants}
              tw="inline-block my-1"
              animate={isMobileMenuOpen ? "show" : "hide"}
              initial={false}
              custom={index}
            >
              <Link href={`/${link}`} scroll={false}>
                <a tw="tracking-wider text-lg uppercase cursor-pointer  sm:p-4">
                  {link}
                </a>
              </Link>
            </motion.div>
          </LinkItem>
        ))}
      </ul>
    </div>
  );
};

export default MobileLinkItems;
