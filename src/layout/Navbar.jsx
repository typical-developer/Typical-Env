// react-router
import { NavLink } from "react-router";

// lib
import { cn } from "../lib/utils";

const navLinks = [
    {id: 0, label: "Home", href: "/"},
    {id: 1, label: "About", href: "/about"},
]

export default function Navbar({className}) {
    return(
        <>
        <nav className={cn("w-full bg-black text-white", className)}>
            <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 py-2 5
            ">
                {/* logo */}
                <NavLink to={"/"}>Navbar</NavLink>

                {/* navlinks */}
                <ul className="flex items-center gap-4">
                    {navLinks.map(({id,label,href}) => 
                    <li key={id}>
                        <NavLink to={href} className={({isActive}) => cn(isActive && "text-red-400")}>
                            {label}
                        </NavLink>
                    </li>
                    )}
                </ul>
            
            </div>
        </nav>
        </>
    )
}