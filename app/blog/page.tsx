import React from "react";
import Container from "../components/content/Container";
import HeadingTittle from "../components/content/HeadingTittle";
import GitHubPage from "./TestGithub";

const Blog = () => {
  return (
    <Container>
      <HeadingTittle>Blog</HeadingTittle>
      <section>
        <div className="text-center py-48 mb-64">
          <h1 className="text-7xl font font-semibold">
            Wait Lagi Ditulis eheh 🦦
          </h1>
        </div>
        {/* <GitHubPage /> */}
      </section>
    </Container>
  );
};

export default Blog;
