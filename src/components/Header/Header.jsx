import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='sticky top-2 w-full flex justify-center z-50'>
            <nav className='flex flex-col md:flex-row justify-center bg-orange-400 shadow-orange-400 shadow-md p-2 w-11/12 rounded'>
                <div className='flex justify-between w-full items-center p-1 md:p-2'>
                    <div>
                        <h1 className='bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent text-xl md:text-2xl font-medium'>
                            Riddh Modi
                            <span className='ml-1 border-r-4 md:border-r-8 border-gray-900'></span>
                            <span className='ml-1 border-r-4 md:border-r-8 border-gray-700'></span>
                            <span className='ml-1 border-r-4 md:border-r-8 border-gray-500'></span>
                        </h1>
                    </div>
                    <button 
                        className='md:hidden text-2xl text-white hover:text-black'
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
                    <ul className='flex flex-col h-full items-center md:flex-row justify-center gap-2 md:gap-4'>
                        {['Home', 'About', 'Project', 'Resume', 'GitHub'].map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className={({ isActive }) => 
                                        `block text-center text-sm md:text-md md:text-md px-6 
                                        ${isActive ? "text-black" : "text-white"} 
                                        hover:text-black`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}