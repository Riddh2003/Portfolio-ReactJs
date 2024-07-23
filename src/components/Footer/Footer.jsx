import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer className='w-full flex justify-center'>
                <div className='w-11/12 p-3 bg-orange-400 rounded shadow-orange-400 shadow-lg flex flex-col items-center gap-4'>
                    <div className='w-full flex flex-row justify-evenly'>
                        <h1 className='text-black text-lg font-medium p-2'>Copyright <span className='text-black font-extrabold text-lg'>©</span> 2024 Riddh Modi</h1>
                        <div>
                            <ul className='flex justify-center gap-4'>
                                <li>
                                    <NavLink
                                        to={""}
                                        className={({ isActive }) => `
                                    block py-2 px-4 ${isActive ? "text-black" : "text-white"} hover:text-black`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/about"}
                                        className={({ isActive }) => `
                                    block py-2 px-4 ${isActive ? "text-black" : "text-white"}  hover:text-black`}>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/contact"}
                                        className={({ isActive }) => `
                                    block py-2 px-4 ${isActive ? "text-black" : "text-white"} hover:text-black`}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/github"}
                                        className={({ isActive }) => `
                                    block py-2 px-4 ${isActive ? "text-black" : "text-white"} hover:text-black`}>
                                        GitHub
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <h1 className='text-black text-md font-medium p-2'>Contact Number: +91 9327190021</h1>
                        <h1 className='text-black text-md font-medium p-2'>Email: riddhmodi2003@gmail.com</h1>
                    </div>
                </div>
            </footer>
        </>
    )
}