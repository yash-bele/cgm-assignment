import Link from "next/link";

export default function SignIn() {
  return (
    <main className="relative w-96 aspect-square rounded-3xl backdrop-blur-md border-2 border-white/15 shadow text-white py-5 px-10 space-y-5 font-light flex flex-col justify-center">
      <h1 className="absolute text-3xl text-center top-5 left-0 w-full">
        Sign in
      </h1>
      <div className="h-10 border-2 border-white/25 rounded-full">
        <input
          type="email"
          placeholder="Email address"
          className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75"
        />
      </div>
      <div className="h-10 border-2 border-white/25 rounded-full">
        <input
          type="text"
          placeholder="Password"
          className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75"
        />
      </div>
      <button className="h-10 rounded-full bg-white duration-100 text-black w-full text-xl font-normal active:scale-95">
        Sign in
      </button>
      <p className="text-white/75">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-white cursor-pointer">
          Sign up
        </Link>
      </p>
    </main>
  );
}
