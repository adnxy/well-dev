"use client"; 
import React, { useState } from 'react';

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('pdfFile', file);

    try {
      const response = await fetch('http://localhost:4500/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        // Handle success
        console.log('Upload successful');
      } else {
        // Handle error
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="flex justify-end mt-20 mb-30">
      <input
        type="file"
        accept="application/pdf"
        className="border border-gray-300 rounded-md p-3 mr-4 w-1/1"
        aria-label="Upload your resume"
        id="resume-upload"
        onChange={handleFileChange} // Handle file change
      />
      <button className="bg-primary-green text-gray rounded-md p-2" onClick={handleUpload}>
        Upload Resume
      </button>
    </div>
  );
};

export default ResumeUpload;