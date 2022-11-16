import Head from 'next/head';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';
import ProjectSlider from '../Components/ProjectSlider';
import Skills from '../Components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Hero />

      <About />

      <Skills />

      <ProjectSlider />

      <Contact />
    </div>
  );
}
