import tw from "twin.macro";
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { LinkItem } from "styles/globalStyleComponent";
import { links } from "./header.data";
import { itemVariants } from "./headervariants";

interface LinkItemsProps {
  isMobileMenuOpen: boolean;
  isHome: boolean;
  path: string;
}

const MobileLinkItems: FC<LinkItemsProps> = ({
  isMobileMenuOpen,
  isHome,
  path,
}) => {
  const { isBgBlack } = useDarkBgContext();

  return (
    <ul
      tw=" font-semibold sm:hidden tracking-wide text-gray transition-colors"
      css={[
        // isMobileMenuOpen ? tw`` : tw`visibility[hidden]`,
        { transitionDuration: "1000ms" },
        isHome && (isBgBlack ? tw`text-white` : tw`text-antller-black`),
      ]}
    >
      {links.map((link, index) => (
        <LinkItem
          isHome={isHome}
          key={link}
          isBgBlack={isBgBlack}
          isActive={path === link}
        >
          <motion.div
            variants={itemVariants}
            tw="hidden"
            animate={isMobileMenuOpen ? "show" : "hide"}
            initial={false}
            custom={index}
          >
            <Link href={`/${link}`}>
              <a tw="uppercase cursor-pointer py-2  sm:p-4">{link}</a>
            </Link>
          </motion.div>
        </LinkItem>
      ))}
    </ul>
  );
};

export default MobileLinkItems;
