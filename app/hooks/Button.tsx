import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
}

// : FunctionComponent<{ children: ReactNode }>

const Button = ({ children, href }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className="rounded-full py-1 px-4 dark:bg-white dark:text-dark bg-dark text-white flex items-center text-lg shadow-lg font-normal hover:bg-gradient-to-r hover:from-blue-700 hover:to-sky-500"
    >
      {children}
    </Link>
  );
};

export default Button;
