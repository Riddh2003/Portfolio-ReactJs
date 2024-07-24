import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer className='w-full flex justify-center'>
                <div className='w-11/12 p-3 bg-orange-400 rounded shadow-orange-400 shadow-lg flex flex-col items-center gap-4'>
                    <div className='w-full flex flex-row justify-around'>
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
                                        to={"/project"}
                                        className={({ isActive }) => `
                                    block py-2 px-4 ${isActive ? "text-black" : "text-white"} hover:text-black`}>
                                        Project
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/resume"}
                                        className={({ isActive }) => `
                                    block py-2 px-4 ${isActive ? "text-black" : "text-white"} hover:text-black`}>
                                        Resume
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
                        <div className='w-1/6 flex justify-evenly'>
                            <a target="_blank" href="https://www.linkedin.com/in/riddh-modi-29a348226/"><img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="linked icon" className='w-10 h-10 cursor-pointer' /></a>
                            <a target="_blank" href="https://github.com/riddh2003"><img src="https://img.icons8.com/?size=100&id=106567&format=png&color=000000" alt="github icon" className='w-10 h-10 cursor-pointer' /></a>
                            <a target="_blank" href="https://leetcode.com/u/RiddhModi/"><img src="https://www.svgrepo.com/show/306328/leetcode.svg" alt="leetcode icon" className='w-10 h-10 cursor-pointer'/></a>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <h1 className='text-black text-md'>Contact Number: +91 9327190021</h1>
                        <h1 className='text-black text-md'>Email: riddhmodi2003@gmail.com</h1>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <h1 className='text-black text-md font-medium'>Copyright <span className='text-black font-extrabold text-lg'>©</span> 2024 Riddh Modi</h1>
                    </div>
                </div>
            </footer>
        </>
    )
}