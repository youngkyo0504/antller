import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";
import Layout from "../src/components/Layouts/Layout";
import { createContext, useState } from "react";
import { DarkBgProvider } from "@components/DarkBgProvider/DarkBgProvider";

function MyApp({ Component, pageProps, router }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <GlobalStyles />
      <DarkBgProvider>
        <AnimatePresence exitBeforeEnter>
          <AnyComponent key={router.route} {...pageProps} />
        </AnimatePresence>
      </DarkBgProvider>
    </>
  );
}

export default MyApp;
