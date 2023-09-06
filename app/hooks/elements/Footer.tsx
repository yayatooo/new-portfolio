import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-dark-secondary bg-gray-200 backdrop-blur-lg border-border font-display shadow-xl">
      <div className="py-4 container flex flex-col items-center md:flex-row justify-center mx-auto">
        <p className="text-sm leading-5 text-gray-600 dark:text-gray-200">
          © {new Date().getFullYear()} Rahmat Hidayat - Made With NextJs 13
        </p>
      </div>
    </footer>
  );
};

export default Footer;
