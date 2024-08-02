import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function GitHub() {
    const data = useLoaderData();
    return (
        <div className='w-full min-h-screen flex justify-center items-center px-4'>
            <div className='w-full max-w-md flex flex-col items-center justify-start gap-6 text-center'>
                <h1 className='text-xl md:text-2xl'>GitHub Followers: <span className='font-bold'>{data.followers}</span></h1>
                <img src={data.avatar_url} alt="Git Picture" className='w-40 md:w-60 rounded-full shadow-lg' />
                <h1 className='text-2xl md:text-3xl text-orange-500 font-semibold'>{data.name}</h1>
                <a 
                    target='_blank' 
                    rel="noopener noreferrer"
                    href={data.html_url} 
                    className='link text-lg md:text-xl font-medium text-blue-500 hover:text-blue-700 transition-colors duration-300'
                >
                    GitHub Profile
                    <span className='ml-2'>
                        <i className='fa-solid fa-arrow-up-right-from-square'/>
                    </span>
                </a>
                {data.bio && <p className='text-sm md:text-base text-gray-600'>{data.bio}</p>}
                <div className='flex gap-4 text-sm md:text-base'>
                    <p>Public Repos: <span className='font-bold'>{data.public_repos}</span></p>
                    <p>Public Gists: <span className='font-bold'>{data.public_gists}</span></p>
                </div>
            </div>
        </div>
    )
}

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Riddh2003')
    return response.json();
}