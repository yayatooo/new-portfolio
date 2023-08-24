import React from "react";
import Container from "../components/content/Container";
import HeadingTittle from "../components/content/HeadingTittle";
import AboutPage from "./AboutPage";
import ContributionPage from "./ContributionPage";
import CareerPage from "./CareerPage";

const About = () => {
  return (
    <Container>
      <HeadingTittle>About</HeadingTittle>
      <p className="lg:text-2xl xs:text-lg py-4 text-center w-10/12 mx-auto">
        What Im Interesting About
      </p>
      <AboutPage />
      <CareerPage />
      <ContributionPage />
    </Container>
  );
};

export default About;
