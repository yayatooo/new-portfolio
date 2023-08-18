import React, { Children } from "react";

type Tittle = {
  children: string;
};

const HeadingTittle = ({ children }: Tittle) => {
  return (
    <h1 className="text-center lg:text-6xl xs:text-5xl font-semibold ">
      {children}
    </h1>
  );
};

export default HeadingTittle;
