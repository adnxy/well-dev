"use client";
import React, { useState } from "react";
import { FaUpload, FaCheck } from "react-icons/fa"; // Add FaCheck import
import { useRouter } from "next/navigation";

const ResumeUpload = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!resumeFile) {
      setUploadStatus("Please select a file first.");
      return;
    }

    setUploadStatus("Uploading...");

    // Here you would implement the actual upload logic
    // For now, we'll simulate an upload with a timeout
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2 second upload
      console.log("Uploading file:", resumeFile.name);
      setUploadStatus("Resume uploaded successfully!");

      // After successful upload, navigate to the submit page
      setTimeout(() => {
        router.push("/submit");
      }, 1000); // Wait 1 second before navigating
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus("Upload failed. Please try again.");
    }
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-row items-center justify-center bg-gray-800 p-4 rounded-md">
          <div>
            {" "}
            <input
              type="file"
              id="resume"
              accept=".pdf"
              onChange={handleFileChange}
              className="sr-only"
            />
            <label
              htmlFor="resume"
              className={`flex justify-center py-2.5 px-4 border border-emerald-600 rounded-md shadow-sm text-lg font-medium text-white bg-emerald-700 hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition duration-150 ease-in-out cursor-pointer mb-2 ${
                resumeFile ? "w-auto max-w-full" : "w-64"
              }`}
            >
              <FaUpload className="h-6 w-6 inline-block mr-2 pt-1" />
              <span className="truncate text-base">
                {resumeFile ? resumeFile.name : "Upload Resume"}
              </span>
            </label>
          </div>

          {resumeFile && (
            <button
              onClick={handleUpload}
              className="mb-7 ml-5 flex justify-center py-2.5 px-2.5 border border-transparent rounded-md shadow-sm font-base text-white bg-[#207DFF] hover:bg-[#1c6fe6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#207DFF] transition duration-150 ease-in-out mt-5"
            >
              Upload Resume
            </button>
          )}
        </div>
      </div>
      {uploadStatus && (
        <p className="mt-2 text-center text-sm text-white">{uploadStatus}</p>
      )}
    </div>
  );
};

export default ResumeUpload;
