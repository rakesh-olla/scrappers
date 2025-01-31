import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="lg:max-w-[1347px] container px-3 sm:px-4 xl:px-0 flex justify-between items-center md:items-start max-md:flex-col mt-10 md:mt-14 lg:mt-28 xl:mt-[179px] pb-5 relative z-50">
      <div className="leading-133 font-bold md:text-lg text-white max-md:text-center">
        The first job portal—built for the{" "}
        <span className="text-primary">DEVELOPER!&nbsp;</span>
        <br className="max-md:hidden" />
        <span className="font-normal">
          Part of WESPEAKCODE <br className="max-md:hidden" />
          2025®
        </span>{" "}
        All Rights reserved
      </div>
      <div className="flex max-md:gap-3 md:flex-col items-end gap-1 justify-center flex-wrap max-md:mt-4">
        <p className="!leading-133 hover:text-white duration-300 font-bold text-sm sm:text-base md:text-lg text-white md:text-end">
          SUPPORT
        </p>
        <Link
          to="/"
          className="!leading-133 hover:text-white duration-300 font-bold text-sm sm:text-base md:text-lg text-dark-700 md:text-end"
        >
          TERMS & CONDITIONS
        </Link>
        <Link
          to="/"
          className="!leading-133 hover:text-white duration-300 font-bold text-sm sm:text-base md:text-lg text-dark-700 md:text-end"
        >
          PRIVACY
        </Link>
      </div>
    </div>
  );
};

export default Footer;
