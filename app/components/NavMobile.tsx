import Link from "next/link";
import { linkTo } from "../project/data";
import classNames from "classnames";
import { IoClose } from "react-icons/io5";
import ThemeSwitcher from "./ThemeSwitcher";

const Sidebar = ({ openSide, setOpenSide }: any) => {
  const clickMenu = () => {
    setOpenSide(false);
  };

  return (
    <div
      className={classNames(
        "w-9/12 h-full bg-white/50 dark:bg-dark-secondary/50 backdrop-blur-md fixed z-50 top-0 transition-all",
        openSide ? "right-0" : "-right-full"
      )}
    >
      <div className="flex w-10/12 mx-auto justify-end py-6 text-3xl ">
        <button
          onClick={() => {
            setOpenSide(false);
          }}
        >
          <IoClose />
        </button>
      </div>
      <ul
        className={classNames(
          "w-full flex flex-col font-poppins font-normal gap-x-6 text-secondary items-center py-12 text-center gap-y-12 text-2xl"
        )}
      >
        {linkTo.map((data, i) => {
          return (
            <li key={i}>
              <Link href={data.href} onClick={() => clickMenu()}>
                {data.name}
              </Link>
            </li>
          );
        })}
        <ThemeSwitcher />
      </ul>
      <button></button>
    </div>
  );
};

export default Sidebar;
