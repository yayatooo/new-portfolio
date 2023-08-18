import Container from "../components/Container";
import React from "react";
import HeadingTittle from "../components/HeadingTittle";
import Image from "next/image";
import { allProject } from "./data";
import { GrCirclePlay } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";

function Project(): JSX.Element {
  return (
    <Container>
      <HeadingTittle>Project</HeadingTittle>
      <p className="lg:text-2xl xs:text-lg py-4 text-center w-10/12 mx-auto">
        Showcasing my passion for Frontend Development
      </p>
      <section className="container max-w-5xl mx-auto grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 mt-8 xs:px-6 lg:px-0">
        {allProject.map((item) => (
          <div className="dark:bg-dark-secondary bg-gray-200 rounded-lg shadow-xl">
            <Image
              src={item.image}
              width={383}
              height={192}
              alt="project"
              className="rounded-t-lg"
            />
            <div className="p-4 space-y-2">
              <h1 className="font-semibold">{item.name}</h1>
              <p className="text-sm font-light text-gray-700 dark:text-white">
                {item.desc}
              </p>
              <div className="flex gap-x-3">
                {item.tech.map((techItem, index) => (
                  <Image
                    key={index}
                    src={techItem}
                    width={24}
                    height={24}
                    alt=""
                  />
                ))}
              </div>
              <div className="flex gap-x-4 w-full pt-4">
                <a
                  href={item.repository}
                  className="flex gap-x-1 items-center bg-white text-dark px-3 py-1 rounded-lg hover:bg-gray-200"
                >
                  Repository
                  <span>
                    <FaGithub />
                  </span>
                </a>
                <a
                  href={item.href}
                  className="flex gap-x-1 items-center bg-white text-dark px-3 py-1 rounded-lg hover:bg-gray-300"
                >
                  Demo{" "}
                  <span>
                    <GrCirclePlay />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Project;
