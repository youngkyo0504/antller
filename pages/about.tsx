import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import HistoryGraph from "@components/HistoryGraph/HistoryGraph";
import Introduction from "@components/Introduction";
import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import Partners from "@components/Partners";
import People from "@components/People";
import { useColorScheme } from "@hooks";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const AboutPage: NextPage = () => {
  const { setIsBgBlack } = useDarkBgContext(true);
  useColorScheme();

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout stickyHeaderOption={{}}>
        <InOutTransitionContainer>
          <div tw="bg-black">
            <Introduction />
            <People />
            <HistoryGraph />
            <Partners />
          </div>
        </InOutTransitionContainer>
      </Layout>
    </>
  );
};

export default AboutPage;
