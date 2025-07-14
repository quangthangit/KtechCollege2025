import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";

export const metadata = {
  title: "My App",
  description: "Build modern apps with ease.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="mdl-js">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
