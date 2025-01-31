import React from "react";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Linkedin from "../assets/images/png/linkdin.png";
import Github from "../assets/images/png/github.png";
import { Link } from "react-router-dom";

const LoginSocialOnly = () => {
  return (
    <div className="mt-8 sm:mt-12 lg:mt-[60px] container xl:px-0 sm:px-4 px-3 pb-12">
      <Heading text="Create an account" />
      <Paragraph text="We use LinkedIn or GitHub Login to verify you as a professional Developer / Agency" />
      <form className="px-4 sm:px-8 md:px-10 lg:px-[52px] py-4 sm:py-6 lg:py-7 rounded-[3px] bg-dark-400 border-[2px] border-dark-800 w-full max-w-[500px] mx-auto mt-5 lg:mt-9">
        <Paragraph
          className="mb-3 md:mb-4 !mt-0"
          text="Please fill use your LinkedIn or Github Account to register and verify!"
        />
        <Link className="w-full mx-auto h-9 max-w-[271px] py-[6px] bg-white rounded-[3px] flex justify-center duration-300 hover:shadow-md hover:shadow-white/40 px-3">
          <img width={91} height={19} src={Linkedin} alt="Linkedin" />
        </Link>
        <Link className="w-full mx-auto h-9 max-w-[271px] mt-3 sm:mt-4 md:mt-5 bg-white rounded-[3px] flex justify-center duration-300 hover:shadow-md hover:shadow-white/40 px-3">
          <img width={95} height={35} src={Github} alt="Linkedin" />
        </Link>
        <div className="flex items-center justify-center mt-4 lg:mt-8 leading-133 text-sm lg:text-lg text-white font-normal">
          Have an account?&nbsp;{" "}
          <Link
            to="/create-company"
            className="text-primary font-bold hover:text-primary/60 duration-300"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginSocialOnly;
