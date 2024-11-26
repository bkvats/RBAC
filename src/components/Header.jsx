import React from "react";
import { NavLink } from "react-router-dom";
import SwitchTheme from "./SwitchTheme";

export default function Header() {
    const navLiks = [
        {
            title: "About",
            to: "/about",
        },
        {
            title: "Contact",
            to: "/contact"
        }
    ];
    return (
        <header className="sticky top-0 bg-[#EFEFEF] dark:bg-gray-950 min-w-full">
            <div className="container mx-auto flex px-4 min-h-16 items-center justify-between">
                <div className="flex flex-col items-center gap-1">
                    <NavLink className="title-font font-medium text-xl text-gray-900 dark:text-white">
                        RBAC
                    </NavLink>
                    <SwitchTheme />
                </div>
                <nav className="ml-auto hidden lg:block text-base">
                    {
                        navLiks.map(i => (
                            <NavLink key={i.to} to={i.to} className="hover:underline hover:text-gray-900 mx-8 dark:text-gray-500 dark:hover:text-gray-600">{i.title}</NavLink>
                        ))
                    }
                </nav>
                <NavLink className="flex items-center border-2 bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">Try Now
                    <svg fill="none" stroke="currentColor" storelinecap="round" storelinejoin="round" storewidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </NavLink>
            </div>
        </header>
    );
}