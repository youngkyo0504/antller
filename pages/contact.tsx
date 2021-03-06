import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import Layout from "@components/Layouts/Layout";
import InOutTransitionContainer from "@components/Layouts/TransitionContainer";
import { useColorScheme } from "@hooks";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import {
  Container,
  ContentContainer,
} from "@components/Common/globalStyleComponent";
import tw from "twin.macro";
const seoConfig = { title: "Contact" };

const IconContainer = tw.div`flex items-center`;
const InfoText = tw.p`ml-4 `;
const Grid = tw.div`sm:(mt-10 grid-cols-2 gap-x-16 gap-y-5) gap-y-4  grid mt-5`;
const ContactItemWrapper = tw.div``;
const SocialText = tw.p`text-gray sm:(mb-1 text-xl ) text-lg `;
const SocialLink = tw.a`hover:underline sm:(text-xl) `;

const ContactPage: NextPage = () => {
  const { setIsBgBlack } = useDarkBgContext(true);
  useColorScheme();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo {...seoConfig} />

      <Layout stickyHeaderOption={{}}>
        <InOutTransitionContainer>
          <Container>
            <ContentContainer tw="text-white">
              <h1 tw="text-3xl font-bold sm:text-6xl">Contact us</h1>
              <Grid>
                {" "}
                <ContactItemWrapper>
                  <SocialText>Instagram</SocialText>
                  <SocialLink
                    href="https://www.instagram.com/antller.official/"
                    target={"#"}
                  >
                    @antller.official
                  </SocialLink>
                </ContactItemWrapper>
                <ContactItemWrapper>
                  <SocialText>Github</SocialText>
                  <SocialLink href="https://github.com/antller" target={"#"}>
                    @Antller
                  </SocialLink>
                </ContactItemWrapper>
                <ContactItemWrapper>
                  <SocialText>Mail</SocialText>
                  <SocialLink href="mailto:official@antller.com">
                    official@antller.com
                  </SocialLink>
                </ContactItemWrapper>
                <ContactItemWrapper>
                  <SocialText>Newsletter</SocialText>
                  <SocialLink target={"#"} href="http://newso.co.kr">
                    Newsoletter
                  </SocialLink>
                </ContactItemWrapper>
                <ContactItemWrapper>
                  <SocialText>Address</SocialText>
                  <SocialLink
                    target={"#"}
                    href="https://www.google.co.kr/maps/place/%EA%B1%B4%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90+%EC%B0%BD%EC%9D%98%EA%B4%80/data=!4m9!1m2!2m1!1z7ISc7Jq47IucIOq0keynhOq1rCDriqXrj5nroZwgMTIwIOqxtOq1reuMgO2Vmeq1kCDssL3snZjqtIAgMjAz7Zi4!3m5!1s0x357ca5b0497b714f:0xdd84cc916d9c2fbc!8m2!3d37.5407625!4d127.0793428!15sCkLshJzsmrjsi5wg6rSR7KeE6rWsIOuKpeuPmeuhnCAxMjAg6rG06rWt64yA7ZWZ6rWQIOywveydmOq0gCAyMDPtmLiSAQZzY2hvb2w?hl=ko"
                  >
                    ????????? ????????? ????????? 120 ??????????????? ????????? 203???
                  </SocialLink>
                </ContactItemWrapper>
              </Grid>
            </ContentContainer>
          </Container>
        </InOutTransitionContainer>
      </Layout>
    </>
  );
};

export default ContactPage;
