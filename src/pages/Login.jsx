import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { displayToast, setShowToast } from "../store/toastSlice";
import { useDispatch, useSelector } from "react-redux";
import { displayLoader, setIsLoading } from "../store/loaderSlice";
import { login } from "../store/userSlice";
import database from "../../public/database.json"

export default function Login() {
    const db = localStorage.getItem("database") || database;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isLoggedIn} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn]);
    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <NavLink to={"/"} className="flex items-center mb-6 text-4xl font-light text-gray-900 dark:text-white font-['Parkinsans']">
                    RBAC
                </NavLink>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-500 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" value={email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="demo: bkvats2394@gmail.com" onChange={(event) => {setEmail(event.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="demo: 12345" value={password} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" onChange={(event) => {setPassword(event.target.value)}}/>
                            </div>
                            <NavLink to={"/access-blocked"} className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-500 mt-4">Forgot password?</NavLink>
                            <button className="w-full text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-orange-700 dark:focus:ring-orange-800" onClick={(event) => {
                                event.preventDefault();
                                dispatch(setShowToast(false));
                                if (!email || !password) dispatch(displayToast({type: "warning", message: "All fields are required!"}));
                                else {
                                    dispatch(displayLoader("Checking credentials..."));
                                    // If trying logging in via a backend api
                                    // const response = axios.post("/api/user/v1/login", {email, password});
                                    // if (response.status == 200) {
                                    //     can perform further logic here according to the data retrieved from api
                                    // }
                                    setTimeout(() => {
                                        let found = false;
                                        for (let i = 0; i < db.length; i++) {
                                            if (db[i].email === email && db[i].password === password) {
                                                dispatch(setIsLoading(false));
                                                found = true
                                                dispatch(login(db[i]));
                                                localStorage.setItem("currentUser", JSON.stringify(db[i]));
                                                navigate("/");
                                            }
                                        }
                                        dispatch(setIsLoading(false));
                                        if (!found) dispatch(displayToast({type: "error", message: "Invalid login credentials!"}));
                                    }, 1500);
                                }
                            }}>Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <NavLink to={"/access-blocked"} className="font-medium text-orange-600 hover:underline">Register Now</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}