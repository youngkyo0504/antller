import React, { FC } from "react";
import "twin.macro";
import Logo from "../../Common/Logo/Logo";
import tw from "twin.macro";
import { motion } from "framer-motion";
import InOutTransitionContainer from "../TransitionContainer";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import Hamburger from "./Hamburger";
import { NavBar } from "styles/globalStyleComponent";
import useHomePath from "src/hooks/useHomePath";
import useIsMobile from "src/hooks/useIsMobile";
import LinkItems from "./LinkItems";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isMobile] = useIsMobile();
  const { isBgBlack } = useDarkBgContext();
  const { isHome, path } = useHomePath();

  return (
    <>
      {" "}
      <header tw="w-full absolute bg-transparent h-[3.75rem] overflow-y-hidden left-0  right-0 z-[30] mx-auto ">
        <NavBar>
          <Logo {...{ isMobileMenuOpen }} />
          <InOutTransitionContainer>
            <Hamburger
              {...{
                isMobileMenuOpen,
                setIsMobileMenuOpen,
                isStickyHeader: false,
              }}
            />
            <LinkItems {...{ isHome, path, isMobileMenuOpen }} />
          </InOutTransitionContainer>
        </NavBar>
      </header>
    </>
  );
};

export default Header;
