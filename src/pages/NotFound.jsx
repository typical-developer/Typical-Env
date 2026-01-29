// lib
import { cn } from "../lib/utils.js";

// react-router
import { NavLink } from "react-router";

export default function NotFound({className}){
    return(<>
        <div className={cn("min-h-svh flex items-centre justify-center", className)}>
            <div className="flex-center flex-col gap-2">
                <h1 className="text-5xl font-bold">Page Not Found</h1>
                <NavLink to={"/"} className={({isActive}) => cn("hover:underline", isActive && "text-red-400")}>
                    Go back to Home Page
                </NavLink>
            </div>
        </div>
    </>);
}
