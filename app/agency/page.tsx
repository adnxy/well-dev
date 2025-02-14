"use client"
import React from 'react';
import { useTheme } from '../context/ThemeContext';
// import styles from "./page.module.css";

const Agency = () => {
    const theme = useTheme();

    // Updated content for the landing page
    const stats = {
        projectsCompleted: 15,
        generatedValue: 2,
        downloads: 5,
    };

    // New form state with default type set to "App Template"
    const [formData, setFormData] = React.useState({
        type: 'App Template',
        technology: '',
        price: '',
        projectLink: '',
        socialProfile: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    // New function to handle type selection
    const handleTypeSelect = (selectedType: string) => {
        setFormData(prev => ({ ...prev, type: selectedType }));
    };

    return (
        <section className={`flex-1 ${theme === "light" ? "bg-white" : "bg-[#111111]"} flex flex-col items-start w-full flex-1 flex-start flex-start w-full`}>
            <div className="flex flex-col items-start w-full flex-1 flex-start flex-start justify-between pl-20">

                {/* New Form Section */}
                <h1 className={`text-3xl font-semibold pl-2 ${theme === 'light' ? 'text-black' : 'text-white'} mb-2`}>Become a Partner</h1>
                <p className={`text-lg font-medium pl-2 ${theme === 'light' ? 'text-black' : 'text-slate-300'} mb-2`}>Start selling your UI designs, templates, workflows and more</p>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 pl-2">
                    {/* Updated Type Selection */}
                    <div className="flex space-x-4">
                        {['App Template', 'UI Design', 'UI Workflow', 'UI Screens', "UI Components", "Icons"].map(type => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => handleTypeSelect(type)}
                                className={`px-4 py-2 rounded ${formData.type === type ? 'bg-[#16C47F] text-white' : 'bg-gray-200 text-black'} transition duration-200 w-full min-w-[150px] font-medium`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    
                    {/* Updated Input Fields with Labels */}
                    {['technology', 'projectLink', 'price (USD)', 'socialProfile'].map((field, index) => (
                        <div key={index} className="flex flex-col mb-8">
                            <label htmlFor={field} className={`text-sm ${theme === 'light' ? 'text-black' : 'text-white'} mb-1 text-bold`}>
                                {field === 'socialProfile' ? 'GitHub, Medium, or LinkedIn Profile' : field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <input
                                type={field === 'price' ? 'number' : 'url'}
                                name={field}
                                id={field}
                                placeholder={field === 'technology' ? 'Figma, React Native, etc' : field.charAt(0).toUpperCase() + field.slice(1)}
                                value={formData[field]}
                                onChange={handleChange}
                                className={`p-2 rounded w-full ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-700 text-white'} transition duration-200`}
                                required
                            />
                        </div>
                    ))}
                    
                    <button type="submit" className={`px-1 py-3 rounded ${theme === 'light' ? 'bg-green-600 text-white' : 'bg-green-400 text-black'} w-full mt-8`}>
                        <p className='text-center text-[1.2em] text-white text-bold'>Request Review</p>
                    </button>
                </form>
            </div>
            <div className="flex flex-wrap justify-center space-x-5 mt-20 pl-20">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="h-14 transform rotate-12 mb-4" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="h-14 transform -rotate-12 mb-4" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" className="h-14 transform mb-4" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg" className="h-14 transform mb-4" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" className="h-14 transform rotate-6 mb-4" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" className="h-14 transform -rotate-6 mb-4 filter invert" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" className="h-14 transform -rotate-6 mb-4" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg" className="h-14 transform -rotate-6 mb-4" />
            </div>
            <div className="flex justify-center mt-4 bg-[#1E1E1E]/40 p-20 mt-40 w-full">
        <div className="text-center">
          <p className="text-white text-[2em] font-bold">Access to all mobile apps and 9,631 screens.</p>
          <p className="text-slate-200 font-[1.5em]">Get unlimited access to the full library from $10/month — cancel anytime.</p>
          <button className="bg-[#F0F0F0] text-black px-8 py-2 rounded-full shadow-lg hover:bg-[#]/80 transition duration-300 font-medium text-md mt-4">
            Get Pro
          </button>
          <div className="flex items-center justify-center mt-2 w-full">
            <div className="flex -space-x-1">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-slate-300 mt-2 ml-4">Supporting thousands of software developers, designers and agencies worldwide</p>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Agency; 