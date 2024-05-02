export default function Loading() {
  return (
    <div className="grid grid-cols-5 grid-rows-2 flex-1 gap-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div key={i} className="bg-slate-800 rounded-xl grid place-items-center relative animate-pulse">
          <div className=" w-12 aspect-square rounded-full bg-cover bg-center absolute top-5 left-5 bg-slate-700 animate-pulse" />
          <button className="w-28 h-7 grid place-items-center rounded-full absolute bottom-5 right-5 active:scale-95 text-sm shadow bg-slate-700 animate-pulse"></button>
        </div>
      ))}
    </div>
  );
}
