"use client"; 
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // {{ edit_1 }}
import 'react-toastify/dist/ReactToastify.css'; // {{ edit_2 }}

import { useEffect } from 'react';

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [navigate, setNavigate] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('pdfFile', file);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:4500/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        toast.success('Upload successful!'); // {{ edit_1 }}
        window.location.href = '/submit'; // {{ edit_2 }} // Navigate to the next page
      } else {
        setError('Upload failed.');
        toast.error('Upload failed.');
      }
    } catch (error) {
      setError('Error uploading file.');
      toast.error('Error uploading file.');
    } finally {
      setLoading(false); // {{ edit_3 }}
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
        onChange={handleFileChange}
      />
      <button className="bg-primary-green text-gray rounded-md p-2" onClick={handleUpload} disabled={loading}> 
        {loading ? 'Uploading...' : 'Upload Resume'} 
      </button>
      {showToast && (
        <div className="toast-message">
          {message}
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
      <ToastContainer />
    </div>
  );
};

export default ResumeUpload;