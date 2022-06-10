import { Global, css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css({
  body: {
    transition: ["background-color", "ease-in", "0.3s"],
    ...tw`transition-colors ease-in text-antller-black font-sans`,
  },
});
const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
