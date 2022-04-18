import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";
import Layout from "../src/components/Layouts/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <AnyComponent key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
