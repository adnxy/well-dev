"use client"
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Careers: React.FC = () => {
    const theme = useTheme();

  const jobListings = [
    { title: 'UI/UX Designer', description: 'Looking for a creative UI/UX Designer to join our team.' },
    { title: 'Flutter Developer', description: 'Seeking a skilled Flutter Developer to build cross-platform applications.' },
    { title: 'React Native Developer', description: 'Hiring a React Native Developer to create mobile applications.' },
  ];

  return (
    <div className="container mx-auto p-5">
      <h1 className={`text-3xl font-bold mb-5 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Careers</h1>
      <ul className="space-y-4">
        {jobListings.map((job, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>{job.title}</h2>
            <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Careers; 