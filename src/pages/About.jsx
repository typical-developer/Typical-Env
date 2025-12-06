// react-router
import { Link } from 'react-router';

// lib
import {cn} from "../lib/utils.js"

export default function About({ className }) {
  return (
    <>
      <h1 className={cn("",className)}>Current Page:<span className="font-bold">About</span></h1>
      <Link to="/" className="hover:underline">Go to Home</Link>
    </>
  );
}

