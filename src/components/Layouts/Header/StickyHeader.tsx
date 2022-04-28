import React, { FC } from "react";
import Link from "next/link";
import "twin.macro";
import Logo from "../../Common/Logo/Logo";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";
import { links } from "./header.data";
import useStickyHeader from "./useStickyHeader";
import useDarkBgContext from "@components/DarkBgProvider/useDarkBgContext";

interface HeaderProps {
  stickyHeaderThreshold?: number;
  stickyHeaderEnable?: boolean;
}

const LinkItem = styled.li(
  ({ isActive, isBgBlack }: { isBgBlack?: boolean; isActive: boolean }) => [
    tw`cursor-pointer last:mr-0  leading-loose text-gray`,
    isBgBlack ? tw`hover:text-white` : tw`hover:text-antller-black`,
    isActive && (isBgBlack ? tw`text-white` : tw`text-black`),
  ]
);

const Container = tw.div`h-[70px] mx-auto  flex justify-between items-center max-w-content md:px-content w-full`;

const StickyHeader: FC<HeaderProps> = ({
  stickyHeaderThreshold,
  stickyHeaderEnable = true,
}) => {
  const { isBgBlack } = useDarkBgContext();
  const { scrollDirection, scrollY, headerVariants } = useStickyHeader(
    stickyHeaderThreshold
  );
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return stickyHeaderEnable ? (
    <motion.header
      key={"stickyheader"}
      variants={headerVariants}
      custom={{ direction: scrollDirection, scrollY }}
      animate={"scroll"}
      initial="initial"
      css={[
        tw`fixed  bg-[rgba(255,255,255,.97)] left-0  right-0 z-[4] mx-auto`,
        isBgBlack && tw`bg-[rgba(0,0,0,0.8)]`,
      ]}
    >
      <Container>
        <Link href={"/"}>
          <a tw=" flex items-center cursor-pointer">
            <Logo />
          </a>
        </Link>
        <nav>
          <ul tw="font-semibold flex tracking-wide">
            {links.map((link) => (
              <LinkItem
                isBgBlack={isBgBlack}
                isActive={path === link}
                key={"sticky" + link}
              >
                <Link href={`/${link}`}>
                  <a tw=" p-4 uppercase">{link}</a>
                </Link>
              </LinkItem>
            ))}
          </ul>
        </nav>
      </Container>
    </motion.header>
  ) : (
    <></>
  );
};

export default StickyHeader;
