import Header from "@/components/Header";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My App",
  description: "My App Description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <body>{children}</body>
      <Footer />
    </>
  );
}
