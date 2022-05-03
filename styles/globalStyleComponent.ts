import tw, { styled } from "twin.macro";

// NavigationBar
export const LinkItem = styled.li(
  ({ isActive, isBgBlack }: { isBgBlack?: boolean; isActive: boolean }) => [
    tw`cursor-pointer last:mr-0  leading-loose text-gray`,
    isBgBlack ? tw`hover:text-white` : tw`hover:text-antller-black`,
    isActive && (isBgBlack ? tw`text-white` : tw`text-black`),
  ]
);

export const NavBar = tw.nav`md:(mt-6 px-content) mx-auto  flex justify-between items-center max-w-content pl-5 w-full`;
