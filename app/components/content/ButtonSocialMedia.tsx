import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";

type SocialMediaProps = {
  children: ReactNode;
  href: string;
};

const ButtonSocialMedia: FunctionComponent<SocialMediaProps> = ({
  children,
  href,
}) => {
  return (
    <Link
      href={href}
      className="rounded-lg py-1 px-4 dark:bg-dark-secondary dark:text-white bg-dark text-white flex gap-x-2  items-center text-lg shadow-lg font-normal hover:bg-gradient-to-r hover:from-blue-700 hover:to-sky-500"
    >
      {children}
    </Link>
  );
};

export default ButtonSocialMedia;
