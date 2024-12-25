"use client"
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Agency: React.FC = () => {
    const theme = useTheme();

    return (
        <div className={`container mx-auto p-10 min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-[#101010]'}`}>
            <h1 className={`text-3xl font-bold mb-5 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Welcome to Our Agency</h1>
            <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>
                We are a leading agency specializing in innovative solutions for your business needs. 
                Our team is dedicated to delivering exceptional results and helping you achieve your goals.
            </p>
            <h2 className={`text-2xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Our Services</h2>
            <ul className="space-y-2">
                <li className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>- Web Development</li>
                <li className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>- Mobile App Development</li>
                <li className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>- Digital Marketing</li>
            </ul>
        </div>
    );
};

export default Agency; 