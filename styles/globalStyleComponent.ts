import tw, { styled } from "twin.macro";
// common
export const Container = tw.div`sm:mt-header mt-mo-header`;
export const ContentContainer = tw.div`max-w-content sm:px-content mx-auto w-full px-mo-content`;
// NavigationBar
export const LinkItem = styled.li(
  ({
    isActive,
    isBgBlack,
    isHome = false,
  }: {
    isBgBlack?: boolean;
    isActive: boolean;
    isHome?: boolean;
  }) => [
    tw`last:mr-0  leading-loose `,
    !isHome &&
      (isBgBlack ? tw`hover:text-white` : tw`hover:text-antller-black`),
    isActive && (isBgBlack ? tw`text-white` : tw`text-black`),
  ]
);

export const NavBar = tw.nav`h-full sm:h-auto sm:(mt-6 px-content) mx-auto   sm:(flex justify-between items-center) max-w-content pl-mo-content w-full `;

// about Page
export const AboutSubTitle = tw.h2`  font-bold tracking-wide text-white md:text-4xl lg:text-5xl sm:text-3xl text-2xl `;
export const SubTitleDescription = tw.p`md:mt-4 mt-1 text-base sm:text-lg  md:text-xl text-[#999]`;
