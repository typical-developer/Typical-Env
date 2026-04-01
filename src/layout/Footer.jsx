// lib
import { cn } from "../lib/utils.js";

export default function Footer({ className }) {
  return (
    <>
      {" "}
      <footer className={cn("w-full bg-black text-white")}>
        <div className="flex items-center justify-center px-4 py-2.5 text-sm">
          <a href="https://github.com/typical-developer" className="hover:underline">
            &copy; Nzenwata Christopher
          </a>
        </div>
      </footer>
    </>
  );
}
