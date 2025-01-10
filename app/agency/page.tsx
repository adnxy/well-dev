"use client"
import React from 'react';
import { useTheme } from '../context/ThemeContext';
// import styles from "./page.module.css";

const Agency: React.FC = () => {
    const theme = useTheme();

    // Updated content for the landing page
    const stats = {
        projectsCompleted: 15,
        generatedValue: 2,
        downloads: 5,
    };

    const previousProjects = [
        { name: 'Monte Carlo', description: 'Mobile app in progress', link: '#', image: 'path/to/imageE.jpg' },
        { name: 'Altruist', description: 'A web application for e-commerce.', link: '#', image: 'path/to/imageA.jpg' },
        { name: 'FTS', description: 'A mobile app for fitness tracking.', link: '#', image: 'path/to/imageB.jpg' },
        { name: 'Mango&Lola', description: 'A SaaS platform for project management.', link: '#', image: 'path/to/imageC.jpg' },
        { name: 'NCAP', description: 'A web application for e-commerce.', link: '#', image: 'path/to/imageD.jpg' },
    ];

    return (
        <section className={`flex-1 ${theme === "light" ? "bg-white" : "bg-[#111111]"} flex flex-col items-start w-full flex-1 flex-start flex-start w-full`}>
            <div className="flex flex-col items-start w-full flex-1 flex-start flex-start justify-between pl-20">
                <h1 className={`text-3xl pl-2 mb-2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>Hire us</h1>
                <h3 className={`text-xl pl-2 mb-2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>Build MVP in two months</h3>
                {/* Displaying statistics */}
                <div className="mb-4 w-4/5 pl-2">
                    <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>Projects Completed: {stats.projectsCompleted}</p>
                    <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>App Downloads (Millions): {stats.downloads}</p>
                    <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>Generated Value (Billions): {stats.generatedValue}</p>
                </div>

                {/* Displaying previous projects in horizontal scroll */}
                <h2 className={`text-xl font-semibold pl-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Previous Projects</h2>
                <div className="overflow-x-auto whitespace-nowrap">
                    <ul className="flex space-x-5 w-full pl-2">
                        {previousProjects.map((project, index) => (
                            <li key={index} className="border p-4 rounded shadow w-100 inline-block">
                                <img src={project.image} alt={project.name} className="w-full h-32 object-cover rounded" />
                                <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>{project.name}</h3>
                                <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>{project.description}</p>
                                <a href={project.link} className={`text-sm ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}>View Project</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </section>
    );
};

export default Agency; 