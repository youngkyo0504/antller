import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import "twin.macro";
import Logo from "../../Common/Logo/Logo";
import tw from "twin.macro";
import { motion } from "framer-motion";
import InOutTransitionContainer from "../TransitionContainer";
import { links } from "./header.data";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import Hamburger from "./Hamburger";
import { LinkItem, NavBar } from "styles/globalStyleComponent";
import useHomePath from "src/hooks/useHomePath";
import { itemVariants, wrapperVariants } from "./headervariants";
import useIsMobile from "src/hooks/useIsMobile";
import { useToggleScroll } from "@hooks";
import MobileLinkItems from "./LinkItems";
import LinkItems from "./MobileLinkItems";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile] = useIsMobile();
  const { isBgBlack } = useDarkBgContext();
  const { isHome, path } = useHomePath();
  useToggleScroll(isMobileMenuOpen);

  return (
    <>
      {" "}
      <motion.header
        variants={wrapperVariants}
        animate={isMobile && (isMobileMenuOpen ? "show" : "hide")}
        initial="initial"
        tw="w-full absolute bg-transparent h-[3.75rem] left-0  right-0 z-[30] mx-auto "
      >
        <NavBar>
          <Logo />
          {/* <MobileNavbar key={"stickyMobileNav"} {...{ isMobileMenuOpen }} /> */}
          {/* <div> */}
          <InOutTransitionContainer>
            <Hamburger
              {...{
                isMobileMenuOpen,
                setIsMobileMenuOpen,
                isStickyHeader: false,
              }}
            />
            <LinkItems {...{ isHome, path, isMobileMenuOpen }} />
            <MobileLinkItems {...{ isHome, path }} />
          </InOutTransitionContainer>
          {/* </div> */}
        </NavBar>
      </motion.header>
    </>
  );
};

export default Header;
