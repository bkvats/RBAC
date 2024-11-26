import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Loader() {
    const {isLoading, loadingMessage} = useSelector(state => state.loader);
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = "auto"
        }
    }, [isLoading]);
    return (
        <>
            <div className="dark:bg-white bg-black dark:bg-opacity-15 bg-opacity-50 min-h-screen w-full fixed top-0 z-50 animate-pulse" hidden = {!isLoading}>
            </div>
            <div className={`fixed top-0 ${isLoading ? "translate-y-10" : "-translate-y-16"} py-2 px-3 z-50 left-6 lg:left-[32.5%] w-[90%] lg:w-[35%] h-14 flex items-center bg-white dark:bg-black gap-4 rounded-2xl text-xl font-bold transition duration-300 origin-top`}>
                <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin-slow"></div>
                <span className="text-black dark:text-white">{loadingMessage}</span>
            </div>
        </>
    );
}