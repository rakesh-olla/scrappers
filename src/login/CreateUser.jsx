import React from "react";
import Paragraph from "./common/Paragraph";
import { Link } from "react-router-dom";
import Heading from "./common/Heading";
import Linkedin from "../assets/images/png/linkdin.png";
import Github from "../assets/images/png/github.png";

const CreateUser = () => {
  return (
    <div className="mt-8 sm:mt-12 lg:mt-[60px] container xl:px-0 sm:px-4 px-3 pb-12 relative z-50">
      <Heading text="Log in" />
      <Paragraph text="Please fill use your LinkedIn or Github Account to login" />
      <form className="p-4 sm:p-8 md:p-10 lg:pb-[38px] lg:p-[52px] rounded-[3px] bg-dark-400 border-[2px] border-dark-800 w-full max-w-[500px] mx-auto mt-5">
        <Link className="w-full mx-auto max-w-[271px] py-[6px] bg-white rounded-[3px] duration-300 hover:shadow-md hover:shadow-white/40 flex justify-center px-3">
          <img width={91} height={19} src={Linkedin} alt="Linkedin" />
        </Link>
        <Link className="w-full mx-auto max-w-[271px] mt-3 sm:mt-4 md:mt-5 bg-white rounded-[3px] duration-300 hover:shadow-md hover:shadow-white/40 flex justify-center px-3">
          <img width={95} height={35} src={Github} alt="Linkedin" />
        </Link>
        <div className="flex items-center justify-center mt-4 sm:mt-7 leading-133 text-sm lg:text-lg text-white font-normal">
          Don't have an account?&nbsp;
          <Link
            to="/create-user"
            className="text-primary font-bold hover:text-primary/60 duration-300"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
