import React from "react";
import "./About.css";

function About() {
  const languages = [
    { src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a55359db-8be9-4150-8c22-c4f54b6dfc96/df1d241-485b9236-f0ac-4804-a77d-6495d852801d.png", alt: "C" },
    { src: "https://i.pinimg.com/736x/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.jpg", alt: "java" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsq-7f5BWyog4cdeT1sQaYLVzhJ0o37Up8TjHvVU08WUgfyyMMRMHTVwJ5XReSjyhZa0&usqp=CAU", alt: "spring" },
    { src: "https://developer.android.com/static/images/brand/Android_Robot.png", alt: "android" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s", alt: "react" },
    { src: "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png", alt: "spring boot" },
    { src: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png", alt: "oracle" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png", alt: "git" },
    { src: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png", alt: "javaScript" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s", alt: "tailwind css" },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center py-10 px-4">
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col md:flex-row justify-around items-center gap-6">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-evenly text-center md:text-left gap-4">
            <h1 className="text-4xl md:text-6xl font-serif">Know Who I Am?</h1>
            <p className="text-base md:text-xl text-justify">
              My name is Riddh Modi. Pursuing a Bachelor of Engineering in
              Computer Engineering from Ahmedabad Institute of Technology.
              Passionate & Knowledge about{" "}
              <span className="text-orange-500 font-medium">
                Java Full Stack Development & Android App Development
              </span>
              . Currently, I am in my final year. After my graduation, will
              shifting career into any big technology like wise{" "}
              <span id="tech" className="text-orange-500 font-medium">
                AI, Cyber Security, DevOps, Data Analytics.
              </span>
            </p>
          </div>
          <img
            src="https://asset.cloudinary.com/dq0hiynoq/35e6e7edd41aa617d2577406e8a4f082"
            alt="mypic"
            className="w-2/3 md:w-1/4 rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col justify-evenly items-center gap-6">
          <h1 className="text-3xl md:text-5xl font-medium font-sans">Languages</h1>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
            {languages.map((lang, index) => (
              <img
                key={index}
                src={lang.src}
                alt={lang.alt}
                className="w-24 h-24 md:w-32 md:h-32 cursor-pointer rounded-xl shadow-xl p-4"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;