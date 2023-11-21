import React from "react";
import Container from "@/app/hooks/Container";
import HeadingTittle from "@/app/hooks/HeadingTittle";
// import GitHubPage from "./TestGithub";
import Navbar from "@/app/hooks/elements/Navbar";
import Footer from "@/app/hooks/elements/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Container>
        <HeadingTittle>Blog</HeadingTittle>
        <section>
          <div className="text-center py-48 mb-64">
            <h1 className="xs:text-3xl lg:text-7xl  font font-semibold">
              in the development stage
            </h1>
          </div>
          {/* <GitHubPage /> */}
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
