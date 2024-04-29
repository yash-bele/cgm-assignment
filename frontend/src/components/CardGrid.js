export default function CardGrid() {
  return (
    <div className="grid grid-cols-5 flex-1 gap-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div
          key={i}
          className="bg-slate-800 rounded-xl grid place-items-center relative"
        >
          <div className="flex flex-col font-light text-sm text-center tracking-widest">
            <span>
              uSeRnAmE{" "}
              <span className="text-xs text-slate-400">(user name)</span>
            </span>
            <span className="capitalize">
              ganesh{" "}
              <span className="text-xs text-slate-400 lowercase">
                (first name)
              </span>
            </span>
          </div>
          <div
            style={{ backgroundImage: `url(${"/auth-bg.png"})` }}
            className=" w-12 aspect-square rounded-full bg-cover bg-center absolute top-5 left-5"
          />
          <button className="bg-blue-500 px-5 py-1 rounded-full absolute bottom-5 right-5 active:scale-95 text-sm shadow">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
