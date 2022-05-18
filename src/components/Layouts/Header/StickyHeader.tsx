import React, { FC, useEffect, useState } from "react";
import "twin.macro";
import Logo from "../../Common/Logo/Logo";
import tw from "twin.macro";
import { motion } from "framer-motion";
import useStickyHeader from "./useStickyHeader";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import Hamburger from "./Hamburger";
import useHomePath from "src/hooks/useHomePath";
import MobileNavbar from "./MobileNavbar";
import MobileLinkItems from "./LinkItems";
import { useToggleScroll } from "@hooks";

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
  useToggleScroll(isMobileMenuOpen);
  // useEffect(() => {
  //   if (!isMobileMenuOpen) return;
  //   document.body.style.overflowY = "hidden";
  //   return () => {
  //     document.body.style.overflowY = "";
  //   };
  // }, [isMobileMenuOpen]);
  return stickyHeaderEnable ? (
    <>
      <motion.header
        key={"stickyheader"}
        variants={headerVariants}
        custom={{ direction: scrollDirection, scrollY }}
        animate={"scroll"}
        initial="initial"
        css={[
          tw`fixed  bg-[rgba(255,255,255,.97)] left-0  right-0 z-[30] mx-auto`,
          !isHome && isBgBlack && tw`bg-[rgba(0,0,0,0.8)]  overflow-hidden`,
        ]}
      >
        {/* <MobileNavbar key={"stickyMobileNav"} {...{ isMobileMenuOpen }} /> */}
        <Container>
          <Logo />
          <Hamburger
            {...{
              isMobileMenuOpen,
              setIsMobileMenuOpen,
              isStickyHeader: true,
            }}
          />
          <MobileLinkItems {...{ isHome, path }} />
          {/* <ul
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
            </ul> */}
        </Container>
      </motion.header>
    </>
  ) : (
    <></>
  );
};

export default StickyHeader;
