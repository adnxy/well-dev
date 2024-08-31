'use client';
import React, { useState } from 'react';
import { FaBars, FaChevronLeft, FaChevronRight, FaFileAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [jobApplications] = useState([
        { id: 1, title: 'Software Engineer', description: 'Full-stack position at Tech Co.', status: 'Pending' },
        { id: 2, title: 'UX Designer', description: 'Senior role at Design Studio', status: 'Interviewed' },
        { id: 3, title: 'Product Manager', description: 'Lead PM for new product line', status: 'Rejected' },
        { id: 4, title: 'Data Analyst', description: 'Entry-level position at Data Corp', status: 'Offered' },
    ]);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-white text-gray-800 ${sidebarOpen ? 'w-64' : 'w-16'} space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-0'} md:relative transition duration-200 ease-in-out`}>
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    {sidebarOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
                </button>
                <nav>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                        {sidebarOpen ? 'Applications' : <FaFileAlt size={20} />}
                    </a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                        {sidebarOpen ? 'Profile' : <FaUser size={20} />}
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center p-4 bg-white border-b">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
                        <FaBars size={24} />
                    </button>
                    <h1 className="text-2xl font-semibold">Welcome, Adnan</h1>
                    <button className="text-gray-500 hover:text-gray-800 flex items-center">
                        <FaSignOutAlt size={20} className="mr-1" /> Logout
                    </button>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Job Applications</h2>
                        <p className="text-gray-600 mb-4">Total Applications: {jobApplications.length}</p>
                        <ul className="space-y-4">
                            {jobApplications.map((job) => (
                                <li key={job.id} className="bg-gray-50 p-4 rounded-md shadow">
                                    <h3 className="font-semibold">{job.title}</h3>
                                    <p className="text-sm text-gray-600">{job.description}</p>
                                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                                        job.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                                        job.status === 'Interviewed' ? 'bg-blue-200 text-blue-800' :
                                        job.status === 'Rejected' ? 'bg-red-200 text-red-800' :
                                        'bg-green-200 text-green-800'
                                    }`}>
                                        {job.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;