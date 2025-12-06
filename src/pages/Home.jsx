// react-router
import { Link } from "react-router";

// lib
import { cn } from "../lib/utils.js"; 

export default function Home({className}) {
  return (
    <>
      <h1 className={cn("",className)}>Current Page:<span className="font-bold">Home</span></h1>
      <Link to="/about" className="hover:underline">Go to About</Link>
    </>
  );
}
