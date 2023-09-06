import React from "react";
import Image from "next/image";
import Container from "@/app/hooks/Container";
import HeadingTittle from "@/app/hooks/HeadingTittle";
import SubHeadingTittle from "@/app/hooks/SubHeadingTittle";

const Skills = () => {
  const skillSet = [
    {
      icon: "/tech/logo-javascript.svg",
      title: "Javascript",
      info: "JavaScript is a high-level and dynamic programming language.",
    },
    {
      icon: "/tech/typescript.svg",
      title: "TypeScript",
      info: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale",
    },
    {
      icon: "/tech/react-icon.svg",
      title: "ReactJs",
      info: "React is a JavaScript library used to build component-based interactive user interfaces",
    },
    {
      icon: "/tech/nextjs-icon.svg",
      title: "NextJs 13",
      info: "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      title: "Tailwind Css",
      info: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
    },
    {
      icon: "/tech/git.svg",
      title: "Git",
      info: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    },
  ];

  return (
    <section className="w-full dark:text-white text-dark py-8 bg-gray-200 dark:bg-dark-secondary">
      <div className="container max-w-5xl mx-auto flex flex-col justify-center text-center">
        <HeadingTittle>Skills</HeadingTittle>
        <SubHeadingTittle>
          List of the technologies that I've use
        </SubHeadingTittle>
      </div>
      <div className=" container max-w-5xl mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 mt-5">
        {skillSet.map((data) => (
          <div
            className="relative overflow-hidden rounded-lg p-6 cursor-pointer"
            key={data.title}
          >
            <Image src={data.icon} width={64} height={64} alt="skill" />
            <div className="text-left">
              <h3 className="font-semibold py-1">{data.title}</h3>
              <p className="text-sm text-muted-foreground">{data.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
