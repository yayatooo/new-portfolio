import React from "react";
import Container from "../components/content/Container";
import HeadingTittle from "../components/content/HeadingTittle";
import ProjectPage from "./ProjectPage";

function Project(): JSX.Element {
  return (
    <Container>
      <HeadingTittle>Project</HeadingTittle>
      <p className="lg:text-2xl xs:text-lg py-4 text-center w-10/12 mx-auto">
        Showcasing my passion for Frontend Development
      </p>
      <ProjectPage />
    </Container>
  );
}

export default Project;
