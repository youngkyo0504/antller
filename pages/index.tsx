import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import type { NextPage } from "next";
import Head from "next/head";
import tw from "twin.macro";
import WorksList from "@components/Workslist";
import ImageSlider from "@components/HomeImageSlider";
import { useEffect } from "react";
import { SliderInfoProvider } from "@components/contexts/SliderContext/SliderInfoProvider";
import NewImageSlider from "@components/HomeImageSlider/NewImageSlider";
import HomeSlider from "@components/HomeImageSlider/HomeSlider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Antller</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout stickyHeaderOption={{ stickyHeaderThreshold: 1400 }}>
        <InOutTransitionContainer>
          <SliderInfoProvider>
            <HomeSlider />
          </SliderInfoProvider>
          <WorksList />
        </InOutTransitionContainer>
      </Layout>
    </>
  );
};

export default Home;
