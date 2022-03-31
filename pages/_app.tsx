import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layouts/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
