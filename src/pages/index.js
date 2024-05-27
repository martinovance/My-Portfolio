import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Enterprise from '../components/Enterprise/Enterprise';
import Gallery from '../components/Slides/Slides';
import Technologies from '../components/Technologies/Technologies';
// import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Enterprise />
      <Projects />
      <Gallery />
      <Technologies />
      {/* <Timeline /> */}
    </Layout>
  );
};

export default Home;