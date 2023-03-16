import type { ReactNode } from "react";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="inline-flex  h-screen w-full flex-col bg-gray-900 text-gray-400">
        <Navbar />
        <main className="bg-gray-900">{children}</main>
        <Footer />
      </div>
    </>
  );
}
