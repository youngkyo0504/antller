import React, { FC } from "react";
import "twin.macro";
import Logo from "../../Common/Logo/Logo";
import tw from "twin.macro";
import { motion } from "framer-motion";
import useStickyHeader from "./useStickyHeader";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import Hamburger from "./Hamburger";
import useHomePath from "src/hooks/useHomePath";
import LinkItems from "./LinkItems";

interface HeaderProps {
  stickyHeaderThreshold?: number;
  stickyHeaderEnable?: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = tw.nav`sm:(px-content h-[76px]) h-[3.75rem] mx-auto  flex justify-between items-center max-w-content pl-5 w-full`;

const StickyHeader: FC<HeaderProps> = ({
  stickyHeaderThreshold,
  stickyHeaderEnable = true,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { isHome, path } = useHomePath();
  const { isBgBlack } = useDarkBgContext();
  const { scrollDirection, scrollY, headerVariants } = useStickyHeader(
    stickyHeaderThreshold
  );

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
        <Container>
          <Logo {...{ isMobileMenuOpen }} />
          <Hamburger
            {...{
              isMobileMenuOpen,
              setIsMobileMenuOpen,
              isStickyHeader: true,
            }}
          />
          <LinkItems {...{ isHome, path, isSticky: true }} />
        </Container>
      </motion.header>
    </>
  ) : (
    <></>
  );
};

export default StickyHeader;
