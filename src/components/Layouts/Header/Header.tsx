import React, { FC, useState } from "react";
import Link from "next/link";
import "twin.macro";
import Logo from "../../Common/Logo/Logo";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import InOutTransitionContainer from "../TransitionContainer";
import { links } from "./header.data";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import Hamburger from "./Hamburger";
import { LinkItem, NavBar } from "styles/globalStyleComponent";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isBgBlack } = useDarkBgContext();
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return (
    <>
      <motion.header tw="w-full absolute bg-transparent left-0  right-0 z-[30] mx-auto">
        <NavBar>
          <Link href={"/"}>
            <a tw="flex items-center cursor-pointer">
              <Logo />
            </a>
          </Link>
          <div>
            <InOutTransitionContainer>
              <Hamburger />
              <ul tw="hidden font-semibold md:flex tracking-wide">
                {links.map((link) => (
                  <LinkItem
                    isHome={path === ""}
                    key={link}
                    isBgBlack={isBgBlack}
                    isActive={path === link}
                  >
                    <Link href={`/${link}`}>
                      <a tw="uppercase p-4">{link}</a>
                    </Link>
                  </LinkItem>
                ))}
              </ul>
            </InOutTransitionContainer>
          </div>
        </NavBar>
      </motion.header>
    </>
  );
};

export default Header;
