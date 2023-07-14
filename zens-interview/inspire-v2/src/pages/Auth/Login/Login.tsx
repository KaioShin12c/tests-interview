import React from "react";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Logo from "@/assets/images/logo.png";
import LoginImg from "@/assets/images/Lightb.png";

import { Button, Input } from "@/components";

const Login = () => {
  const navigate = useNavigate();

  const onSubmitClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-screen 2xl:min-w-[1400px] grid grid-cols-2">
      <div className="flex flex-col px-2 2xl:px-4 ">
        <img
          src={Logo}
          alt="logo"
          className="w-[270px] xl:w-[300px] 2xl:w-[383px] "
        />
        <div className=" flex-1 grid place-items-center ">
          <form
            className="w-full px-10 lg:px-14 xl:px-20 2xl:px-24 2xl:max-w-[800px]"
            onSubmit={onSubmitClick}
          >
            <h2 className="text-4xl xl:text-6xl 2xl:text-[78px] text-[#393838] text-center xl:mb-3 2xl:mb-6">
              Welcome
            </h2>
            <div className="mb-4 2xl:mb-9">
              <label className="block text-[#6D6B6B] mb-2 2xl:mb-3 xl:text-2xl 2xl:text-29px">
                Username
              </label>
              <Input
                value="test@test.com"
                placeholder="Username"
                className="h-10 xl:h-14 2xl:h-24 xl:text-xl 2xl:text-32px"
                prefixIcon={<User className="text-2xl" stroke="#DCDBDB" />}
              />
            </div>
            <div className="mb-12 2xl:mb-[87px]">
              <label className="block text-[#6D6B6B] mb-2 2xl:mb-3 xl:text-2xl 2xl:text-29px">
                Password
              </label>
              <Input
                value="password1"
                type="password"
                placeholder="Password"
                className="h-10 xl:h-14 xl:text-2xl 2xl:text-32px 2xl:h-24"
                prefixIcon={<Lock size={30} stroke="#DCDBDB" />}
              />
            </div>
            <Button
              className="w-full h-10 xl:h-14 2xl:h-24 px-5 xl:text-xl 2xl:text-[39px] text-center text-white rounded-lg bg-primary-color"
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="bg-secondary-color h-full flex items-center justify-center">
        <img
          className="h-full w-[90%] object-contain object-center"
          src={LoginImg}
          alt="Login"
        />
      </div>
    </div>
  );
};

export default Login;
