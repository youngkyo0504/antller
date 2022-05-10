import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import "twin.macro";
import tw from "twin.macro";
import Icon from "./Icon";
interface LogoProps {}
const line: Variants = {
  hidden: { pathLength: 0, opacity: 0, fill: "rgba(0, 0, 0, 0)" },
  animate: {
    pathLength: 1,
    opacity: 1,
    fill: "rgba(0, 0, 0, 0)",

    transition: {
      delay: 0.5,
      duration: 2,
      ease: "easeInOut",
      pathOffset: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.3 },
    },
  },
};

const Logo: FC<LogoProps> = () => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  const isHome = path === "";
  const { isBgBlack } = useDarkBgContext();
  return (
    <svg
      css={[
        tw` h-7 md:h-9 transition ease-in`,
        !isHome && isBgBlack && tw`fill-[white] stroke-[white]`,
      ]}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 291.78 97.92"
    >
      <g id="레이어_2" data-name="레이어 2">
        <g id="레이어_1-2" data-name="레이어 1">
          <path d="M34.92,76.82c-2.92,8.64-6.47,17.92-8.48,21.1H43.33a114.42,114.42,0,0,0,5.74-14.46A46.48,46.48,0,0,0,59.63,85v0H61l.81,0h0a46.48,46.48,0,0,0,10.56-1.58,114.42,114.42,0,0,0,5.74,14.46H95c-2-3.18-5.56-12.46-8.48-21.1a70,70,0,0,0,14.73-12h0C113.73,51.58,121.46,35,121.46,21.63a28,28,0,0,0-1-7.84C118.47,7,113.88,2.36,107.48.71,100.78-1,94,.44,87.91,5,76.43,13.45,69,31.56,68.09,53.4A78,78,0,0,0,68.84,69a24.88,24.88,0,0,1-8.1,1.44A25.34,25.34,0,0,1,52.62,69a78.13,78.13,0,0,0,.75-15.6C52.44,31.56,45,13.45,33.55,4.94,27.44.44,20.67-1,14,.71,7.58,2.36,3,7,1.05,13.79a28,28,0,0,0-1,7.84C0,35,7.73,51.58,20.19,64.79A70.28,70.28,0,0,0,34.92,76.82ZM82.86,54c.88-20.53,8-32.87,13.87-37.2a9,9,0,0,1,5.31-2,6.8,6.8,0,0,1,1.74.24c.84.22,1.79.65,2.42,2.85,2.18,7.58-3.09,23.4-15.68,36.74a58.82,58.82,0,0,1-7.63,6.84A73.3,73.3,0,0,1,82.86,54ZM15.26,17.88c.63-2.2,1.58-2.63,2.42-2.85a6.8,6.8,0,0,1,1.74-.24,9,9,0,0,1,5.31,2c5.85,4.33,13,16.67,13.87,37.2a70.49,70.49,0,0,1,0,7.43,59.48,59.48,0,0,1-7.63-6.84C18.35,41.28,13.08,25.46,15.26,17.88Z" />
          <path d="M162.18,37.41H149.35l-1.73,5.43H139L150.73,8.3h10.06l11.75,34.54H163.9ZM159.81,30l-4.05-12.68-4,12.68Z" />
          <path d="M199,27.69V42.84h-7.41V28.78c0-3.06-1.92-4.49-4.29-4.49-2.71,0-4.59,1.57-4.59,5.08V42.84h-7.4V18.17h7.4v2.32c1.33-1.83,3.8-3,7.06-3C194.7,17.48,199,21,199,27.69Z" />
          <path d="M213.41,25.27V34c0,2.12,1.82,2.31,5.08,2.12v6.71C208.82,43.82,206,40.91,206,34V25.27h-3.95v-7.1H206V13.48l7.4-2.22v6.91h5.08v7.1Z" />
          <path d="M222.69,6.82h7.4v36h-7.4Z" />
          <path d="M235.52,6.82h7.4v36h-7.4Z" />
          <path d="M260.89,36.92A6.4,6.4,0,0,0,265.62,35l5.92,3.41c-2.41,3.35-6.07,5.08-10.75,5.08-8.44,0-13.67-5.68-13.67-13a12.64,12.64,0,0,1,13.12-13c7.21,0,12.54,5.57,12.54,13a14.08,14.08,0,0,1-.3,3H255C255.9,36,258.17,36.92,260.89,36.92Zm4.54-9a5.56,5.56,0,0,0-10.61,0Z" />
          <path d="M291.78,17.67v8.39c-3.06-.49-7.4.74-7.4,5.63V42.84H277V18.17h7.4v4.39C285.37,19.25,288.67,17.67,291.78,17.67Z" />
          <path d="M149.84,57.65V92.19H142V57.65Z" />
          <path d="M179.2,77V92.19h-7.4V78.13c0-3.06-1.92-4.49-4.29-4.49-2.71,0-4.59,1.58-4.59,5.08V92.19h-7.4V67.52h7.4v2.32c1.33-1.82,3.8-3,7.06-3C175,66.83,179.2,70.38,179.2,77Z" />
          <path d="M183.06,79.86a13,13,0,0,1,24.23-6.71l-6.47,3.75A5.1,5.1,0,0,0,196,74.13a5.73,5.73,0,0,0,0,11.45,5.06,5.06,0,0,0,4.78-2.76l6.47,3.7a12.6,12.6,0,0,1-11.15,6.36A12.78,12.78,0,0,1,183.06,79.86Z" />
          <path d="M208.53,88.19a4.69,4.69,0,1,1,4.68,4.69A4.71,4.71,0,0,1,208.53,88.19Z" />
        </g>
      </g>
    </svg>
  );
  // <Image height={44} width={104.5} src={"/Antller_logotype.svg"} />;
};

export default Logo;

// logo
{
  /* <svg
className="h-16"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 202.52 163.28"
>
<g id="레이어_2" data-name="레이어 2">
  <g id="레이어_1-2" data-name="레이어 1">
    <path 
    d="M58.22,128.09c-4.86,14.4-10.79,29.88-14.13,35.19H72.25a190.12,190.12,0,0,0,9.56-24.12,76.59,76.59,0,0,0,17.62,2.63v.07l2,0,.32,0,1.35,0v0a76.59,76.59,0,0,0,17.62-2.63,190.12,190.12,0,0,0,9.56,24.12h28.16c-3.34-5.31-9.27-20.79-14.13-35.19A117.36,117.36,0,0,0,168.86,108h0c20.76-22,33.66-49.59,33.66-71.95A47,47,0,0,0,200.78,23c-3.24-11.31-10.9-19-21.56-21.81C168-1.71,156.76.73,146.57,8.25c-19.14,14.17-31.49,44.37-33,80.78a129.9,129.9,0,0,0,1.25,26,41.58,41.58,0,0,1-13.51,2.41A42.25,42.25,0,0,1,87.74,115,129.9,129.9,0,0,0,89,89c-1.55-36.42-13.9-66.62-33-80.8C45.75.73,34.46-1.71,23.3,1.18,12.64,3.94,5,11.68,1.74,23A47,47,0,0,0,0,36.07C0,58.43,12.9,86,33.66,108A117.3,117.3,0,0,0,58.22,128.09Zm79.93-38c1.48-34.24,13.39-54.81,23.13-62,3.1-2.29,6-3.41,8.87-3.41a12.06,12.06,0,0,1,2.89.39c1.4.38,3,1.09,4,4.77,3.64,12.64-5.14,39-26.14,61.25a98.35,98.35,0,0,1-12.71,11.4A120.94,120.94,0,0,1,138.15,90.09ZM25.45,29.81c1-3.67,2.63-4.38,4-4.75a11.74,11.74,0,0,1,2.9-.4c2.87,0,5.76,1.12,8.87,3.41,9.74,7.21,21.65,27.78,23.13,62a118,118,0,0,1-.07,12.37,98.35,98.35,0,0,1-12.71-11.4C30.59,68.82,21.81,42.46,25.45,29.81Z" />
  </g>
</g>
</svg> */
}
