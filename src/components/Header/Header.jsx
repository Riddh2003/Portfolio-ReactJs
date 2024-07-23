import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <header className='top-2 sticky w-full flex justify-center'>
            <nav className='flex justify-center bg-orange-400 shadow-orange-400 shadow-md p-0 w-11/12 rounded'>
                <div className='flex justify-between w-11/12 items-center p-3'>
                    <div>
                        <h1 className='bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent text-3xl font-medium'>Riddh Modi<span className='ml-1 border-r-8 border-gray-900'></span><span className='ml-1 border-r-8 border-gray-700'></span><span className='ml-1 border-r-8 border-gray-500'></span></h1>
                    </div>
                    <div>
                        <ul className='flex justify-center gap-4'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-black" : "text-white"} hover:text-black`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-black" : "text-white"}  hover:text-black`}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/project"
                                    className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-black" : "text-white"}  hover:text-black`}>
                                    Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-black" : "text-white"}  hover:text-black`}>
                                    GitHub
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}