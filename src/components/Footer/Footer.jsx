import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='w-full flex justify-center'>
            <div className='w-full p-3 bg-orange-400 shadow-orange-400 shadow-lg flex flex-col items-center gap-4'>
                <div className='w-full flex flex-col md:flex-row justify-around items-center'>
                    <nav className='mb-4 md:mb-0'>
                        <ul className='flex flex-wrap justify-center gap-2 md:gap-4'>
                            {['', 'about', 'project', 'resume', 'github'].map((path, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={path === '' ? '/' : `/${path}`}
                                        className={({ isActive }) => `
                                            block text-sm md:text-md py-1 px-2 md:py-2 md:px-4 
                                            ${isActive ? "text-black" : "text-white"} 
                                            hover:text-black text-sm md:text-base`}>
                                        {path === '' ? 'Home' : path.charAt(0).toUpperCase() + path.slice(1)}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className='flex justify-evenly gap-4 mt-4 md:mt-0'>
                        {[
                            { href: "https://www.linkedin.com/in/riddh-modi-29a348226/", src: "https://img.icons8.com/?size=100&id=8808&format=png&color=000000", alt: "linked icon" },
                            { href: "https://github.com/riddh2003", src: "https://img.icons8.com/?size=100&id=106567&format=png&color=000000", alt: "github icon" },
                            { href: "https://leetcode.com/u/RiddhModi/", src: "https://www.svgrepo.com/show/306328/leetcode.svg", alt: "leetcode icon" }
                        ].map((link, index) => (
                            <a key={index} target="_blank" rel="noopener noreferrer" href={link.href}>
                                <img src={link.src} alt={link.alt} className='w-8 h-8 md:w-10 md:h-10 cursor-pointer' />
                            </a>
                        ))}
                    </div>
                </div>
                <div className='w-full flex flex-col items-center text-center'>
                    <h1 className='text-black text-sm md:text-md'>Contact Number: +91 9327190021</h1>
                    <h1 className='text-black text-sm md:text-md'>Email: riddhmodi2003@gmail.com</h1>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <h1 className='text-black text-sm md:text-md font-medium'>
                        Copyright <span className='text-black font-extrabold text-base md:text-lg'>©</span> 2024 Riddh Modi
                    </h1>
                </div>
            </div>
        </footer>
    )
}