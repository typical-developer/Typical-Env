// lib
import { cn } from "../lib/utils.js";

// layout
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function MainLayout({ className, children }) {
  return (
    <>
      <Navbar />
      <main className={cn("min-h-svh container max-w-7xl px-4")}>
        {children}
      </main>
      <Footer />
    </>
  );
}
