import { FunctionComponent, ReactNode } from "react";

const Button: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className="rounded-full py-1 px-4 dark:bg-white dark:text-dark bg-dark text-white flex items-center text-lg shadow-lg font-normal hover:bg-gradient-to-r hover:from-blue-700 hover:to-sky-500">
      {children}
    </button>
  );
};

export default Button;
