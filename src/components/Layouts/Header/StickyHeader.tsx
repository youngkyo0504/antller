import React, { FC } from "react";
import Link from "next/link";
import "twin.macro";
import Logo from "../../Common/Logo/Logo";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";
import InOutTransitionContainer from "../TransitionContainer";
import { links } from "./header.data";
import useHeader from "./useStickyHeader";
import { ScrollDirection } from "./header.type";

interface HeaderProps {
  stickyHeaderThreshold?: number;
}
const getStickyHeaderVariants: (stickyHeaderThreshold?: number) => Variants = (
  stickyHeaderThreshold = 300
) => {
  return {
    initial: {
      y: -100,
    },
    scroll: ({
      direction,
      scrollY,
    }: {
      direction: ScrollDirection;
      scrollY: number;
    }) => {
      return {
        position: "fixed",
        y: direction === "up" && scrollY > stickyHeaderThreshold ? 0 : -100,
        backgroundColor: "rgba(255,255,255,.97)",
        transition: {
          type: "tween",
          duration: 0.4,
          ease: "easeOut",
        },
      };
    },
  };
};
const LinkItem = styled.li(({ isActive }: { isActive: boolean }) => [
  tw`cursor-pointer last:mr-0 mr-8 leading-loose text-gray`,
  tw`hover:text-antller-black`,
  isActive && tw`text-black`,
]);

const StickyHeader: FC<HeaderProps> = ({ stickyHeaderThreshold }) => {
  const { scrollDirection, scrollY } = useHeader(stickyHeaderThreshold);
  const headerVariants: Variants = getStickyHeaderVariants(
    stickyHeaderThreshold
  );

  console.log(headerVariants);
  const router = useRouter();
  const path = router.pathname.substring(1);
  return (
    <motion.header
      variants={headerVariants}
      custom={{ direction: scrollDirection, scrollY }}
      animate={"scroll"}
      initial="initial"
      tw="fixed  bg-[rgba(255,255,255,.97)] left-0  right-0 z-[4] mx-auto"
    >
      <div tw="h-[70px] mx-auto  flex justify-between items-center max-w-content md:px-content w-full">
        <Link href={"/"}>
          <a tw="flex items-center cursor-pointer">
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

export default StickyHeader;
