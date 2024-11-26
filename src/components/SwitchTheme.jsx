import { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";

export default function SwitchTheme() {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
        if (isToggled) {
            document.body.classList.remove("dark");
        }
        else {
            document.body.classList.add("dark");
        }
    };

    return (
        <div className="flex items-center gap-1">
            <MdDarkMode className="dark:text-white"/>
            <div
                onClick={handleToggle}
                className={`w-11 h-6 flex items-center rounded-full cursor-pointer ${isToggled ? 'bg-orange-500' : 'bg-gray-300'
                    } p-1 transition duration-300 ease-in-out`}
            >
                <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isToggled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                ></div>
            </div>
            <MdWbSunny className="dark:text-white"/>
        </div>
    );
}
