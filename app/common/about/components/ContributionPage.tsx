import React from "react";
import { AiFillGithub } from "react-icons/ai";

const ContributionPage = () => {
  return (
    <section className="py-8 xs:px-4 lg:px-0">
      <h1 className="flex gap-x-2 text-xl items-center font-semibold">
        <span>
          <AiFillGithub />
        </span>
        Contribution
      </h1>
      <div className="flex justify-between pb-4">
        <h2 className="font-medium">
          My contributions from last year on github.
        </h2>
        <p>@yayatooo</p>
      </div>
      <div className="xs:grid xs:grid-cols-2 xs:grid-rows-2 lg:flex gap-2">
        <div className="bg-gray-200 dark:bg-dark-secondary rounded-lg p-6 w-full">
          <h3 className="text-lg">Total</h3>
          <h1 className="text-3xl text-green-700">999</h1>
        </div>
        <div className="bg-gray-200 dark:bg-dark-secondary rounded-lg p-6 w-full">
          <h3 className="text-lg">This Week</h3>
          <h1 className="text-3xl text-green-700">999</h1>
        </div>
        <div className="bg-gray-200 dark:bg-dark-secondary rounded-lg p-6 w-full">
          <h3 className="text-lg">Best Day</h3>
          <h1 className="text-3xl text-green-700">999</h1>
        </div>
        <div className="bg-gray-200 dark:bg-dark-secondary rounded-lg p-6 w-full">
          <h3 className="text-lg">Averge</h3>
          <h1 className="text-3xl text-green-700">999</h1>
        </div>
      </div>
    </section>
  );
};

export default ContributionPage;
