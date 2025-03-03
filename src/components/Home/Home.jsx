import React from "react";

export default function Home() {
  return (
    <div className="scroll-smooth w-full min-h-screen flex justify-center p-4">
      <div className="w-11/12 flex flex-col justify-center">
        <div className="w-full flex flex-col md:flex-row justify-around items-center mb-8 md:mb-0">
          <img
            src="https://thumbs.dreamstime.com/b/freelancer-worker-work-laptop-remotely-beach-freelance-web-developer-programmer-coding-living-tropic-resort-island-234064191.jpg"
            alt="beach coder image"
            className="w-full md:w-1/2 h-auto mb-4 md:mb-0"
          />
          <p className="w-full md:w-1/2 text-base md:text-lg text-justify">
            <span className="text-2xl md:text-4xl block mb-2">👋Hi,</span> I recently made a{" "}
            <span className="text-orange-500 font-medium">Portfolio</span>{" "}
            using{" "}
            <span className="text-orange-500 font-medium">React Js</span>. It uses components to keep the code modular and easy to maintain. The project connects to the{" "}
            <span className="text-orange-500 font-medium">Github API</span> to
            show real-time data, so users always see the latest information.
          </p>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center mt-4 md:mt-0">
          <p className="w-full md:w-1/2 text-base md:text-lg text-justify mt-4 md:mt-0">
            Using React Routers, I managed state and side effects well, making the user experience better. The app also has a responsive design with{" "}
            <span className="text-orange-500 font-medium">Tailwind CSS</span>, so it works well on different devices and screen sizes. This project shows my skills in ReactJS and my ability to work with external APIs to create a smooth and engaging user interface.
          </p>
          <img
            src="https://user-images.githubusercontent.com/115187902/230700872-d5f44b85-56c7-4e27-80a4-6e2db901e60c.gif"
            alt="coder gif"
            className="w-full md:w-1/3 h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}