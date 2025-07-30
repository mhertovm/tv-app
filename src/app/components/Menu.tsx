'use client'
import { useState } from "react";

export default function Menu() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const menuItems = [
        { icon: '/assets/icons/ICON - Search.png', label: 'Search' },
        { icon: '/assets/icons/Group 46.png', label: 'Home' },
        { icon: '/assets/icons/Group 56.png', label: 'TV Shows' },
        { icon: '/assets/icons/Group 54.png', label: 'Movies' },
        { icon: '/assets/icons/Group 53.png', label: 'Genres' },
        { icon: '/assets/icons/Group 47.png', label: 'Watch Later' },
    ];

    const bottomItems = [
        { label: 'Language' },
        { label: 'Get Help' },
        { label: 'Exit' },
    ];

    return (
        <div className={`fixed top-0 left-0 h-full z-100 transition-colors duration-400 ${isHovered ? ' bg-gradient-to-r from-[#040404] to-transparent w-full' : 'w-[172px]'}`}>
            <div
                className={`mt-[60px] pb-[65px] flex flex-col justify-between h-full pl-[32px] ${isHovered ? 'w-[400px]' : ' w-[172px] '}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
            >
                <div className="h-[82px] pb-[100px]">
                    {isHovered &&
                        <div className="cursor-pointer flex gap-[20px] flex-row items-center">
                            <img
                                src="/prof.png"
                                alt="Profile"
                                className="w-[82px] rounded-[50%] object-cover ml-[15px]"
                            />
                            <span className="text-[36px]">Mher</span>
                        </div>
                    }
                </div>
                <div
                    className={`flex flex-col  w-[122px] transition-width duration-400 ${isHovered ? 'w-[312px] gap-[30px]' : 'gap-[30px]'} `}
                >
                    {menuItems.map((item) => (
                        <div
                            key={item.label}
                            className={`flex items-center rounded-xl gap-[50px] p-[36px] cursor-pointer h-[36px] hover:bg-[#858688]`}
                        >
                            <img src={item.icon} alt={item.label} />
                            {isHovered && (
                                <div className="text-[36px] whitespace-nowrap">{item.label}</div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mb-[65px] flex flex-col">
                    {bottomItems.map((item) => (
                        <div
                            key={item.label}
                            className={`flex items-center cursor-pointer h-[36px] rounded-xl p-[30px]`}
                        >
                            {isHovered && (
                                <div className="text-[36px] whitespace-nowrap tracking-[7px] font-bold text-gray-500">{item.label}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
