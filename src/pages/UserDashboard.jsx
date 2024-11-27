import React from "react";
import { useSelector } from "react-redux";
import { TbHexagonLetterR, TbHexagonLetterRFilled, TbHexagonLetterW, TbHexagonLetterWFilled, TbHexagonLetterD, TbHexagonLetterDFilled } from "react-icons/tb";

export default function UserDashboard() {
    const { currentUser } = useSelector(state => state.user);
    return (
        <section className="flex flex-col justify-center items-center gap-14 mt-14">
            <div className="text-center space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold dark:text-white">{currentUser.name}</h1>
                <h2 className="text-2xl font-light text-gray-600 dark:text-gray-400">{currentUser.email}</h2>
                <h3 className="text-xl underline dark:text-gray-6=500">{currentUser.role.toUpperCase()}</h3>
            </div>
            <span className={`inline-flex text-2xl gap-2 w-fit items-center ${currentUser.status === "Active" ? "mx-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"} font-medium px-2.5 py-0.5 rounded-full`}>
                <span className={`w-2 h-2 me-1 ${currentUser.status === "Active" ? "bg-green-500" : "bg-red-500"} rounded-full`}></span>
                {currentUser.status}
            </span>
            <div className="text-5xl flex gap-2 items-center">
                <span>
                    {
                        currentUser.permissions.read ? <TbHexagonLetterRFilled className="text-green-800" /> : <TbHexagonLetterR className="text-green-100" />
                    }
                </span>
                <span>
                    {
                        currentUser.permissions.write ? <TbHexagonLetterWFilled className="text-blue-600" /> : <TbHexagonLetterW className="text-blue-200" />
                    }
                </span>
                <span>
                    {
                        currentUser.permissions.delete ? <TbHexagonLetterDFilled className="text-red-600" /> : <TbHexagonLetterD className="text-red-200" />
                    }
                </span>
            </div>
        </section>
    );
}