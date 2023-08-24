import Experience from "./components/home/Experience";
import Hero from "./components/home/Hero";
import Project from "./components/home/Project";
import Skills from "./components/home/Skills";
import Swiper from "./components/home/experience/ExperienceSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      {/* <Swiper /> */}
    </>
  );
}
