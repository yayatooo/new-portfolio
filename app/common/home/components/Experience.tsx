import React from "react";
import Container from "@/app/hooks/Container";
import HeadingTittle from "@/app/hooks/HeadingTittle";
import ExperienceSection from "@/app/common/home/components/experience/ExperienceSection";
import SubHeadingTittle from "@/app/hooks/SubHeadingTittle";

const Experience = () => {
  return (
    <Container>
      <HeadingTittle>Experience</HeadingTittle>
      <SubHeadingTittle>
        These are some of the Experiences I've did
      </SubHeadingTittle>
      <ExperienceSection />
    </Container>
  );
};

export default Experience;
