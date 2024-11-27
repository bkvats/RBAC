import React from "react";
import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Home() {
    const {isLoggedIn, currentUser} = useSelector(state => state.user);
    const keyFeatures = [
        {
            name: "User Management",
            description: "Effortlessly manage users within your organization. View detailed user profiles, add new users, edit existing ones, or delete users no longer needed. Assign roles to users seamlessly and toggle their status between Active and Inactive with ease.",
            icon: <FaUsers className="text-6xl lg:text-[6rem]" />
        },
        {
            name: "Role Management",
            description: "Define and customize roles to align with your organization’s hierarchy and requirements. Create roles with precision and edit them as needs evolve. Each role can include specific permissions (e.g., Read, Write, Delete) or custom attributes to enhance flexibility and control.",
            icon: <FaUserGear className="text-5xl lg:text-[5rem]" />
        },
        {
            name: "Dynamic Permissions",
            description: "Grant or modify permissions dynamically for any role. Visualize permissions clearly for a better understanding of access rights, making it simple to adjust and manage access levels for different resources or functionalities.",
            icon: <MdOutlineSecurity className="text-6xl lg:text-[6rem]" />
        }
    ];
    const faqs = [
        {
            question: "What is Role-Based Access Control (RBAC)?",
            answer: "RBAC is a system that assigns access rights to users based on their roles, ensuring they only access what they need."
        },
        {
            question: "Can I add custom permissions to roles?",
            answer: "Yes, you can create roles with custom permissions tailored to your organization’s needs."
        },
        {
            question: "How do I manage a user’s role or status?",
            answer: "You can edit a user’s profile to assign or change their role and toggle their status between Active and Inactive"
        },
        {
            question: "Is it possible to update permissions for a role later ?",
            answer: "Absolutely! You can modify permissions for any role at any time to adapt to changing requirements."
        },
        {
            question: "Can I test functionality without a backend ?",
            answer: "Yes, the application includes an optional feature to simulate API calls for CRUD operations, making testing easy and efficient."
        },
    ];
    return (
        <div className="w-full">
            <div className="w-full lg:w-5/6 mx-auto">
                <section className="first-card">
                    <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded pointer-events-none" alt="hero" src="https://www.denovobi.com/wp-content/uploads/2022/04/cyber-security-illustration-1.png" />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <span className="space-y-8 my-2">
                                <h2 className="text-xl md:text-2xl font-light text-gray-500 dark:text-gray-400">Secure | Simple | User-Friendly</h2>
                                <h1 className="text-5xl lg:text-6xl text-black font-semibold dark:text-white font-['Parkinsans']">{isLoggedIn ? `Welcome ${currentUser.name.split(" ")[0]}`: "RBAC System"}</h1>
                            </span>
                            <p className="my-8 leading-relaxed text-xl text-gray-500 dark:text-gray-400 font-light w-[90%]">Manage user roles and permissions effortlessly with this Role-Based Access Control solution.</p>
                            <div className="flex justify-center">
                                <NavLink to={isLoggedIn ? "/dashboard" : "/login"} className="text-white  py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">{isLoggedIn ? "Dashboard" : "Try Now"}</NavLink>
                                <NavLink className="ml-4 text-gray-700 bg-gray-100 border-2 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read Docs</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="second-card">
                    <h2 className="mb-8 mt-8 text-4xl tracking-tight text-orange-500 text-center">Key Features</h2>
                    <div className="container border-gray-300 md:gap-16 dark:border-gray-700 border-t px-4 lg:px-0 py-10 mx-auto lg:space-y-8">
                        {
                            keyFeatures.map((i, index) => (
                                <div key={i.name} className={`flex items-center lg:w-3/5 mx-auto border-b-black pb-10 mb-10 border-gray-200 flex-col ${index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse gap-2"}`}>
                                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                                        {i.icon}
                                    </div>
                                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                        <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium mb-2">{i.name}</h2>
                                        <p className="leading-relaxed text-gray-500 font-light text-base dark:text-gray-400">{i.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section className="third-card">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <h2 className="mb-8 text-4xl tracking-tight text-orange-500">Frequently asked questions</h2>
                        <div class="grid pt-8 text-left border-t border-gray-300 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                            {
                                faqs.map(i => (
                                    <div className="mb-10" key={i.question}>
                                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            {i.question}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 font-light">{i.answer}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}