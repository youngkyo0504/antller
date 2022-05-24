import tw from "twin.macro";
import React, { FC, useState } from "react";
import StickyHeader from "@components/Layouts/Header/StickyHeader";
import Header from "@components/Layouts/Header/Header";
import MobileHeader from "@components/Layouts/MobileHeader";
import { useToggleScroll } from "@hooks";

interface HeadersProps {
  stickyHeaderOption?: {
    stickyHeaderThreshold?: number;
    stickyHeaderEnable?: boolean;
  };
}

const Headers: FC<HeadersProps> = ({ stickyHeaderOption }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useToggleScroll(isMobileMenuOpen);

  return (
    <>
      <MobileHeader {...{ isMobileMenuOpen }} />
      <StickyHeader
        {...{
          stickyHeaderThreshold: stickyHeaderOption?.stickyHeaderThreshold,
          isMobileMenuOpen,
          setIsMobileMenuOpen,
        }}
      />
      <Header {...{ isMobileMenuOpen, setIsMobileMenuOpen }} />
    </>
  );
};

export default Headers;
