import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeadingTittle from "../content/HeadingTittle";

const Project = () => {
  const projectSet = [
    {
      name: "Findtrend",
      image: "/findtrend.png",
      desc: "this web to for my learn about slicing components, this web have a purpose to provide website online maker",
      tech: [
        "/tech/javascript.svg",
        "/tech/react-icon.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        "/tech/nextjs-icon.svg",
      ],
      href: "./",
      repository: "github.com",
    },
    {
      name: "Youtube Clone",
      image: "/youtubeclone.png",
      desc: "this web to for my learn about make app video player and other like youtube with youtubr-API and react player",
      tech: [
        "/tech/javascript.svg",
        "/tech/react-icon.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      ],
      href: "./",
      repository: "github.com",
    },
    {
      name: "Qur'an API",
      image: "/Quran-API.png",
      desc: "This web App help your read qur'an with the reqitation and meaning of ayah of Qur'an",
      tech: [
        "/tech/typescript.svg",
        "/tech/react-icon.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        "/tech/nextjs-icon.svg",
      ],
      href: "./",
      repository: "github.com",
    },
  ];

  return (
    <section className="w-full dark:text-white text-dark py-8">
      <div className="container max-w-5xl mx-auto flex flex-col justify-center text-center">
        <HeadingTittle>Projects</HeadingTittle>
        <p className="lg:text-2xl xs:text-lg py-4">
          Some Projects that I'm Proud Of
        </p>
      </div>
      <div className="container max-w-5xl mx-auto grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 mt-5 xs:px-6 lg:px-0">
        {projectSet.map((item) => (
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
            </div>
          </div>
        ))}
      </div>
      <section className="container max-w-5xl mx-auto p-6">
        <Link
          href="/project"
          className="rounded-md py-1 px-4 bg-gradient-to-r from-blue-700 to-sky-500 text-white flex items-center justify-center text-xl shadow-lg font-medium lg:w-[25%] xs:w-full mx-auto"
        >
          See Other Projects
        </Link>
      </section>
    </section>
  );
};

export default Project;
