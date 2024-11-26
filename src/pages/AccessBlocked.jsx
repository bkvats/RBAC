import React from "react";
import { NavLink } from "react-router-dom";

export default function AccessBlocked() {
    return (
        <section className="bg-white p-4 w-[90%] mx-auto rounded-lg dark:bg-gray-800 mt-12">
            <h1 className="text-orange-500 text-4xl font-bold my-4">Access Denied!</h1>
            <p className="text-xl font-light mb-4 dark:text-white">Contact respective admin of your organization for this service</p>
            <NavLink to={"/login"} className="font-medium text-gray-500 dark:text-gray-400 hover:underline">Back to login</NavLink>
        </section>
    )
}