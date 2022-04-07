import React, { FC } from "react";
import Link from "next/link";
import "twin.macro";
import Logo from "../Common/Logo/Logo";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import InOutTransitionContainer from "./TransitionContainer";
interface HeaderProps {}
const links = ["work", "about", "news", "contact", "history"];
const LinkItem = styled.li(({ isActive }: { isActive: boolean }) => [
  tw`cursor-pointer last:mr-0 mr-8 leading-loose text-gray`,
  tw`hover:text-antller-black`,
  isActive && tw`text-black`,
]);

const Header: FC<HeaderProps> = () => {
  const router = useRouter();
  const path = router.pathname.substring(1);
  return (
    <motion.header tw="absolute top-0 left-0  right-0 z-[4] mx-auto  bg-transparent ">
      <div tw="h-[90px] mx-auto  flex justify-between items-center max-w-content md:px-content w-full">
        <Link href={"/"}>
          <a>
            <Logo />
          </a>
        </Link>

        <nav>
          <InOutTransitionContainer>
            <ul tw="font-semibold flex tracking-wide">
              {links.map((link) => (
                <LinkItem isActive={path === link}>
                  <Link href={`/${link}`}>
                    <a tw="uppercase">{link}</a>
                  </Link>
                </LinkItem>
              ))}
            </ul>
          </InOutTransitionContainer>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
