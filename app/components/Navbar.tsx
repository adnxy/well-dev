'use client';

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import rb from "../../public/grab.svg";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard" || pathname === "/profile";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isDashboard) return null;

  return (
    <nav className="flex justify-between items-center h-16 px-4 md:px-10 lg:px-20 bg-[#151f2a]">
      <Link href="/" className="flex items-center">
        <Image className="h-8 w-16" src={rb} alt="Logo" width={64} height={32} />
      </Link>

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
          <Link href="/pricing" className="text-white text-base hover:underline">Pricing</Link>
        </li>
        <li>
          <Link href="/privacy" className="text-white text-base hover:underline">Privacy</Link>
        </li>
        {NavLinks.map((link, index) => (
          <li key={index}>
            {link.text === "Sign up" ? (
              <button className="bg-gray-800 border border-gray-500 text-gray-200 rounded px-4 py-1 text-base shadow-md hover:bg-emerald-500 hover:text-white transition">
                <Link href={link.href} className="text-lg">
                  {link.text}
                </Link>
              </button>
            ) : (
              <Link href={link.href} className="text-white text-lg hover:underline">
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 p-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/pricing" className="text-white text-base hover:underline">Pricing</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white text-base hover:underline">Privacy</Link>
            </li>
            {NavLinks.map((link, index) => (
              <li key={index}>
                {link.text === "Sign up" ? (
                  <button className="bg-gray-800 border border-gray-500 text-gray-200 rounded px-4 py-1 text-base shadow-md hover:bg-emerald-500 hover:text-white transition w-full text-left">
                    <Link href={link.href} className="">
                      {link.text}
                    </Link>
                  </button>
                ) : (
                  <Link href={link.href} className="text-white text-base hover:underline">
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
