import React, { FC } from "react";
import Link from "next/link";
import "twin.macro";
import Logo from "../../Common/Logo/Logo";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import InOutTransitionContainer from "../TransitionContainer";
import { links } from "./header.data";
interface HeaderProps {
  isWhiteLogo?: boolean;
}

const LinkItem = styled.li(
  ({ isActive, isWhiteLogo }: { isWhiteLogo?: boolean; isActive: boolean }) => [
    tw`cursor-pointer last:mr-0  leading-loose text-gray`,
    isWhiteLogo ? tw`hover:text-white` : tw`hover:text-antller-black`,
    isActive && (isWhiteLogo ? tw`text-white` : tw`text-black`),
  ]
);

const Header: FC<HeaderProps> = ({ isWhiteLogo }) => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  return (
    <>
      <motion.header tw=" absolute bg-transparent left-0  right-0 z-[4] mx-auto">
        <div tw="mt-6 mx-auto  flex justify-between items-center max-w-content md:px-content w-full">
          <Link href={"/"}>
            <a tw="flex items-center cursor-pointer">
              <Logo isLogoWhite={isWhiteLogo} />
            </a>
          </Link>
          <nav>
            <InOutTransitionContainer>
              <ul tw="font-semibold flex tracking-wide">
                {links.map((link) => (
                  <LinkItem
                    key={link}
                    isWhiteLogo={isWhiteLogo}
                    isActive={path === link}
                  >
                    <Link href={`/${link}`}>
                      <a tw="uppercase p-4">{link}</a>
                    </Link>
                  </LinkItem>
                ))}
              </ul>
            </InOutTransitionContainer>
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
