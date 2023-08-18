import React from "react";
import { FunctionComponent, ReactNode } from "react";

const Container: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <section className="container mx-auto max-w-5xl my-14">{children}</section>
  );
};

export default Container;
