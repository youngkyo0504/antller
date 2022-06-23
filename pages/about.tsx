import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import HistoryGraph from "@components/HistoryGraph/HistoryGraph";
import Introduction from "@components/Introduction";
import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import Partners from "@components/Partners";
import People from "@components/People";
import { useColorScheme } from "@hooks";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";

const seoConfig = { title: "About" };

const AboutPage: NextPage = () => {
  useDarkBgContext(true);
  useColorScheme();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo {...seoConfig} />
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
