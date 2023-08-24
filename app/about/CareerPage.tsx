import React from "react";
import { careerList } from "../utils/data";
import { data } from "autoprefixer";
const CareerPage = () => {
  return (
    <section className="container max-w-5xl pt-16">
      <h1 className="text-4xl font-semibold py-8 text-center lg:text-start">
        My Career So Far
      </h1>
      <div className="flex justify-between items-center xs:flex-col lg:flex-row gap-4">
        <p className=" xs:mx-auto xs:w-10/12 xs:text-center lg:text-start lg:mx-0 lg:w-6/12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          deserunt rem a repellendus vitae numquam placeat cupiditate tempora
          hic saepe totam labore similique, voluptatibus odit adipisci tenetur
          doloribus vel dolor laboriosam ea explicabo ullam obcaecati atque
          doloremque? Suscipit, sint consequatur.
        </p>
        <ul className="flex flex-wrap justify-center xs:w-11/12 lg:w-3/12 gap-2 lg:justify-start">
          {careerList.map((item) => (
            <li className="font-semibold bg-gray-200 dark:bg-dark-secondary rounded-md p-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CareerPage;
