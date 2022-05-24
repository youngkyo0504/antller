import tw from "twin.macro";
import React, { FC, useEffect, useState } from "react";
import MobileLinkItems from "@components/Layouts/Header/MobileLinkItems";
import useHomePath from "src/hooks/useHomePath";
import { motion } from "framer-motion";
import { MobileHeaderVariants } from "./MobileHeaderVariants";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import Footer from "@components/Layouts/Footer";

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
}

const MobileHeader: FC<MobileHeaderProps> = ({ isMobileMenuOpen }) => {
  const { isHome, path } = useHomePath();
  const [isHide, setIsHide] = useState(true);

  useEffect(() => {
    if (isMobileMenuOpen) setIsHide(false);
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      variants={MobileHeaderVariants}
      animate={isMobileMenuOpen ? "show" : "hide"}
      onAnimationComplete={(definition) => {
        if (definition === "hide") {
          setIsHide(true);
        }
      }}
      tw="fixed z-index[30] inset-0 h-full w-full"
      css={[
        isMobileMenuOpen ? tw`block opacity-100` : tw` opacity-0`,
        isHide && tw`hidden`,
      ]}
    >
      <div tw="h-full flex flex-col justify-between ">
        <nav>
          <MobileLinkItems {...{ isMobileMenuOpen, isHome, path }} />
        </nav>
        <Footer />
      </div>
    </motion.header>
  );
};

export default MobileHeader;
