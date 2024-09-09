"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaUpload,
  FaPause,
  FaPlay,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa"; // Added FaBars import
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";

const Profile = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [desiredPosition, setDesiredPosition] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [membershipStatus, setMembershipStatus] = useState("Active");
  const [logoUrl, setLogoUrl] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false); // Added sidebar state

  useEffect(() => {
    // Fetch user data from API or local storage
    setEmail("user@example.com");
    setDesiredPosition("Software Engineer");
    setJobLocation("New York, NY");
    setExpectedSalary("$100,000");
    setLogoUrl(
      "https://logowik.com/content/uploads/images/google-tasks7052.logowik.com.webp"
    );
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Profile updated");
  };

  const toggleMembership = () => {
    setMembershipStatus((prevStatus) =>
      prevStatus === "Active" ? "Paused" : "Active"
    );
  };

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Profile Settings
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="desiredPosition"
                  className="block text-sm font-medium text-gray-700"
                >
                  Desired Position
                </label>
                <input
                  type="text"
                  id="desiredPosition"
                  value={desiredPosition}
                  onChange={(e) => setDesiredPosition(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="jobLocation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Location
                </label>
                <input
                  type="text"
                  id="jobLocation"
                  value={jobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="expectedSalary"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expected Salary
                </label>
                <input
                  type="text"
                  id="expectedSalary"
                  value={expectedSalary}
                  onChange={(e) => setExpectedSalary(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700"
                >
                  Resume (PDF)
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="resume"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out cursor-pointer"
                  >
                    <FaUpload className="h-5 w-5 inline-block mr-2" />
                    {resumeFile ? resumeFile.name : 'Upload Resume'}
                  </label>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Membership Status
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Current status: {membershipStatus}
                </p>
                <button
                  type="button"
                  onClick={toggleMembership}
                  className={`mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    membershipStatus === "Active"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  {membershipStatus === "Active" ? (
                    <>
                      <FaPause className="mr-1" />
                      Pause Membership
                    </>
                  ) : (
                    <>
                      <FaPlay className="mr-1" />
                      Resume Membership
                    </>
                  )}
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
