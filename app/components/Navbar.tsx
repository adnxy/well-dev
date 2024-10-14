'use client';

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import rb from "../../public/grab.svg";
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard" || pathname === "/profile";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isDashboard) return null;

  return (
    <nav className="flex justify-around items-center h-20 px-4 md:px-10 lg:px-20 bg-[#222c37] shadow-lg">
      <Link href="/" className="flex items-center pr-80">
        <Image className="h-8 w-16" src={rb} alt="Logo" width={64} height={32} />
      </Link>

      {/* Search input */}
      {/* <div className="hidden md:flex items-center flex-grow mx-10">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full py-2 pl-4 pr-10 text-sm bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div> */}

      {/* Mobile menu button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center space-x-6">
        <li>
          <Link href="/privacy" className="text-white text-sm hover:text-emerald-400">Privacy</Link>
        </li>
        <li>
          <Link href="/pricing" className="text-white text-sm hover:text-emerald-400">Pricing</Link>
        </li>
  
        {NavLinks.map((link, index) => (
          <li key={index}>
            {link.text === "Create Account" ? (
              <button className="border border-emerald-500 text-emerald-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-emerald-500 hover:text-white transition">
                <Link href={link.href}>
                  {link.text}
                </Link>
              </button>
            ) : (
              <Link href={link.href} className="text-white text-sm hover:text-emerald-400">
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#222c37] p-4 md:hidden">
          {/* <div className="mb-4">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full py-2 pl-4 pr-10 text-sm bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div> */}
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/pricing" className="text-white text-sm hover:text-emerald-400">Pricing</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white text-sm hover:text-emerald-400">Privacy</Link>
            </li>
            {NavLinks.map((link, index) => (
              <li key={index}>
                {link.text === "Sign up" ? (
                  <button className="border border-emerald-500 text-emerald-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-emerald-500 hover:text-white transition w-full text-center">
                    <Link href={link.href}>
                      {link.text}
                    </Link>
                  </button>
                ) : (
                  <Link href={link.href} className="text-white text-sm hover:text-emerald-400">
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
