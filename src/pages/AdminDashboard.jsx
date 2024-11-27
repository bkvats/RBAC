import React, { useRef, useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import database from "../../public/database.json"
import getShortName from "../utils/getShortName";
import { TbHexagonLetterR, TbHexagonLetterRFilled, TbHexagonLetterW, TbHexagonLetterWFilled, TbHexagonLetterD, TbHexagonLetterDFilled } from "react-icons/tb";

export default function AdminDashboard() {
    // To make persistant changes in data we can use backend database and then call apis according to that, this code only contains demo ui part (as per the requirements), further api calls and backend handling part can be added.

    // Things that can be added further:
    // 1. Api calls and handling data for all users.
    // 2. Pagination of users shown on the screen, (for example 10 pages once).
    // 3. Or infinite scroll technique can be used.
    // 4. To keep data persistant save data somewhere in database via a backend server.
    
    const [allUsers, setAllUsers] = useState(database);
    const [searchInput, setSearchInput] = useState("");
    return (
        <section className="w-full p-4 lg:w-3/4 mx-auto border-0 border-red-700">
            <div className="max-w-md mx-auto my-10">
                <div className="">
                    <div className="absolute top-32 mt-[11px] flex items-center ps-3 pointer-events-none">
                        <IoIosSearch className="text-xl text-gray-600 dark:text-gray-300" />
                    </div>
                    <input value={searchInput} className="w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Users..." onChange={(event) => {
                        setSearchInput(event.target.value);
                        setAllUsers(database.filter(i => {
                            if (i.name.toLowerCase().includes(event.target.value.toLowerCase())) {
                                console.log("found matching");
                                return true;
                            }
                        }));
                    }}/>
                </div>
            </div>
            <div>
                {
                    allUsers.map((i, index) => (
                        <div className="my-2 bg-white dark:bg-gray-700 p-4 rounded-xl flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between lg:items-center" key={i.id}>
                            <div className="flex gap-2 items-center border-0 border-red-500">
                                <div className={`border-2  text-xl font-light min-w-12 min-h-12 max-w-12 max-h-12 text-center text-white py-2 font-['Parkinsans'] ${i.bgColor} rounded-full`} onClick={() => { setUserOptionsVisible(prev => !prev) }}> {getShortName(i.name)} </div>
                                <div>
                                    <span className="line-clamp-1 dark:text-white">{i.name}</span>
                                    <span className="line-clamp-1 text-gray-500 dark:text-gray-300 font-light">{i.email}</span>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/5 grid grid-cols-3 items-center border-0 border-green-500">
                                <span className="border-0 border-red-500 dark:text-white">{i.role.toUpperCase()}</span>
                                <button className={`inline-flex gap-2 w-fit items-center ${i.status === "Active" ? "mx-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"} font-medium px-2.5 py-0.5 rounded-full`} onClick={() => {
                                    allUsers[index].status = i.status === "Active" ? "Inactive" : "Active";
                                    setAllUsers([...allUsers]);
                                }}>
                                    <span className={`w-2 h-2 me-1 ${i.status === "Active" ? "bg-green-500" : "bg-red-500"} rounded-full`}></span>
                                    {i.status}
                                </button>
                                <div className="text-3xl flex gap-2 items-center">
                                    <button onClick={() => {
                                        i.permissions.read = !i.permissions.read;
                                        setAllUsers([...allUsers]);
                                    }}>
                                        {
                                            i.permissions.read ? <TbHexagonLetterRFilled className="text-green-800" /> : <TbHexagonLetterR className="text-green-100" />
                                        }
                                    </button>
                                    <button onClick={() => {
                                        i.permissions.write = !i.permissions.write;
                                        setAllUsers([...allUsers]);
                                    }}>
                                        {
                                            i.permissions.write ? <TbHexagonLetterWFilled className="text-blue-600" /> : <TbHexagonLetterW className="text-blue-200" />
                                        }
                                    </button>
                                    <button onClick={() => {
                                        i.permissions.delete = !i.permissions.delete;
                                        setAllUsers([...allUsers]);
                                    }}>
                                        {
                                            i.permissions.delete ? <TbHexagonLetterDFilled className="text-red-600" /> : <TbHexagonLetterD className="text-red-200" />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}