"use client";
import { ImExit } from "react-icons/im";
import { BsPersonVcardFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/authSlice";

export default function Header({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(setToken(null));
    deleteCookie("token");
    router.replace("/sign-in");
  };

  return (
    <div className="w-full h-16 bg-slate-800 rounded-xl flex items-center justify-between px-5">
      <h1 className="text-2xl font-light">Dashboard {data && <span className="text-base tracking-widest">{`- ${data?.userName}`}</span>}</h1>
      <div className="flex items-center">
        <div className="relative mt-3 mr-10">
          <BsPersonVcardFill className="text-slate-500 text-3xl" />
          <div className="w-7 aspect-square rounded-full bg-blue-500 absolute -top-3 -right-3 grid place-items-center text-xs shadow">{data?.followings?.length}</div>
        </div>
        <div style={{ backgroundImage: `url(${"/auth-bg.png"})` }} className=" w-12 aspect-square rounded-full bg-cover bg-center mr-7" />
        <ImExit onClick={handleExit} className="text-red-500 cursor-pointer text-3xl" />
      </div>
    </div>
  );
}
