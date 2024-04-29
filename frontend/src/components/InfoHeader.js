import { BsPersonVcardFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="w-full h-16 bg-slate-800 rounded-xl flex items-center justify-between px-5">
      <span className="text-2xl font-light">Dashboard</span>
      <div className="flex items-center space-x-10">
        <div className="relative mt-3">
          <BsPersonVcardFill className="text-slate-500 text-3xl" />
          <div className="w-7 aspect-square rounded-full bg-blue-500 absolute -top-3 -right-3 grid place-items-center text-xs shadow">
            75
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${"/auth-bg.png"})` }}
          className=" w-12 aspect-square rounded-full bg-cover bg-center"
        />
      </div>
    </div>
  );
}
