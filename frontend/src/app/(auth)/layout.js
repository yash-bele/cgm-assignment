export default function AuthLayout({ children }) {
  return (
    <main className="w-screen h-screen bg-[url(/auth-bg.png)] bg-cover bg-center grid place-items-center">
      {children}
    </main>
  );
}
