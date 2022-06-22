import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { DarkBgProvider } from "@components/contexts/DarkBgContext/DarkBgProvider";
import { DefaultSeo } from "next-seo";
import SeoConfig from "../next-seo.config";

function MyApp({ Component, pageProps, router }: AppProps) {
  const AnyComponent = Component as any;
  const PageComponent = () => {
    // 로드되면 맨 위로 스크롤
    useEffect(() => {
      scrollTo(0, 0);
    }, []);
    return <AnyComponent key={router.route} {...pageProps}></AnyComponent>;
  };

  return (
    <>
      <DefaultSeo {...SeoConfig} />
      <GlobalStyles />
      <DarkBgProvider>
        <AnimatePresence exitBeforeEnter>
          <PageComponent key={router.route} {...pageProps} />
        </AnimatePresence>
      </DarkBgProvider>
    </>
  );
}

export default MyApp;
