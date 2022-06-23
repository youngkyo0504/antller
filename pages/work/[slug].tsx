import tw from "twin.macro";
import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import getWorks from "src/lib/mdxFiles";
import { MDXProvider } from "@mdx-js/react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ParsedUrlQuery } from "querystring";
import { Work } from "@types";
import Image from "next/image";
import { MDXComponents } from "mdx/types";
import Interview from "@components/Common/Markdown/Interview";
import InterviewCol from "@components/Common/Markdown/InterViewCol";
import MadeBy from "@components/Common/Markdown/MadeBy";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import BlockQuotation from "@components/Common/Markdown/BlockQuotation";
import Intro from "@components/Common/Markdown/Intro";

const Container = tw.article`max-w-[790px] mx-auto px-mo-content mt-mo-header sm:mt-header sm:px-content `;
const Title = tw.h1` font-semibold tracking-wider sm:text-5xl text-3xl`;
const SubTitle = tw.p`sm:text-xl text-lg sm:pt-2  text-gray mb-12 `;

interface WorkDetailProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: Work["data"];
}

const NextImage = (props: any) => {
  const { src, height, width, alt, ...rest } = props;

  return height && width ? (
    <Image {...props} layout="responsive" loading="lazy" />
  ) : (
    <img src={src} alt={alt} />
  );
};
// 컴포넌트를 주입해서 MDX에서 사용할 수 있다. MDX에서 직접 Import 하는 방식도 있다.

const components: MDXComponents | undefined = {
  NextImage,
  Interview: (props) => <Interview {...props} />,
  MadeBy: (props) => <MadeBy {...props} />,
  InterviewCol: (props) => <InterviewCol {...props} />,
  BlockQuotation: BlockQuotation,
  Intro: Intro,
};

const WorkDetailPage: NextPage<WorkDetailProps> = ({ source, frontMatter }) => {
  useDarkBgContext(false);

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MDXProvider components={components}>
        <Layout>
          <InOutTransitionContainer>
            <Container>
              <header>
                <Title>{frontMatter.title}</Title>
                <SubTitle>{frontMatter.subCategory}</SubTitle>
                <Image
                  src={`/images/works/${frontMatter.id}.png`}
                  tw="rounded-xl"
                  layout="responsive"
                  width={1000}
                  height={630}
                  alt="banner image"
                />
              </header>

              <section
                style={{ wordBreak: "keep-all" }}
                className="prose sm:prose-lg prose-img:rounded-xl mx-auto max-w-[900px] sm:mt-10 overflow-auto prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium prose-h4:font-medium"
              >
                {/* // source가 주입돼서 HTML로 변환 */}
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
  // posts 폴더에 있는 mdx파일의 id와 [slug]가 같음
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
