import React from 'react';
import resume from '../../Image/Resume.jpg'

const Resume = () => {

    const downloadImage = () => {
        const pdfurl = 'src/Image/Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfurl;
        link.download = 'Riddh_Modi_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className='w-full flex flex-col justify-center items-center my-10 '>
            <div className='container w-11/12 flex flex-col gap-6 justify-center items-center'>
                <button
                    onClick={downloadImage}
                    className='p-3 rounded-md bg-orange-400 hover:bg-orange-500 text-center text-lg font-medium flex flex-row justify-evenly items-center'
                ><i className="fa-solid fa-download text-black mr-2"/>
                    Download
                </button>
                <img src={resume} alt="resumeimage"  className='w-8/12 rounded-xl shadow-2xl'/>
            </div>
        </div>
    );  
};

export default Resume;