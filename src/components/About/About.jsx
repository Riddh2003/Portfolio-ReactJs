import React from 'react'
import './About.css'
function About() {
    return (
        <>
            <div className='w-full h-screen flex justify-center my-20'>
                <div className='w-11/12 flex flex-col justify-center items-center'>
                    <div className='w-full flex flex-row justify-around items-center'>
                        <div className='w-1/2 h-full flex flex-col items-center justify-evenly text-justify'>
                            <h1 className='text-6xl font-serif'>Know Who I Am?</h1>
                            <p className='text-xl'>My name is Riddh Modi. Pursuing a Bachelor of Engineering in Computer Engineering from Ahmedabad Institute of Technology. Passionate & Knowledge about <span className=' text-orange-500 font-medium'>Java Full Stack Development & Android App Development</span>. Currently, I am in my final year. After my graduation, will shifting career into any big technology like wise <span id='tech' className=' text-orange-500 font-medium'>AI, Cyber Security, DevOps, Data Analytics.</span></p>
                        </div>
                        <img src="/src/Image/photo.jpg" alt="my pic" className='w-1/4 rounded-xl' />
                    </div>
                    <div className='w-full h-full flex flex-col justify-evenly items-center'>
                        <h1 className='text-4xl font-medium font-sans'>Languages</h1>
                        <div className='w-full grid grid-cols-5 gap-6 justify-items-center mt-5'>
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a55359db-8be9-4150-8c22-c4f54b6dfc96/df1d241-485b9236-f0ac-4804-a77d-6495d852801d.png" alt="C" className='w-40 h-40 cursor-pointer rounded-xl shadow-lg shadow-gray-500 p-4' />

                            <img src="https://i.pinimg.com/736x/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.jpg" alt="C" className='w-40 h-40 cursor-pointer rounded-xl shadow-lg shadow-gray-500 p-4' />

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsq-7f5BWyog4cdeT1sQaYLVzhJ0o37Up8TjHvVU08WUgfyyMMRMHTVwJ5XReSjyhZa0&usqp=CAU" alt="C" className='w-40 h-40 cursor-pointer rounded-xl shadow-lg shadow-gray-500 p-4' />

                            <img src="https://developer.android.com/static/images/brand/Android_Robot.png" alt="android" className='w-40 h-40 border-2 cursor-pointer rounded-xl shadow-lg shadow-gray-500 p-4' />

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s" alt="react" className='w-40 h-40  cursor-pointer rounded-xl shadow-lg shadow-gray-500 p-4' />

                            <img src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png" alt="spring boot" className='w-40 h-40  cursor-pointer rounded-xl shadow-lg shadow-gray-500' />

                            <img src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png" alt="oracle" className='w-40 h-40  cursor-pointer rounded-xl shadow-lg shadow-gray-500 p-4' />

                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="C" className='w-40 h-40  cursor-pointer rounded-xl shadow-lg shadow-gray-500 p-4' />

                            <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="C" className='w-40 h-40  cursor-pointer rounded-xl shadow-lg shadow-gray-500 p-4' />

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="C" className='w-40 h-40  cursor-pointer rounded-xl shadow-lg shadow-gray-500 p-4' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default About
