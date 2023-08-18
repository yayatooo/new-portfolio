import React from "react";
import Container from "../components/Container";
import HeadingTittle from "../components/HeadingTittle";
import Image from "next/image";
import { allExperiences } from "../project/data";

const ExperiencePage = () => {
  return (
    <Container>
      <HeadingTittle>Experience</HeadingTittle>
      <p className="lg:text-2xl xs:text-lg py-4 text-center w-10/12 mx-auto">
        These are some of the Experiences I've did
      </p>

      <section className="container max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
        {allExperiences.map((item) => (
          <div className="w-7/12 p-8 rounded-lg shadow-xl bg-gray-200 dark:bg-dark-secondary">
            <h1 className="text-3xl font-semibold">{item.job}</h1>
            <h2 className="text-lg font-semibold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              {item.company}{" "}
              <span className="text-dark dark:text-white">
                {" "}
                | {item.position}
              </span>
            </h2>
            <div className="flex gap-x-4 items-center">
              {item.skills.map((data) => (
                <Image
                  src={data}
                  width={35}
                  height={35}
                  alt="stack exp"
                  className="py-3"
                />
              ))}
            </div>

            <p className="font-semibold text-gray-500 dark:text-gray-200 pb-3">
              {item.date}
            </p>
            <p className="text-justify">{item.desc}</p>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default ExperiencePage;
