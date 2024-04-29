import Link from "next/link";

export default function SignUp() {
  return (
    <main className="relative w-[550px] aspect-square rounded-3xl backdrop-blur-md border-2 border-white/15 shadow text-white py-5 px-7 space-y-5 font-light flex flex-col justify-center">
      <h1 className="absolute text-3xl text-center top-5 left-0 w-full">
        Sign up
      </h1>
      <section className="flex space-x-5">
        <div className="h-10 border-2 border-white/25 rounded-full w-full">
          <input
            type="text"
            placeholder="First name"
            className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75"
          />
        </div>
        <div className="h-10 border-2 border-white/25 rounded-full w-full">
          <input
            type="text"
            placeholder="Last name"
            className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75"
          />
        </div>
      </section>
      <section className="flex space-x-5">
        <div className="h-10 border-2 border-white/25 rounded-full w-full">
          <input
            type="text"
            placeholder="User name"
            className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75"
          />
        </div>
        <div className="h-10 border-2 border-white/25 rounded-full w-full">
          <input
            type="number"
            placeholder="Phone number"
            className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75"
          />
        </div>
      </section>
      <section className="flex space-x-5">
        <div className="h-10 border-2 border-white/25 rounded-full w-full">
          <input
            type="email"
            placeholder="Email address"
            className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75"
          />
        </div>
        <div className="h-10 border-2 border-white/25 rounded-full w-full">
          <input
            type="text"
            placeholder="Password"
            className="outline-none w-full h-full px-5 bg-transparent placeholder:text-white/75"
          />
        </div>
      </section>
      <div className="w-full">
        <label htmlFor="formFile" className="mb-1 inline-block text-white/75">
          Upload your profile pic
        </label>
        <input
          className="relative m-0 block w-full min-w-0 flex-auto rounded-full border-2 border-white/25 bg-clip-padding px-3 py-[0.32rem] transition duration-200 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:shadow-te-primary focus:outline-none"
          type="file"
          id="formFile"
        />
      </div>
      <button className="h-10 rounded-full bg-white duration-100 text-black w-full text-xl font-normal active:scale-95">
        Sign in
      </button>
      <p className="text-white/75">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-white cursor-pointer">
          Sign in
        </Link>
      </p>
    </main>
  );
}
