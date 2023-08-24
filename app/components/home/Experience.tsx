import React from "react";
import Container from "../content/Container";
import HeadingTittle from "../content/HeadingTittle";
import Image from "next/image";
import { allExperiences } from "@/app/utils/data";
import Swiper from "./experience/ExperienceSection";

const Experience = () => {
  return (
    <Container>
      <HeadingTittle>Experience</HeadingTittle>
      <p className="lg:text-2xl xs:text-lg py-4 text-center w-10/12 mx-auto">
        These are some of the Experiences I've did
      </p>
      <Swiper />
    </Container>
  );
};

export default Experience;
