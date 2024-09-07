"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUpload } from 'react-icons/fa';

const Signup = () => {
    const router = useRouter();
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your signup logic here
        // For now, we'll just navigate to the dashboard
        router.push("/dashboard");
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setResumeFile(e.target.files[0]);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="p-10 bg-white rounded-lg shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Sign Up</h1>
                <form className="space-y-6" onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                            Desired Position
                        </label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Job Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                            Expected Salary
                        </label>
                        <input
                            type="text"
                            id="salary"
                            name="salary"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                            Upload Resume (PDF)
                        </label>
                        <div className="mt-1">
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="sr-only"
                            />
                            <label
                                htmlFor="resume"
                                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700 bg-transparent hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition duration-150 ease-in-out cursor-pointer"
                            >
                                <FaUpload className="h-5 w-5 inline-block mr-2" />
                                {resumeFile ? resumeFile.name : 'Upload Resume'}
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-500  hover:bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;