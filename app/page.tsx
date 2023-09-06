import Hero from "./common/home/components/Hero";
import Skills from "./common/home/components/Skills";
import Experience from "./common/home/components/Experience";
import Navbar from "./hooks/elements/Navbar";
import Footer from "./hooks/elements/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}
