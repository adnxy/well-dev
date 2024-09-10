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
import Header from "../components/Header";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [jobApplications] = useState([
    {
      id: 1,
      title: "Software Engineer",
      description: "Full-stack position at Tech Co.",
      status: "Pending",
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
      status: "Pending",
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
      status: "Pending",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": // Changed to only include Pending
        return "bg-yellow-200 text-yellow-800"; // Yellow for Pending
      case "Interview Invitation":
        return "bg-green-200 text-green-800"; 
      case "Rejected":
        return "bg-red-200 text-red-800";
      case "Offered":
        return "bg-green-200 text-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const handleSubscribe = () => {
    router.push("/profile"); // Navigate to profile settings on subscribe
  };

  return (
    <div className="flex h-screen bg-white font-sans mx-40 rounded-lg" style={{ }}> {/* Added Goretsk font */}
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden rounded-lg">
   <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <main className="flex-1 bg-gray-200 p-7 overflow-hidden overflow-y-auto "> {/* Added overflow-auto for scrollable content */}

          {/* <div className="bg-green-200 text-green-800 p-3 rounded-lg flex items-center mb-4">
            <FaBell size={20} className="mr-2" />
            <span>You have new job application updates!</span>
          </div> */}

          <div               onClick={handleSubscribe} // Updated to handle subscribe click
 className="bg-green-200 text-green-800 p-3 rounded-lg flex items-center mb-5"> {/* Changed padding to p-2 for smaller top padding */}
            <FaBell size={20} className="mr-2" /> {/* Notification icon */}
            <span>Subscribe to start applying to jobs.</span> {/* New notification */}
            <button 
              className="ml-auto bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600" 
              onClick={handleSubscribe} // Updated to handle subscribe click
            >
              Subscribe
            </button> {/* Subscribe button */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-center">
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-2xl font-semibold">{jobApplications.filter(job => job.status === "Interview Invitation" || job.status === "Offered").length}</p>
              <hr className="my-2" />
              <p>Latest job notifications.</p>
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
              <p>Number of scheduled interviews.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-medium mb-4 p-2">Recent Applications</h2> {/* Added padding around the title */}
            <ul className="space-y-4">
              {jobApplications
                .filter(job => job.status !== "Offered" && job.status !== "Interviewed" && job.status !== "Applied") // Filter out Offered, Interviewed, and Applied
                .map((job) => (
                  <li
                    key={job.id}
                    className="bg-white p-6 rounded-md shadow hover:bg-slate-50 transition duration-150 ease-in-out border border-slate-200" // Added light border
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
