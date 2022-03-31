import type { NextPage } from "next";
import Head from "next/head";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Layout from "../components/Layouts/Layout";
import TransitionContainer from "../components/Layouts/TransitionContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <TransitionContainer>
          <HomeSlider />
          <div>
            <section className="w-full h-screen   text-white"></section>
            <ImageSlider />
          </div>
        </TransitionContainer>
      </Layout>
    </>
  );
};

export default Home;
