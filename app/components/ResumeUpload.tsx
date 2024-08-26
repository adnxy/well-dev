"use client"; 
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // {{ edit_1 }}
import 'react-toastify/dist/ReactToastify.css'; // {{ edit_2 }}

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // {{ edit_1 }}
  const [message, setMessage] = useState<string>(''); // {{ edit_2 }}
  const [showToast, setShowToast] = useState<boolean>(false); // {{ edit_1 }}

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('pdfFile', file);
    setLoading(true); // {{ edit_3 }}

    try {
      const response = await fetch('http://localhost:4500/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        toast.success('Upload successful!'); // {{ edit_3 }}
      } else {
        toast.error('Upload failed.'); // {{ edit_4 }}
      }
    } catch (error) {
      toast.error('Error uploading file.'); // {{ edit_5 }}
    } finally {
      setLoading(false); // {{ edit_6 }}
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
      <button className="bg-primary-green text-gray rounded-md p-2" onClick={handleUpload} disabled={loading}> 
        {loading ? 'Uploading...' : 'Upload Resume'} 
      </button>
      {showToast && (
        <div className="toast-message">
          {message}
        </div>
      )} {/* {{ edit_4 }} */}
      <ToastContainer /> {/* {{ edit_7 }} */}
    </div>
  );
};

export default ResumeUpload;