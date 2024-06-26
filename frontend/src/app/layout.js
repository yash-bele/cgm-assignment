import { Montserrat } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import AsyncProvider from "@/store/AsyncProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CGM Assignment",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
