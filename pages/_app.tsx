import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";
import Layout from "../src/components/Layouts/Layout";
import { createContext, useEffect, useState } from "react";
import { DarkBgProvider } from "@components/contexts/DarkBgContext/DarkBgProvider";

function MyApp({ Component, pageProps, router }: AppProps) {
  const AnyComponent = Component as any;
  const AyComponent = () => {
    useEffect(() => {
      scrollTo(0, 0);
    }, []);
    return <AnyComponent key={router.route} {...pageProps}></AnyComponent>;
  };

  return (
    <>
      <GlobalStyles />
      <DarkBgProvider>
        <AnimatePresence exitBeforeEnter>
          <AyComponent key={router.route} {...pageProps} />
        </AnimatePresence>
      </DarkBgProvider>
    </>
  );
}

export default MyApp;
