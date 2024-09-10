import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSignOutAlt, FaBars, FaBell, FaCog, FaTh } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface HeaderProps {
  setSidebarOpen?: (open: boolean) => void;
  sidebarOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen, sidebarOpen }) => {
  const router = useRouter();
  const [hasNewNotifications, setHasNewNotifications] = useState(true); // This should be managed by your app's state

  // Determine the current route
  const isDashboard = router.pathname === "/dashboard";
  const isProfile = router.pathname === "/profile";

  const handleLogout = () => {
    router.push("/");
  };

  const handleNotificationClick = () => {
    // Handle notification click (e.g., open notification panel)
    setHasNewNotifications(false);
  };

  return (
    <header className={`flex justify-between items-center p-4 ${isDashboard ? 'bg-blue-500' : 'bg-white'} border-b border-gray-200 h-20 w-full`}>
 
      <div className="flex items-center space-x-4"> {/* Centered items */}
        <Image
          src="https://logowik.com/content/uploads/images/google-tasks7052.logowik.com.webp"
          alt="Logo"
          width={40}
          height={40}
          className="h-10 w-14 mr-0"
        />
        <Link href="/dashboard" className={`flex items-center text-[#232b2b] hover:text-blue-500 transition duration-300 mr-5 ${isDashboard ? 'text-blue-500' : ''}`}>
          <FaTh className="mr-2" /> Applications
        </Link>
        <Link href="/profile" className={`flex items-center text-[#232b2b] hover:text-blue-500 transition duration-300 ${isProfile ? 'text-blue-500' : ''}`}>
          <FaCog className="mr-2" /> Settings
        </Link> {/* Ensure the entire link is clickable */}
      </div>
      <div className="flex items-center justify-end w-full"> {/* Align notifications to the right */}
        <button
          onClick={handleNotificationClick}
          className="text-[#232b2b] hover:text-gray-800 mr-4 relative"
        >
          <FaBell size={22} className="mr-2" />
          {hasNewNotifications && (
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
          )}
        </button>
        <button
          onClick={handleLogout} // Add logout functionality
          className="text-[#232b2b] hover:text-gray-800 mr-4"
        >
          <FaSignOutAlt size={22} className="mr-2" /> {/* Logout icon */}
        </button>
      </div>
    </header>
  );
};

export default Header;
