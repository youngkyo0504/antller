import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import Tab from "../components/Tab/Tab";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <header className="w-full header-background bg-black h-screen flex flex-col justify-end  ">
          <h1 className="text-3xl text-white">sdfsdf sdfsdf dsf dsf</h1>
        </header>
        <div>
          <section className="w-full h-screen mt-96 text-white"></section>
        </div>
      </main>
    </>
  );
};

export default Home;
