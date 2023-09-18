import React from "react";
import AboutPage from "./AboutPage";
import ContributionPage from "./ContributionPage";
import CareerPage from "./CareerPage";
import Container from "@/app/hooks/Container";
import HeadingTittle from "@/app/hooks/HeadingTittle";
import Navbar from "@/app/hooks/elements/Navbar";
import Footer from "@/app/hooks/elements/Footer";
import SubHeadingTittle from "@/app/hooks/SubHeadingTittle";
import Contributions from "./contribution/Contribution";
import { getGithubData } from "@/app/constant/githubService";

const About = async () => {
  const githubData = await getGithubData();

  return (
    <>
      <Navbar />
      <Container>
        <HeadingTittle>About</HeadingTittle>
        <SubHeadingTittle>What Im Interesting About</SubHeadingTittle>
        <AboutPage />
        {/* <CareerPage /> */}
        <Contributions githubData={githubData} />
      </Container>
      <Footer />
    </>
  );
};

export default About;
