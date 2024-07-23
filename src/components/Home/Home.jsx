import React from 'react'

export default function Home() {
    return (
        <>
            <div className='scroll-smooth w-full h-screen flex justify-center mt-5 font-sans'>
                <div className='w-11/12 flex flex-col justify-center'>
                    <div className='w-full h-1/2 flex justify-around items-center'>
                        <img src="https://thumbs.dreamstime.com/b/freelancer-worker-work-laptop-remotely-beach-freelance-web-developer-programmer-coding-living-tropic-resort-island-234064191.jpg" alt="beach coder image" className='w-1/3 h-full' />
                        <p className='w-1/2 text-lg text-justify'>
                            <span className='text-4xl'>👋Hi,</span> I recently developed a Portfolio using <span className='text-orange-500 font-medium'>React Js.</span>, leveraging its component-based architecture to create a modular and maintainable codebase. The project integrates with a <span className='text-orange-500 font-medium'>Github API</span> to fetch and render real-time data, ensuring users always have the most up-to-date information.
                        </p>
                    </div>
                    <div className='w-full h-1/2 my-5 flex felx-row justify-around items-center'>
                        <p className='w-1/2 text-lg text-justify'>
                            By utilizing React Routers, I managed to handle state and side effects efficiently, enhancing the overall user experience. The application also features responsive design using <span className='text-orange-500 font-medium'>Tailwind CSS</span> framework, ensuring it performs well across various devices and screen sizes. This project not only highlights my proficiency in ReactJS but also my ability to integrate and work with external APIs to deliver a seamless and engaging user interface.
                        </p>
                        <img src="https://user-images.githubusercontent.com/115187902/230700872-d5f44b85-56c7-4e27-80a4-6e2db901e60c.gif" alt="coder gif" className='w-1/3 h-full rounded-xl' />
                    </div>
                </div>
            </div>
        </>
    )
}
