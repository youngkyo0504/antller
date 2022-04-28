import useDarkBgContext from "@components/DarkBgProvider/useDarkBgContext";
import { FC } from "react";
import tw, { styled } from "twin.macro";

const SocialLink = styled.li(({ isBgBlack }: { isBgBlack: boolean }) => [
  tw`cursor-pointer last:mr-0  mr-4 leading-loose text-gray`,
  isBgBlack ? tw`hover:text-white` : tw`hover:text-antller-black`,
]);

const Footer: FC = ({ children }) => {
  const { isBgBlack } = useDarkBgContext();
  return (
    <>
      <footer tw="text-gray max-w-content w-full text-lg mx-auto px-content flex flex-col pt-4 pb-6 mt-24 relative z-index[1] mb-4">
        <div tw="flex justify-between">
          <div>© Antller</div>
          <ul tw="flex">
            <SocialLink isBgBlack={isBgBlack}>Instagram</SocialLink>
            <SocialLink isBgBlack={isBgBlack}>Twitter</SocialLink>
            <SocialLink isBgBlack={isBgBlack}>Facebook</SocialLink>
          </ul>
        </div>
        <div
          css={[
            isBgBlack ? tw`hover:text-white` : tw`hover:text-antller-black`,
          ]}
          tw="mt-2 cursor-pointer"
        >
          Subscribe to our Newsletter
        </div>
      </footer>
    </>
  );
};
export default Footer;
