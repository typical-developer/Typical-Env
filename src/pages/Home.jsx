// react-router
import { Link } from "react-router";

// lib
import { cn } from "../lib/utils.js";

// layout
import MainLayout from "../layout/MainLayout.jsx";

export default function Home({ className }) {
  return (
    <>
      <MainLayout>
        <h1 className={cn("", className)}>
          Current Page:<span className="font-bold">Home</span>
        </h1>
        <Link to="/about" className="hover:underline">
          Go to About
        </Link>
      </MainLayout>
    </>
  );
}
