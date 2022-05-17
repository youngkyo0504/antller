import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { useRouter } from "next/router";
import { FC } from "react";
import tw, { styled } from "twin.macro";

const SocialLink = styled.li(({ isBgBlack }: { isBgBlack: boolean }) => [
  tw`cursor-pointer last:mr-0  mr-4 leading-loose text-gray`,
  isBgBlack ? tw`hover:text-white` : tw`hover:text-antller-black`,
]);

const Footer: FC = ({ children }) => {
  const { isBgBlack } = useDarkBgContext();
  const path = useRouter().pathname.split("/")[1];
  const isHome = path === "";
  return (
    <>
      <footer
        css={[isHome ? tw`sm:max-w-[1600px]` : ""]}
        tw="text-gray max-w-content w-full sm:(text-lg px-content) px-mo-content mx-auto flex flex-col pt-4 pb-6 mt-24 relative z-index[1] mb-4"
      >
        <div tw="flex justify-between">
          <div>© Antller</div>
          <ul tw="flex">
            {/* <SocialLink isBgBlack={!isHome && isBgBlack}>Instagram</SocialLink> */}
            {/* <SocialLink isBgBlack={!isHome && isBgBlack}>Twitter</SocialLink> */}
            {/* <SocialLink isBgBlack={!isHome && isBgBlack}>Facebook</SocialLink> */}
          </ul>
        </div>
        <a
          target={"#"}
          href="http://newso.co.kr"
          css={[
            !isHome && isBgBlack
              ? tw`hover:text-white`
              : tw`hover:text-antller-black`,
          ]}
          tw="mt-2 cursor-pointer"
        >
          Subscribe to our Newsletter
        </a>
      </footer>
    </>
  );
};
export default Footer;
