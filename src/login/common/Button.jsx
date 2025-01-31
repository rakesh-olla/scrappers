import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, greyBtn, greenBtn, path }) => {
  return (
    <>
      {path ? (
        <Link
          to={path}
          className={`leading-133 sm:text-base duration-300 text-sm  md:text-lg font-bold rounded-[3px] px-2 sm:px-4 md:px-[25px] border-[2px] border-transparent py-[6px] sm:py-2 lg:py-3 h-fit ${
            greenBtn
              ? "bg-primary text-dark-500 hover:bg-primary/80"
              : "bg-dark-400 text-white hover:bg-black/80"
          } ${className}`}
        >
          {greyBtn}
          {greenBtn}
        </Link>
      ) : (
        <button
          className={`leading-133 sm:text-base duration-300 text-sm  md:text-lg font-bold rounded-[3px] px-2 sm:px-4 md:px-[25px] border-[2px] border-transparent py-[6px] sm:py-2 lg:py-3 h-fit ${
            greenBtn
              ? "bg-primary text-dark-500 hover:bg-primary/80"
              : "bg-dark-400 text-white hover:bg-black/80"
          } ${className}`}
        >
          {greyBtn}
          {greenBtn}
        </button>
      )}
    </>
  );
};

export default Button;
