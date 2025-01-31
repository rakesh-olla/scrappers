import React from "react";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import { useForm } from "react-hook-form";
import Button from "./common/Button";
import { Link } from "react-router-dom";

const CreateCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-8 sm:mt-12 lg:mt-[60px] container xl:px-0 sm:px-4 px-3 pb-12">
      <Heading text="Create an account" />
      <Paragraph text="Create an account and start using Jobhunt" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 sm:p-8 md:p-10 lg:p-[52px] lg:pb-[58px] rounded-[3px] bg-dark-400 border-[2px] border-dark-800 w-full max-w-[500px] mx-auto mt-6 md:mt-8 lg:mt-[60px]"
      >
        <Paragraph className="!mt-0 text-start !mx-0" text="Name" />
        <input
          className="px-3 sm:px-4 lg:px-[22px] py-3 md:py-4 rounded-[3px] border-[2px] border-dark-800 mt-[5px] leading-117 w-full outline-none text-sm text-white bg-transparent"
          type="text"
          name="fullName"
          placeholder="Full name"
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && (
          <span className="text-red-500 text-sm pt-1">
            {errors.fullName.message}
          </span>
        )}

        {/* Corrected Label Text for Email */}
        <Paragraph className="!mt-5 text-start !mx-0" text="Email" />
        <input
          className="px-3 sm:px-4 lg:px-[22px] py-3 md:py-4 rounded-[3px] border-[2px] border-dark-800 mt-[5px] leading-117 w-full outline-none text-sm text-white bg-transparent"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Please enter a valid email address",
            },
          })}
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500 max-sm:text-sm pt-1">
            {errors.email.message}
          </span>
        )}

        <Paragraph className="!mt-5 text-start !mx-0" text="Password" />
        <input
          className="px-3 sm:px-4 lg:px-[22px] py-3 md:py-4 rounded-[3px] border-[2px] border-dark-800 mt-[5px] leading-117 w-full outline-none text-sm text-white bg-transparent"
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", { required: "password is required" })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm pt-1">
            {errors.password.message}
          </span>
        )}
        <div className="mt-5 flex items-center gap-[6px]">
          <input
            type="checkbox"
            {...register("termsAndConditions", {
              required: "You must agree to the T&C",
            })}
            className="size-5 bg-transparent rounded-[3px] border-[2px] border-dark-800 accent-primary"
          />
          <p className="text-white text-sm lg:text-base">
            I have read and agree to the&nbsp;
            <span className="text-[#737373] uppercase">T&C</span>
          </p>
        </div>
        {errors.termsAndConditions && (
          <span className="text-red-500 text-sm pt-1">
            {errors.termsAndConditions.message}
          </span>
        )}
        <Button
          className="w-full text-center mt-5 !py-2"
          greenBtn="Create Account"
        />
        <div className="flex items-center justify-center mt-5 leading-133 text-sm lg:text-lg text-white font-normal">
          Have an account?
          <Link to="/login" className="text-primary font-bold">
            &nbsp;Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateCompany;
