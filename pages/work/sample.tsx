import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import WorkDetail from "@components/WorkDetail/WorkDetail";
import type { NextPage } from "next";
import Head from "next/head";

const WorkPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <InOutTransitionContainer>
          <WorkDetail />
        </InOutTransitionContainer>
      </Layout>
    </>
  );
};

export default WorkPage;
