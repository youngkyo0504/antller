import tw from "twin.macro";
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { LinkItem, SLIDER_DURATION } from "styles/globalStyleComponent";
import { links } from "./header.data";

interface MobileLinkItemsProps {
  isHome: boolean;
  path: string;
  isSticky?: boolean;
}

const LinkItems: FC<MobileLinkItemsProps> = ({
  isHome,
  path,
  isSticky = false,
}) => {
  const { isBgBlack } = useDarkBgContext();

  return (
    <ul
      tw=" font-semibold hidden sm:flex tracking-wide text-gray transition-colors"
      css={[
        { transitionDuration: `${SLIDER_DURATION * 1000}ms` },
        isHome && (isBgBlack ? tw`text-white` : tw`text-antller-black`),
        isHome && isSticky && tw`text-antller-black`,
      ]}
    >
      {links.map((link, index) => (
        <LinkItem
          isHome={isHome}
          key={link}
          isBgBlack={isBgBlack}
          isActive={path === link}
        >
          <div>
            <Link passHref scroll={false} href={`/${link}`}>
              <a tw="uppercase cursor-pointer py-2  sm:p-4">{link}</a>
            </Link>
          </div>
        </LinkItem>
      ))}
    </ul>
  );
};

export default LinkItems;
