import type { ReactNode } from "react";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="inline-flex  h-screen w-full flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
