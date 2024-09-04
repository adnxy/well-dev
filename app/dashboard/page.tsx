"use client";
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaUser,
  FaSignOutAlt,
  FaBell,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [jobApplications] = useState([
    {
      id: 1,
      title: "Software Engineer",
      description: "Full-stack position at Tech Co.",
      status: "Applied",
    },
    {
      id: 2,
      title: "UX Designer",
      description: "Senior role at Design Studio",
      status: "Interview Invitation",
    },
    {
      id: 3,
      title: "Product Manager",
      description: "Lead PM for new product line",
      status: "Rejected",
    },
    {
      id: 4,
      title: "Data Analyst",
      description: "Entry-level position at Data Corp",
      status: "Offered",
    },
    {
      id: 5,
      title: "Frontend Developer",
      description: "React specialist at Web Solutions Inc.",
      status: "Pending",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      description: "Cloud infrastructure role at CloudTech",
      status: "Applied",
    },
    {
      id: 7,
      title: "AI Research Scientist",
      description: "Machine learning focus at AI Innovations",
      status: "Interview Invitation",
    },
    {
      id: 8,
      title: "Mobile App Developer",
      description: "iOS specialist at App Creators",
      status: "Interviewed",
    },
  ]);
  const [logoUrl, setLogoUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    setLogoUrl(
      "https://logowik.com/content/uploads/images/google-tasks7052.logowik.com.webp"
    );
  }, []);

  const handleLogout = () => {
    router.push("/");
  };

  const getStatusColor = (status: string    ) => {
    switch (status) {
      case "Applied":
        return "bg-purple-200 text-purple-800";
      case "Interview Invitation":
        return "bg-green-200 text-green-800"; // Changed to mint green
      case "Pending":
        return "bg-yellow-200 text-yellow-800";
      case "Interviewed":
        return "bg-blue-200 text-blue-800";
      case "Rejected":
        return "bg-red-200 text-red-800";
      case "Offered":
        return "bg-green-200 text-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans mx-40 rounded-lg" style={{ }}> {/* Added Goretsk font */}
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden rounded-lg">
        <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200 h-20">
          <div className="flex items-center">
            {/* Added logo to the left of Applications */}
            {/* Logo that hides when sidebar is closed */}

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden mr-3"
            >
              <FaBars size={24} />
            </button>
          </div>
          {/* Moved sidebar elements to the left of the page */}
          <div className="flex space-x-4 absolute left-40">
          <img src={logoUrl} alt="Logo" className="h-11 mr-0" /> {/* Added logo */}

            <a href="/dashboard" className="flex items-center text-gray-500 hover:text-blue-500 transition duration-300 mr-5">
            Applications
            </a>
            <a href="/profile" className="flex items-center text-gray-500 hover:text-blue-500 transition duration-300">
      Profile
            </a>
          </div>
          <button
            onClick={handleLogout}
            className="text-gray-500 hover:text-gray-800 flex items-center"
          >
            <FaSignOutAlt size={20} className="mr-2" /> Logout
          </button>
        </header>

        <main className="flex-1 bg-gray-200 p-4 overflow-auto"> {/* Added overflow-auto for scrollable content */}
          {/* Notification Box */}
          <div className="bg-green-200 text-green-800 p-4 rounded-lg flex items-center mb-4">
            <FaBell size={20} className="mr-2" /> {/* Notification icon */}
            <span>You have new job application updates!</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center">
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-2xl font-semibold">{jobApplications.filter(job => job.status === "Interview Invitation" || job.status === "Offered").length}</p>
              <hr className="my-2" />
              <p>Updates on your job applications.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center">
              <h3 className="font-semibold">Total Job Applications</h3>
              <p className="text-2xl font-semibold">{jobApplications.length}</p>
              <hr className="my-2" />
              <p className="text-gray-300">All applications submitted.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center">
              <h3 className="font-semibold">Pending Applications</h3>
              <p className="text-2xl font-semibold">{jobApplications.filter(job => job.status === "Pending").length}</p>
              <hr className="my-2" />
              <p>Applications awaiting response.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center">
              <h3 className="font-semibold">Interviews</h3>
              <p className="text-2xl font-semibold">{jobApplications.filter(job => job.status === "Interview Invitation").length}</p>
              <hr className="my-2" />
              <p>Applications with scheduled interviews.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-medium mb-4 p-2">Recent Applications</h2> {/* Added padding around the title */}
            <ul className="space-y-4">
              {jobApplications.map((job) => (
                <li
                  key={job.id}
                  className="bg-white p-6 rounded-md shadow hover:bg-gray-50 transition duration-150 ease-in-out" // Increased padding for larger height
                >
                  <div className="flex justify-between"> {/* Added flex for alignment */}
                    <div>
                      <h3 className="font-semibold text-blue-800">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.description}</p> {/* Changed text color to gray */}
                    </div>
                    <span className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span> {/* Formatted date */}
                  </div>
                  <span
                    className={`inline-block px-2 py-1 mt-2 text-xs font-semibold rounded-full ${getStatusColor(
                      job.status
                    )}`}
                  >
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
