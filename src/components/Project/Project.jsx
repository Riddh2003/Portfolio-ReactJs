import React from 'react'

function Project() {
    const projects = [
        {
            image: "https://invisionsoftwaresolution.in/wp-content/uploads/2023/03/Ecommerce-web-page.gif",
            title: "Ecommerce Website",
            description: "This eCommerce website is developed using Advanced Java, HTML, Tailwind CSS, and Spring MVC for the backend. It features a user-friendly interface with responsive design, ensuring an optimal shopping experience across all devices. The site includes functionalities like product listings, shopping cart, user authentication, and secure payment processing. Tailwind CSS is utilized for modern, sleek styling, while Spring MVC handles the backend processes, providing a seamless and efficient performance. The combination of these technologies ensures a robust and scalable eCommerce solution.",
            link: "https://github.com/Riddh2003/Ecom-app",
            buttonText: "eCommerce"
        },
        {
            image: "https://cdn.dribbble.com/users/4241563/screenshots/11874468/media/7796309c77cf752615a3f9062e6a3b3d.gif",
            title: "Employee To-Do List",
            description: "I developed a to-do list application using Spring MVC for the backend and HTML and CSS for the frontend. The application supports all CRUD (Create, Read, Update, Delete) operations, allowing users to efficiently manage their tasks. The backend is powered by Spring MVC and connected to a relational database, ensuring robust and scalable server-side functionality and persistent data storage.",
            link: "https://github.com/Riddh2003/SpringBootRoyal",
            buttonText: "To-Do List"
        },
        {
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4c6af063065537.5aad14955f42a.gif",
            title: "Portfolio",
            description: "I created a personal portfolio website using HTML, CSS, and JavaScript. The website showcases my projects, skills, and experiences with a clean and modern design. HTML structures the content, CSS provides styling to ensure a visually appealing layout, and JavaScript adds interactive elements for a dynamic user experience. This portfolio highlights my technical abilities and serves as a professional online presence to attract potential employers and collaborators.",
            link: "https://github.com/Riddh2003/Portfolio",
            buttonText: "GitHub",
            liveLink: "https://portfolio-one-jade-39.vercel.app/",
            liveLinkText: "Portfolio"
        },
        {
            image: "https://www.dynodesoft.com/assets/img/f93e46d78b.gif",
            title: "Hospital Management System",
            description: "I developed a hospital management system using core Java and JDBC for database connectivity with MySQL as a freelancing project. This application streamlines hospital operations by managing patient records, appointments, and doctors information efficiently. It demonstrates my expertise in Java programming and database management, delivering a robust and reliable solution for healthcare administration.",
            link: "https://github.com/Riddh2003/Hospital-Management-System",
            buttonText: "Hospital Management System"
        },
        {
            image: "https://cdn.dribbble.com/users/199340/screenshots/2146880/cloudy-sunny-800x600.gif",
            title: "Weather Application",
            description: "I developed a weather application using Advanced Java, JSP, and Servlets. The application fetches state-wise weather data from an API, providing real-time weather information for locations all over the world. This project showcases my skills in server-side programming, Java web technologies, and integrating third-party APIs to deliver accurate and dynamic weather updates.",
            link: "https://github.com/Riddh2003/WeatherApplication/tree/main/Application",
            buttonText: "Weather Application"
        },
        {
            image: "https://cdn.pixabay.com/animation/2023/10/07/12/59/12-59-14-660_512.gif",
            title: "Calculator: Android Application",
            description: "I developed a calculator Android application using Java for the backend logic and XML for the user interface design. This project enhanced my problem-solving and logical thinking skills, as I implemented core mathematical operations and ensured a user-friendly experience. The application demonstrates my proficiency in Android development and my ability to create functional and intuitive mobile applications.",
            link: "https://github.com/Riddh2003/Calculator",
            buttonText: "Calculator"
        }
    ];

    return (
        <div className='container w-full min-h-screen flex justify-center py-10 px-4'>
            <div className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, index) => (
                    <div key={index} className='w-full rounded-lg shadow-xl flex flex-col gap-4 items-center p-6'>
                        <img src={project.image} alt={project.title} className='w-3/4 h-48 object-contain'/>
                        <p className='text-xl md:text-2xl font-medium'>{project.title}</p>
                        <p className='text-sm md:text-base text-justify'>{project.description}</p>
                        <div className='w-full flex justify-evenly'>
                            <a target="_blank" rel="noopener noreferrer" href={project.link} className='w-1/2 p-2 rounded-md bg-orange-400 hover:bg-orange-500 flex flex-row justify-evenly items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" className='w-6 h-6'></img>
                                <button className='text-sm md:text-base'>{project.buttonText}</button>
                            </a>
                            {project.liveLink && (
                                <a target="_blank" rel="noopener noreferrer" href={project.liveLink} className='w-1/2 p-2 rounded-md bg-orange-400 hover:bg-orange-500 flex flex-row justify-evenly items-center ml-2'>
                                    <img src="https://img.icons8.com/?size=100&id=91&format=png&color=000000" alt="portfolio" className='w-6 h-6'></img>
                                    <button className='text-sm md:text-base'>{project.liveLinkText}</button>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>        
    )
}

export default Project