'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your login logic here
        // For now, we'll just navigate to the dashboard
        router.push('/dashboard');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="p-8 bg-white rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;