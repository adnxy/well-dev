"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GoogleIcon from "../../public/google.png";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const Login = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    // For now, we'll just navigate to the dashboard
    router.push("/dashboard");
  };

  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
    // For now, we'll just log to the console
    console.log("Google Sign-In clicked");
  };

  return (
    <div className={`flex items-center justify-center pt-40  ${theme === 'dark' ? 'bg-[#021814]' : 'bg-white'}`}> 
      <div className="p-12 bg-[#f4f4f4] rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-medium mb-8 text-left text-gray-800">Sign In</h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
          >
            <Image src={GoogleIcon} alt="Google" className="mr-2 w-5 h-5" />
            Sign in with Google
          </button>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in with email
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          If you don't have an account, <a href="/register" className="text-indigo-600 hover:underline">create one</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
