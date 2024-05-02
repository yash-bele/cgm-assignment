import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AuthLayout({ children }) {
  const token = cookies().get("token");

  return <>{token ? redirect("/dashboard") : <main className="w-screen h-screen bg-[url(/auth-bg.png)] bg-cover bg-center grid place-items-center">{children}</main>}</>;
}
