import { cn } from "../utils/cn.js";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";

export default function About({ className }) {
  return (
    <>
      <div className={cn("flex-center min-h-svh", className)}>
        <Link to="/">
          <Button lassName="font-code">
            <i className="bx bx-home"></i>
            View Home Page
          </Button>
        </Link>
      </div>
    </>
  );
}
