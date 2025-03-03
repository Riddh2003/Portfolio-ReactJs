import React from 'react';
import resume1 from '../Resume/resume1.jpg';
import resume2 from '../Resume/resume2.jpg';

const Resume = () => {
    const downloadImage = () => {
        const pdfurl = './src/components/Resume/Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfurl;
        link.download = 'Riddh_Modi_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center py-10 px-4'>
            <div className='container w-full max-w-4xl flex flex-col gap-6 justify-center items-center'>
                <button
                    onClick={downloadImage}
                    className='p-2 rounded-md bg-orange-400 hover:bg-orange-500 text-center text-base md:text-lg font-medium flex flex-row justify-center items-center w-8/12 sm:px-4 sm:w-auto'
                >
                    <i className="fa-solid fa-download text-black mr-2" />
                    Download
                </button>
                <div className='w-full flex flex-col overflow-hidden rounded-xl shadow-2xl'>
                    <img
                        src={resume1}
                        alt="Resume"
                        className='w-full h-fit object-contain'
                    />
                    <img
                        src={resume2}
                        alt="Resume"
                        className='w-full h-fit object-contain'
                    />
                </div>
            </div>
        </div>
    );
};

export default Resume;