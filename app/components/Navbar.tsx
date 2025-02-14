"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import rb from "../../public/goal-post.png";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaMoon,
  FaSun,
  FaRocket,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard" || pathname === "/profile";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("theme", theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    toggleTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (isDashboard) return null;

  return (
    <nav
      className={`flex justify-between items-center h-20 px-20 md:px-10 lg:px-[80px] transition-colors duration-350 ${
        theme === "light" ? "bg-white text-black" : "bg-[#111111] text-white"
      } shadow-lg`}
    >
      <div className="flex items-center relative ml-3">
        <FaRocket
          className="text-[#C5FF95] ml-2 cursor-pointer w-5 h-5 md:ml-0 mr-3"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <div className="flex space-x-4 ml-1">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontSize: "1em" }}
              className={`font-[1.1em] font-medium cursor-pointer  ${
                pathname === link.href
                  ? "text-white"
                  : theme === "light"
                  ? "text-black"
                  : "text-white/60"
              } hidden md:block`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>



      {/* Mobile menu button */}
      <button
        className={`md:hidden ${
          theme === "light" ? "text-black" : "text-white"
        }`}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? (
          <FaTimes
            className={theme === "light" ? "text-black" : "text-white"}
            size={24}
          />
        ) : (
          <FaBars
            className={theme === "light" ? "text-black" : "text-white"}
            size={24}
          />
        )}
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

        <div className="flex items-center space-x-4 relative right-[300px]">
          {/* <button className="border border-gray-500 text-gray-500 rounded-full px-10 py-2 text-sm font-medium hover:bg-gray-500 hover:text-white transition w-full text-center whitespace-nowrap">
            <Link href="/login" style={{ fontSize: "1.1em", color: "white" }}> Start selling</Link>
            </button> */}
          {/* New Links for Blog and Pricing - Moved next to the toggle menu */}
          <div className="flex items-center space-x-4 relative left-[120px]">
        {/* <button className="no-wrap border border-gray hover:bg-[#343131]/80 w-full text-white rounded-full px-7 py-2 text-sm font-medium hover:bg-gray-500 hover:text-white transition w-full text-center min-w-[80px] whitespace-nowrap">
          <Link href="/login" className="text-[1em]">
            Login
          </Link>
        </button> */}
        <button className="no-wrap bg-[#343131] hover:bg-[#343131]/80 w-full text-white rounded-full px-8 py-2 text-sm font-medium hover:bg-gray-500 hover:text-white transition w-full text-center min-w-[80px] whitespace-nowrap text-[1.2em]">
          <Link href="/register" className="text-[1.1em]">
            Subscribe
          </Link>
        </button>

      </div>
        </div>
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`p-10 md:hidden w-full h-auto flex flex-col items-end absolute top-0 left-0 z-10 h-1/1 p-10 ${
            theme === "light" ? "bg-black" : "bg-[#3A6351]"
          }`}
        >
          {/* Close button */}
          <button
            className="text-white mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes size={24} />
          </button>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/"
                className="text-white text-md hover:text-emerald-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-white text-md hover:text-emerald-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/agency"
                className="text-white text-md hover:text-emerald-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
            </li>

            {NavLinks.map((link, index) => (
              <li key={index}>
                {link.text === "Sign up" ? (
                  <button className="border border-emerald-500 text-emerald-500 rounded-full px-5 py-2 text-[0.9em] font-medium hover:bg-emerald-500 hover:text-white transition w-full text-center">
                    <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                      {link.text}
                    </Link>
                  </button>
                ) : (
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className={theme === "light" ? "text-black" : "text-white"}
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
