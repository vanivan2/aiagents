import type { NextPage } from 'next';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from '../components/BasicSection';
import Link from '../components/Link';
import { EnvVars } from '../env';
import { getAllPosts } from '../utils/postsFetcher';
import Cta from '../views/HomePage/Cta';
import Features from '../views/HomePage/Features';
import FeaturesGallery from '../views/HomePage/FeaturesGallery';
import Hero from '../views/HomePage/Hero';
import Partners from '../views/HomePage/Partners';
import ScrollableBlogPosts from '../views/HomePage/ScrollableBlogPosts';
import Testimonials from '../views/HomePage/Testimonials';

const Homepage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Developing autonomous AI agents for various applications, with a focus on enhancing user experience and revolutionizing industries."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Revolutionizing Industries with Autonomous AI Agents" overTitle="The Future of AI">
            <p>
              Our autonomous AI agents are at the forefront of technological innovation, designed to transform various sectors including healthcare, finance, and customer service. By leveraging advanced machine learning algorithms and natural language processing, our agents provide unparalleled efficiency and accuracy in decision-making processes.{' '}
              <Link href="/features">Explore how our AI agents can revolutionize your industry</Link>
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Enhancing User Experience Through AI" overTitle="User-Centric Design" reversed>
            <p>
              At the core of our development process is a relentless focus on user experience. Our autonomous AI agents are designed to be intuitive, responsive, and adaptable, ensuring seamless integration into existing workflows and systems.
            </p>
            <ul>
              <li>Personalized interactions tailored to individual user needs</li>
              <li>Real-time learning and adaptation for improved performance</li>
              <li>Seamless integration with existing technologies and platforms</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}

export default Homepage;
