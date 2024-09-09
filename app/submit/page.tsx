"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import { FaCheckSquare } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Submit = () => {
  const router = useRouter(); // Initialize router
  const [email, setEmail] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [salary, setSalary] = useState<number | "">("");
  const [position, setPosition] = useState<string>("");
  const [showPricing, setShowPricing] = useState<boolean>(false); // New state for pricing section
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null);

  const pricingPlans = [
    {
      title: "Normal",
      price: "29 USD",
      features: [
        "Up to 25-50 job applications per month.",
        "Dashboard",
        "Dedicated hiring manager.",
        "Weekly reports in email inbox.",
        "Customer support.",
      ],
    },
    {
      title: "Intense",
      price: "49 USD",
      features: [
        "100+ job applications per month.",
        "Assigned hiring manager.",
        "Priority listing and application processing.",
        "Dashboard.",
        "Customer support.",
        "Dedicated hiring manager.",
        "Weekly reports in email inbox.",
      ],
    },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ email, location, salary });
    setShowPricing(true); // Show pricing section after submit
    router.push('/dashboard'); // Navigate to dashboard after submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Submit Your Application</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block mb-2">
            Desired Position:
          </label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Software Engineer, Product Manager, etc."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">
            Job Location:
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Remote or City, State"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block mb-2">
            Expected Salary:
          </label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your expected yearly salary in USD"
          />
        </div>
        {/* {showPricing && (
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Choose Your Plan</h2>
            <p className="text-md text-gray-500 mb-6">Select the perfect plan for your needs.</p>
            <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col p-6 mx-auto w-full max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white cursor-pointer ${
                    selectedPricing === plan.title ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedPricing(plan.title)}
                >
                  <h3 className="mb-4 text-2xl font-semibold text-zinc-800">{plan.title}</h3>
                  <p className="font-light text-zinc-800 sm:text-lg dark:text-gray-400">
                    <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
                  </p>
                  <ul role="list" className="mb-8 space-y-4 text-left mt-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-black">
                        <FaCheckSquare className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`mt-auto bg-blue-500 text-white px-10 py-3 rounded-md hover:bg-blue-600 font-medium ${
                      selectedPricing === plan.title ? 'bg-blue-600' : ''
                    }`}
                    onClick={() => setSelectedPricing(plan.title)}
                  >
                    {selectedPricing === plan.title ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )} */}

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-4 w-full mb-20 mt-5 hover:bg-blue-600"
        >
          Start applying to jobs
        </button>
      </form>
    </div>
  );
};

export default Submit;
