"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ImSpinner9 } from "react-icons/im";
import { useLoginUserMutation } from "@/store/api";

export default function SignIn() {
  const [loginUser, { isLoading, isSuccess, isError, data }] = useLoginUserMutation();
  const [inputs, setInputs] = useState({ user: "", password: "" });

  const handleChange = (param) => (e) => setInputs({ ...inputs, [param]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { user, password } = inputs;
    loginUser({ userName: user, email: user, password });
  };

  useEffect(() => {
    isSuccess && localStorage.setItem("token", data);
    isError && toast.error("Login failed!");
  }, [isSuccess, isError]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative w-96 aspect-square rounded-3xl backdrop-blur-md border-2 border-white/15 shadow text-white py-5 px-10 space-y-5 font-light flex flex-col justify-center">
        <h1 className="absolute text-3xl text-center top-5 left-0 w-full">Sign in</h1>
        <div className="h-10 border-2 border-white/25 rounded-full">
          <input value={inputs.user} onChange={handleChange("user")} required spellCheck="false" type="text" placeholder="Username or Email*" className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75" />
        </div>
        <div className="h-10 border-2 border-white/25 rounded-full">
          <input value={inputs.password} onChange={handleChange("password")} required spellCheck="false" type="text" placeholder="Password*" className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75" />
        </div>
        <button type="submit" disabled={isLoading} className="h-10 rounded-full bg-white duration-100 text-black w-full text-xl font-normal grid place-items-center active:scale-95 disabled:active:scale-100 disabled:cursor-not-allowed">
          {isLoading ? <ImSpinner9 className="animate-spin text-black/50" /> : "Sign in"}
        </button>
        <p className="text-white/75">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-white cursor-pointer">
            Sign up
          </Link>
        </p>
      </form>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} theme="light" />
    </div>
  );
}
