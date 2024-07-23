import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function GitHub() {
    const data = useLoaderData();
    return (
        <>
            <div className='w-full h-screen flex justify-center mt-5'>
                <div className='w-11/12 flex flex-col items-center justify-start gap-4'>
                    <h1>GitHub: {data.followers}</h1>
                    <img src={data.avatar_url} alt="Git Picture" className='w-60 rounded-full' />
                    <h1 className='text-3xl text-orange-500'>{data.name}</h1>
                    <a target='_blank' href={data.html_url} className='link text-xl font-medium text-blue-500'>Portfolio
                        <span className='ml-2'>
                            <i className='fa-solid fa-arrow-up-right-from-square'/>
                        </span>
                    </a>
                    <p>{data.repos_url[0].name}</p>
                </div>
            </div>
        </>
    )
}

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Riddh2003')
    return response.json();
}