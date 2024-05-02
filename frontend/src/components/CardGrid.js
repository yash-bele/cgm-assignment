"use client";
import { useFollowUserMutation } from "@/store/api";
import { getCookie } from "cookies-next";

export default function CardGrid({ data, userId }) {
  const [followUser] = useFollowUserMutation();

  return (
    <div className="grid grid-cols-5 grid-rows-2 flex-1 gap-5">
      {data?.map((i) => {
        const followExist = i?.followers?.includes(userId);
        return (
          <div key={i?._id} className="bg-slate-800 rounded-xl grid place-items-center relative">
            <div className="flex flex-col font-light text-sm text-center tracking-widest">
              <span>
                {i?.userName} <span className="text-xs text-slate-400">(user name)</span>
              </span>
              {i?.firstName && (
                <span className="capitalize">
                  {i?.firstName} <span className="text-xs text-slate-400 lowercase">(first name)</span>
                </span>
              )}
            </div>
            <div style={{ backgroundImage: `url(${"/auth-bg.png"})` }} className=" w-12 aspect-square rounded-full bg-cover bg-center absolute top-5 left-5" />
            <button
              onClick={() => followUser({ userId, pointerId: i._id })}
              className={`w-28 h-7 grid place-items-center rounded-full absolute bottom-5 right-5 active:scale-95 text-sm shadow ${followExist ? "bg-blue-500 text-white" : "border-2 border-blue-500 text-blue-500"}`}
            >
              {followExist ? "Following" : "Follow"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
