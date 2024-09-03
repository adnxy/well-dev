"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    // For now, we'll just navigate to the dashboard
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Changed background color to light gray */}
      <div className="p-12 bg-white rounded-lg shadow-xl w-full max-w-xl"> {/* Increased max-width and padding */}
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Login</h1> {/* Increased font size and margin */}
        <form className="space-y-8" onSubmit={handleLogin}> {/* Increased space between form elements */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2" {/* Added margin-bottom */}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40A578] focus:border-[#40A578]" {/* Increased padding and changed focus colors */}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2" {/* Added margin-bottom */}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40A578] focus:border-[#40A578]" {/* Increased padding and changed focus colors */}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#40A578] hover:bg-[#368f68] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40A578]" {/* Updated button color and increased padding and font size */}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
