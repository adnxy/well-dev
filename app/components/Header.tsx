import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSignOutAlt, FaBars, FaBell } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface HeaderProps {
  setSidebarOpen?: (open: boolean) => void;
  sidebarOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen, sidebarOpen }) => {
  const router = useRouter();
  const [hasNewNotifications, setHasNewNotifications] = useState(true); // This should be managed by your app's state

  const handleLogout = () => {
    router.push("/");
  };

  const handleNotificationClick = () => {
    // Handle notification click (e.g., open notification panel)
    setHasNewNotifications(false);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200 h-20">
      <div className="flex items-center">
        {setSidebarOpen && (
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden mr-3"
          >
            <FaBars size={24} color="#232b2b" />
          </button>
        )}
      </div>
      <div className="flex space-x-4 absolute left-40">
        <Image
          src="https://logowik.com/content/uploads/images/google-tasks7052.logowik.com.webp"
          alt="Logo"
          width={40}
          height={40}
          className="h-10 w-14 mr-0"
        />
        <Link href="/dashboard" className="flex items-center text-[#232b2b] hover:text-blue-500 transition duration-300 mr-5">
          Applications
        </Link>
        <Link href="/profile" className="flex items-center text-[#232b2b] hover:text-blue-500 transition duration-300">
          Settings
        </Link>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleNotificationClick}
          className="text-[#232b2b] hover:text-gray-800 mr-4 relative"
        >
          <FaBell size={22} />
          {hasNewNotifications && (
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
          )}
        </button>
        <button
          onClick={handleLogout}
          className="text-[#232b2b] hover:text-gray-800 flex items-center"
        >
          <FaSignOutAlt size={22} className="mr-2" /> 
        </button>
      </div>
    </header>
  );
};

export default Header;
