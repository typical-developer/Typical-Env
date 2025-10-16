import { Button } from "../components/ui/button.jsx";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn.js";

export default function Home({className}) {
  return (
    <>
      <div className={cn("flex min-h-svh flex-center", className)}>
        <Link to="/about">
          <Button 
            data-aos="fade-up"
            className="font-code">
            <i className="bx bx-question-mark"></i>
            View About Page
          </Button>
        </Link>
      </div>
    </>
  );
}
