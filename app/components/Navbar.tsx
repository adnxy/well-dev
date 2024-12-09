"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import rb from "../../public/goal-post.png";
import { FaBars, FaTimes, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard" || pathname === "/profile";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("theme", theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("savedTheme", savedTheme);
    if (savedTheme) {
      toggleTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (isDashboard) return null;

  return (
    <nav
      className={`flex justify-between items-center h-20 px-4 md:px-10 lg:px-20 transition-colors duration-350 ${
        theme === "light" ? "bg-white text-black" : "bg-[#06231F] text-white"
      } shadow-lg`}
    >
      <div className="flex items-center pl-20">
        <Link href="/">
          <Image
            className="h-11 w-11 ml-2 mr-2 cursor-pointer"
            src={rb}
            alt="Logo"
          />
        </Link>
        {theme === "dark" ? (
          <FaSun
            className="text-yellow-500 ml-2 cursor-pointer w-5 h-5"
            onClick={toggleTheme}
          />
        ) : (
          <FaMoon
            className="text-gray-800 ml-2 cursor-pointer w-5 h-5"
            onClick={toggleTheme}
          />
        )}
        <div className="flex space-x-4 ml-5">
          <Link
            href="/how-it-works"
            className={`font-[15px] cursor-pointer hover:text-slate-300 ${
              theme === "light" ? "text-black" : "text-white"
            } hidden md:block`}
          >
            How it works
          </Link>
          <Link
            href="/faq"
            className={`font-[15px] cursor-pointer hover:text-slate-300 ${
              theme === "light" ? "text-black" : "text-white"
            } hidden md:block`}
          >
            FAQs
          </Link>
        </div>
      </div>

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
        onClick={() => {
          toggleTheme(theme === "dark" ? "light" : "dark");
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* New Links for Blog and Pricing - Moved next to the toggle menu */}

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center space-x-6">
        {/* <li>
          <Link href="/privacy" className="text-white text-md hover:text-emerald-400">Privacy</Link>
        </li> */}
        {/* <li>
          <Link href="/pricing" className="text-white text-md hover:text-emerald-400">Pricing</Link>
        </li> */}

        {NavLinks.map((link, index) => (
          <li key={index}>
            {link.text === "Offers" ? (
              <button className="border border-emerald-500 text-emerald-500 rounded-xl px-5 py-2 text-md font-small hover:bg-emerald-500 hover:text-white transition mr-20">
                <Link href={link.href}>{link.text}</Link>
              </button>
            ) : (
              <Link
                href={link.href}
                className="text-white text-md hover:text-emerald-400"
              >
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-[#222c37] p-4 md:hidden mr-60">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/pricing"
                className="text-white text-sm hover:text-emerald-400"
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="/privacy"
                className="text-white text-sm hover:text-emerald-400"
              >
                Privacy
              </Link>
            </li>
            {NavLinks.map((link, index) => (
              <li key={index}>
                {link.text === "Sign up" ? (
                  <button className="border border-emerald-500 text-emerald-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-emerald-500 hover:text-white transition w-full text-center">
                    <Link href={link.href}>{link.text}</Link>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:text-emerald-400"
                  >
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
