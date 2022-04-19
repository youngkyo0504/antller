import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import getWorks from "src/lib/mdxFiles";

import { MDXProvider } from "@mdx-js/react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ParsedUrlQuery } from "querystring";
import tw from "twin.macro";
import { Work } from "@types";
import Image from "next/image";
import { motion } from "framer-motion";
import Interview from "@components/Common/Markdown/Interview";
import { MDXComponents } from "mdx/types";
import MadeBy from "@components/Common/Markdown/MadeBy";
import InterviewCol from "@components/Common/Markdown/InterViewCol";

// const Container = tw.div`max-w-content mx-auto px-content mt-header`;
const Container = tw.div`max-w-content mx-auto px-content mt-header`;
const Title = tw.p`text-6xl font-bold tracking-wider`;
const SubTitle = tw.p`text-xl pt-4 text-gray mb-12`;

interface WorkDetailProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: Work["data"];
}
const ElementImage = (props: any) => {
  const { src, alt } = props;
  return (
    <motion.img
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      src={src}
      alt={alt}
      className={"sfsfsfs"}
    />
  );
};

const components: MDXComponents | undefined = {
  img: ElementImage,
  Interview: (props: any) => <Interview {...props} />,
  MadeBy: (props: any) => <MadeBy {...props} />,
  InterviewCol: (props: any) => <InterviewCol {...props} />,
};

const WorkDetailPage: NextPage<WorkDetailProps> = ({ source, frontMatter }) => {
  return (
    <>
      <Head>
        <title>Work details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MDXProvider components={components}>
        <Layout>
          <InOutTransitionContainer>
            <Container>
              <Title>{frontMatter.title}</Title>
              <SubTitle>{frontMatter.subCategory}</SubTitle>
              <Image
                src={`/images/${frontMatter.id}.png`}
                layout="responsive"
                width={1280}
                height={720}
                alt="banner image"
              />
              <p tw="text-gray text-center mt-1">NEWSO ORIGINAL DOCUMENTARY</p>
              <section
                className="prose lg:prose-xl prose-img:rounded-xl mx-auto max-w-[900px] mt-20 overflow-auto"
                style={{ wordBreak: "keep-all" }}
              >
                <MDXRemote {...source} />
              </section>
            </Container>
          </InOutTransitionContainer>
        </Layout>
      </MDXProvider>
    </>
  );
};

export default WorkDetailPage;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const works = getWorks();
  const { slug } = params as IParams;
  const work = works
    .filter((work) => work !== undefined)
    .find((work) => work?.data.id === slug);

  const source = work ? work.content : "not found";
  const frontMatter = work ? work.data : {};
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource, frontMatter } };
};

export const getStaticPaths: GetStaticPaths = () => {
  const works = getWorks();
  return {
    paths: works.map((work) => {
      return {
        params: {
          slug: work?.slug,
        },
      };
    }),
    fallback: false,
  };
};