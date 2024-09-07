"use client"; 
import React, { useState } from 'react';
import { FaUpload, FaCheck } from 'react-icons/fa'; // Add FaCheck import
import { useRouter } from 'next/navigation';

const ResumeUpload = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!resumeFile) {
      setUploadStatus('Please select a file first.');
      return;
    }

    setUploadStatus('Uploading...');

    // Here you would implement the actual upload logic
    // For now, we'll simulate an upload with a timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2 second upload
      console.log('Uploading file:', resumeFile.name);
      setUploadStatus('Resume uploaded successfully!');
      
      // After successful upload, navigate to the submit page
      setTimeout(() => {
        router.push('/submit');
      }, 1000); // Wait 1 second before navigating
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadStatus('Upload failed. Please try again.');
    }
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-center flex-col">
        <input
          type="file"
          id="resume"
          accept=".pdf"
          onChange={handleFileChange}
          className="sr-only"
        />
        <label
          htmlFor="resume"
          className={`flex justify-center py-2.5 px-2.5 border border-transparent rounded-md shadow-sm text-lg font-medium text-white  bg-blue-500  hover:bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40A578] transition duration-150 ease-in-out cursor-pointer mb-2 ${resumeFile ? 'w-auto max-w-full' : 'w-64'}`}
        >
          <FaUpload className="h-5 w-5 inline-block mr-2" />
          <span className="truncate">
            {resumeFile ? resumeFile.name : 'Select Resume (.pdf)'}
          </span>
        </label>
        {!resumeFile && (
          <div className="text-xs text-gray-400 mb-4">
            <p className="text-gray-100 mt-2 flex items-center">
              <FaCheck className="mr-2 text-green-500" /> {/* Add checkmark icon */}
              We don't share your data
            </p>
          </div>
        )}
        {resumeFile && (
          <button
            onClick={handleUpload}
            className="w-64 flex justify-center py-2.5 px-2.5 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#207DFF] hover:bg-[#1c6fe6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#207DFF] transition duration-150 ease-in-out mt-5"
          >
            Upload Resume
          </button>
        )}
      </div>
      {uploadStatus && (
        <p className="mt-2 text-center text-sm text-gray-600">
          {uploadStatus}
        </p>
      )}
      {resumeFile && !uploadStatus && (
        <p className="mt-2 text-center text-sm text-gray-600">
          File selected: {resumeFile.name}
        </p>
      )}
    </div>
  );
};

export default ResumeUpload;