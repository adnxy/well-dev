import Link from 'next/link';
import React from 'react';
import { FaHome, FaClipboardCheck, FaChartLine, FaUserCircle, FaTrophy } from 'react-icons/fa';
import Image from 'next/image';
// import logo from '../assets/logo.svg';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#F7F7F7'}} className="w-80 p-5">
      <div className="flex items-center mb-10">
        {/* <Image src="/logo.svg" alt="Logo" width={150} height={60} /> */}
        <span className="font-semibold text-xl">Goalpredict</span>
      </div>
      <ul className="space-y-4">
        <li className="font-medium text-gray-500 hover:text-gray-700">
          <Link href="/dashboard" className="flex items-center">
            <FaHome className="mr-4 text-xl" />
            Predictions
          </Link>
        </li>
        <li className="font-medium text-gray-500 hover:text-gray-700">
          <Link href="/dashboard" className="flex items-center">
            <FaTrophy className="mr-4 text-xl" />
            Daily Picks
          </Link>
        </li>
        <li className="font-medium text-gray-500 hover:text-gray-700">
          <Link href="/activity" className="flex items-center">
            <FaClipboardCheck className="mr-4 text-xl" />
            Contest
          </Link>
        </li>
        <li className="font-medium text-gray-500 hover:text-gray-700">
          <Link href="/support" className="flex items-center">
            <FaChartLine className="mr-4 text-xl" />
            Analysis
          </Link>
        </li>
        <li className="font-medium text-gray-500 hover:text-gray-700">
          <Link href="/settings" className="flex items-center">
            <FaUserCircle className="mr-4 text-xl" />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;