import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { setIsLoading, displayLoader } from "../store/loaderSlice";
import SwitchTheme from "./SwitchTheme";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { logout } from "../store/userSlice";

export default function Header() {
    const { isLoggedIn, currentUser } = useSelector(state => state.user);
    const [userOptionsVisible, setUserOptionsVisible] = useState(false);
    const dispatch = useDispatch();
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
    const userOptions = [
        {
            name: "Dashboard",
            to: "/dashboard",
            icon: <MdDashboard />
        },
        {
            name: "Documentation",
            to: "",
            icon: <GrDocumentPerformance />
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
                {isLoggedIn ? <div>
                    <button className="border-2 text-xl font-['Parkinsans'] hover:border-orange-500 bg-white rounded-full py-1 px-[11px]" onClick={() => { setUserOptionsVisible(prev => !prev) }}> {currentUser.name.at(0)} </button>
                    <div className={`${userOptionsVisible ? "scale-100" : "scale-0"}  absolute  top-14 right-5 border-[1px] border-white dark:border-black bg-white dark:bg-gray-700 rounded-lg overflow-auto transition-transform origin-top-right`}>
                        <ul className="bg-white dark:bg-gray-700 w-full py-1 px-2 text-lg">
                            {
                                userOptions.map((i) => (
                                    <li key={i.name} className="hover:underline my-2 dark:text-white">
                                        <Link to={i.to} onClick={() => {setUserOptionsVisible(false)}} className="flex items-center space-x-2">
                                            {i.icon}
                                            <span>{i.name}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                            <hr />
                            <li className="flex space-x-2 my-2 items-center hover:underline cursor-pointer dark:text-white" onClick={async () => {
                                dispatch(displayLoader("Logging you out..."));
                                // Logout via api
                                // const response = await axios.post("/api/v1/users/logout");
                                // if (response.status == 200) {
                                //     dispatch(logout());
                                // }
                                setTimeout(() => {
                                    // Simulating api calls via setTimout
                                    localStorage.removeItem("currentUser");
                                    dispatch(logout());
                                    dispatch(setIsLoading(false));
                                }, 2000)
                            }}>
                                <CiLogout />
                                <span>Log out</span>
                            </li>
                        </ul>
                        <button className="hover:bg-orange-100 rounded-full p-1 mx-20 my-2 text-xl dark:text-white dark:hover:bg-orange-500" onClick={() => {
                            setUserOptionsVisible(prev => !prev);
                        }}>
                            <MdClose />
                        </button>
                    </div>
                </div> : <NavLink to={"/login"} className="flex items-center border-2 bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">Try Now
                    <svg fill="none" stroke="currentColor" storelinecap="round" storelinejoin="round" storewidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </NavLink>}
            </div>
        </header>
    );
}