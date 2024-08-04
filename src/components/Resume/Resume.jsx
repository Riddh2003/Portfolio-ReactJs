import React from 'react';

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
        <div className='w-full min-h-screen flex flex-col justify-center items-center sm:py-10 px-4'>
            <div className='container w-full max-w-4xl flex flex-col gap-6 justify-center items-center'>
                <button
                    onClick={downloadImage}
                    className='p-2 rounded-md bg-orange-400 hover:bg-orange-500 text-center text-base md:text-lg font-medium flex flex-row justify-center items-center w-8/12 sm:px-4 sm:w-auto'
                >
                    <i className="fa-solid fa-download text-black mr-2"/>
                    Download
                </button>
                <div className='w-full overflow-hidden rounded-xl shadow-2xl'>
                    <img 
                        src="./src/components/Resume/Resume.jpg" 
                        alt="Resume" 
                        className='w-full h-auto object-contain'
                    />
                </div>
            </div>
        </div>
    );  
};

export default Resume;