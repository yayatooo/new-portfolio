import React from "react";
import Container from "../components/Container";
import HeadingTittle from "../components/HeadingTittle";
import Image from "next/image";
import { allExperiences } from "../project/data";

const About = () => {
  return (
    <Container>
      <HeadingTittle>About</HeadingTittle>
      <p className="lg:text-2xl xs:text-lg py-4 text-center w-10/12 mx-auto">
        These are some of the Experiences I've did
      </p>
    </Container>
  );
};

export default About;
