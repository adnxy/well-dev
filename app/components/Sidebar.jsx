import Link from 'next/link';
import React from 'react';
import { FaHome, FaClipboardList, FaTools, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#F7F7F7'}} className="w-64 p-5">
      <div className="flex items-center mb-10">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-3" />
        <span className="font-semibold text-xl">autoapply.io</span>
      </div>
      <ul className="space-y-4">
        <li className="font-medium text-gray-500 hover:text-gray-700">
          <Link href="/dashboard" className="flex items-center">
            <FaHome className="mr-4" />
            Dashboard
          </Link>
        </li>
        <li className="font-medium text-gray-500 hover:text-gray-700">
          <Link href="/activity" className="flex items-center">
            <FaClipboardList className="mr-4" />
            Activity
          </Link>
        </li>
        <li className="font-medium text-gray-500 hover:text-gray-700">
          <Link href="/support" className="flex items-center">
            <FaTools className="mr-4" />
            Support
          </Link>
        </li>
        <li className="font-medium text-gray-500 hover:text-gray-700">
          <Link href="/settings" className="flex items-center">
            <FaCog className="mr-4" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;