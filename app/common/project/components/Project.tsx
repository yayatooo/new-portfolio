import React from "react";
import Container from "@/app/hooks/Container";
import HeadingTittle from "@/app/hooks/HeadingTittle";
import ProjectPage from "./ProjectPage";
import Navbar from "@/app/hooks/elements/Navbar";
import Footer from "@/app/hooks/elements/Footer";
import SubHeadingTittle from "@/app/hooks/SubHeadingTittle";

function Project(): JSX.Element {
  return (
    <>
      <Navbar />
      <Container>
        <HeadingTittle>Project</HeadingTittle>
        <SubHeadingTittle>
          Showcasing my passion for Frontend Development
        </SubHeadingTittle>
        <ProjectPage />
      </Container>
      <Footer />
    </>
  );
}

export default Project;
