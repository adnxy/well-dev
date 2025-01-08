"use client"
import React from 'react';
import { useTheme } from '../context/ThemeContext';
// import styles from "./page.module.css";

const Careers: React.FC = () => {
    const theme = useTheme();

  const jobListings = [
    { title: 'UI/UX Designer', description: 'Looking for a creative UI/UX Designer to join our team.', type: 'Full-time, Remote' },
    { title: 'Flutter Developer', description: 'Seeking a skilled Flutter Developer to build cross-platform applications.', type: 'Full-time, On-site' },
    { title: 'React Native Developer', description: 'Hiring a React Native Developer to create mobile applications.', type: 'Part-time, Remote' },
  ];

  return (
    <section className={`${theme === "light" ? "bg-white" : "bg-[#111111]"} flex flex-col items-start w-full flex-1 flex-start flex-start w-full`}>
              <div className="flex flex-col items-start w-full flex-1 flex-start flex-start justify-between pl-20">
      <h1 className={`text-3xl pl-2 mb-2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>Careers</h1>

      <ul className="space-y-4 w-4/5">
        {jobListings.map((job, index) => (
          <li key={index} className="border p-4 rounded shadow w-full">
            <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>{job.title}</h2>
            <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>{job.description}</p>
            <p className={`text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}>{job.type}</p>
          </li>
        ))}
      </ul>
    </div>
        
    </section>
  );
};

export default Careers; 