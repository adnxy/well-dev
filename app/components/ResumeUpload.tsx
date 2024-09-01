"use client"; 
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
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
          className="w-full max-w-md flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#40A578] hover:bg-[#368f68] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40A578] transition duration-150 ease-in-out cursor-pointer mb-4"
        >
          <FaUpload className="h-5 w-5 inline-block mr-2" />
          {resumeFile ? resumeFile.name : 'Select Resume'}
        </label>
        {resumeFile && (
          <button
            onClick={handleUpload}
            className="w-full max-w-md flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#40A578] hover:bg-[#368f68] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40A578] transition duration-150 ease-in-out"
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