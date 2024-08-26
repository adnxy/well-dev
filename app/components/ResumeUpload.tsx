"use client"; 
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // {{ edit_1 }}
import 'react-toastify/dist/ReactToastify.css'; // {{ edit_2 }}

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // {{ edit_1 }}
  const [message, setMessage] = useState<string>(''); // {{ edit_2 }}
  const [showToast, setShowToast] = useState<boolean>(false); // {{ edit_1 }}
  const [error, setError] = useState<string | null>(null); // {{ edit_3 }}

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('pdfFile', file);
    setLoading(true); // {{ edit_4 }}

    try {
      const response = await fetch('http://localhost:4500/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        toast.success('Upload successful!'); // {{ edit_5 }}
      } else {
        setError('Upload failed.'); // {{ edit_6 }}
        toast.error('Upload failed.'); // {{ edit_7 }}
      }
    } catch (error) {
      setError('Error uploading file.'); // {{ edit_8 }}
      toast.error('Error uploading file.'); // {{ edit_9 }}
    } finally {
      setLoading(false); // {{ edit_10 }}
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
      )} {/* {{ edit_11 }} */}
      {error && <div className="error-message">{error}</div>} {/* {{ edit_12 }} */}
      <ToastContainer /> {/* {{ edit_13 }} */}
    </div>
  );
};

export default ResumeUpload;