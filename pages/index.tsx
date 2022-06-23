import tw from "twin.macro";
import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import type { NextPage } from "next";
import Head from "next/head";
import WorksList from "@components/Workslist";
import HomeSlider from "@components/HomeImageSlider/HomeSlider";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

const seoconfig = {
  canonical: "https://www.antller.com/",
};

const Home: NextPage = () => {
  const { isBgBlack } = useDarkBgContext();

  useEffect(() => {
    document.body.style.background = "white";

    return () => {
      if (isBgBlack) {
        document.body.style.backgroundColor = "black";
      }
    };
  }, [isBgBlack]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo {...seoconfig} />
      <Layout stickyHeaderOption={{ stickyHeaderThreshold: 1400 }}>
        <InOutTransitionContainer>
          <HomeSlider />
          <WorksList />
        </InOutTransitionContainer>
      </Layout>
    </>
  );
};

export default Home;
