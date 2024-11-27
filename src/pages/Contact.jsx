import React from "react";

export default function Contact() {
    return (
        <section className="flex flex-col justify-center items-center gap-14 mt-14">
            <img className="w-72 h-72 rounded-full" src="https://bkvats.github.io/MemoryGame/images/me.jpg"></img>
            <div className="text-center space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold dark:text-white">Bhupender Kumar Sharma</h1>
                <h2 className="text-2xl font-light text-gray-600 dark:text-gray-400">bkvats2394@gmail.com</h2>
                <h3 className="text-xl underline dark:text-gray-600">Designer and Developer</h3>
            </div>
        </section>
    )
}