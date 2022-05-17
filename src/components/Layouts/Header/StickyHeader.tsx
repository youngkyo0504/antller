import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import "twin.macro";
import Logo from "../../Common/Logo/Logo";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { links } from "./header.data";
import useStickyHeader from "./useStickyHeader";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import Hamburger from "./Hamburger";
import { LinkItem } from "styles/globalStyleComponent";
import useHomePath from "src/hooks/useHomePath";
import MobileNavbar from "./MobileNavbar";

interface HeaderProps {
  stickyHeaderThreshold?: number;
  stickyHeaderEnable?: boolean;
}

const Container = tw.nav`md:(px-content h-[70px] )  mx-auto  flex justify-between items-center max-w-content pl-5 w-full`;

const StickyHeader: FC<HeaderProps> = ({
  stickyHeaderThreshold,
  stickyHeaderEnable = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isHome, path } = useHomePath();
  const { isBgBlack } = useDarkBgContext();
  const { scrollDirection, scrollY, headerVariants } = useStickyHeader(
    stickyHeaderThreshold
  );
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isMobileMenuOpen]);
  return stickyHeaderEnable ? (
    <>
      <motion.header
        key={"stickyheader"}
        variants={headerVariants}
        custom={{ direction: scrollDirection, scrollY }}
        animate={"scroll"}
        initial="initial"
        css={[
          tw`fixed  bg-[rgba(255,255,255,.97)] left-0  right-0 z-[4] mx-auto`,
          !isHome && isBgBlack && tw`bg-[rgba(0,0,0,0.8)]`,
        ]}
      >
        <MobileNavbar key={"stickyMobileNav"} {...{ isMobileMenuOpen }} />
        <Container>
          <Logo />
          <nav>
            <Hamburger {...{ isMobileMenuOpen, setIsMobileMenuOpen }} />
            <ul
              tw="hidden  font-semibold md:flex tracking-wide text-gray"
              css={[isHome ? tw`text-antller-black` : ""]}
            >
              {links.map((link) => (
                <LinkItem
                  isHome={isHome}
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
    </>
  ) : (
    <></>
  );
};

export default StickyHeader;
