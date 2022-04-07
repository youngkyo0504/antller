import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import HistoryGraph from "@components/HistoryGraph/HistoryGraph";
import type { NextPage } from "next";
import Head from "next/head";

const WorkPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <InOutTransitionContainer>
          <div tw="h-screen"></div>
          <HistoryGraph />
          <div tw="h-screen"></div>
        </InOutTransitionContainer>
      </Layout>
    </>
  );
};

export default WorkPage;