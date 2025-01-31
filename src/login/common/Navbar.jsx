import React from "react";
import PageLogo from "../../assets/images/png/logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="lg:max-w-[1347px] container px-3 sm:px-4 xl:px-0 flex justify-between items-center gap-6 py-3 sm:py-6 relative z-50">
      <Link to={"/"}>
        <img
          className="w-[130px] sm:w-[174px] md:w-[240px] lg:w-[327px]"
          width={327}
          height={33}
          src={PageLogo}
          alt="page logo"
        />
      </Link>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 text-nowrap">
        <Button path="/create-company" greyBtn="Login" />
        <Button greenBtn="Apply Now" />
      </div>
    </nav>
  );
};

export default Navbar;
