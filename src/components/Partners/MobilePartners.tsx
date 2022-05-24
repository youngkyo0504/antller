/* eslint-disable @next/next/no-img-element */
import tw from "twin.macro";
import React, { FC, useEffect, useRef } from "react";
import Logos from "./logo.json";

interface MobilePartnersProps {}

const MobilePartners: FC<MobilePartnersProps> = ({}) => {
  return (
    <div tw="sm:hidden transform-origin[0 0] inline-block whitespace-nowrap will-change[transform] min-w-max  animation-name[loop] animation-timing-function[linear] animation-delay[0s] animation-duration[15s] animation-iteration-count[infinite]  ">
      <MovingLogoList />
      <MovingLogoList />
    </div>
  );
};

const MovingLogoList: FC = ({}) => {
  return (
    <div tw="min-w-[500px] inline-block whitespace-nowrap   user-select[none] pointer-events[none] ">
      {Logos.map((logo) => (
        <div tw="inline-block mx-5  overflow-hidden" key={logo.name}>
          <img
            tw="invert select-none inline-block h-6"
            draggable={false}
            alt={logo.name}
            src={`/images/partnerLogo/${logo.src}`}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default MobilePartners;
