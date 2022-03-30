import { AnimateSharedLayout } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import Portfolio from "../components/WorkStore/Portfolio";

const WorkPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {" "}
        <AnimateSharedLayout>
          <Header />
          <Portfolio />
        </AnimateSharedLayout>
      </main>
    </>
  );
};

export default WorkPage;