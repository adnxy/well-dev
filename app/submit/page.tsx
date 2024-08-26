"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';

const Submit = () => {
  const [email, setEmail] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [salary, setSalary] = useState<number | ''>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ email, location, salary });
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl mb-4">Submit your resume, we do the rest</h1>
      <form onSubmit={handleSubmit} className="w-1/3">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block mb-2">Salary:</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-primary-green text-white rounded-md p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Submit;