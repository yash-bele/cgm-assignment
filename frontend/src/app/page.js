import { redirect } from "next/navigation";

export default function RedirectToAuth() {
  return redirect("/sign-in");
}
