import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import Portfolio from "@components/WorkStore/Portfolio";
import { Work } from "@types";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import getWorks from "src/lib/mdxFiles";
import tw from "twin.macro";

const seoConfig = { title: "About" };
interface WorkPageProps {
  works: Work[];
}
const WorkPage: NextPage<WorkPageProps> = ({ works }) => {
  useDarkBgContext(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo {...seoConfig} />
      <Layout>
        <InOutTransitionContainer>
          <Portfolio works={works} />
        </InOutTransitionContainer>
      </Layout>
    </>
  );
};

export const getStaticProps = () => {
  const works = getWorks();

  return {
    props: {
      works,
    },
  };
};

export default WorkPage;
