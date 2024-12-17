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
      <div className="flex items-center relative ml-12 relative left-10">
      <Link href="/" className=" mr-2">
          <Image
            className="h-11 w-11 mr-2 cursor-pointer md:ml-0 "
            src={rb}
            alt="Logo"
          />
        </Link>
        {theme === "dark" ? (
          <FaSun
            className="text-yellow-500 ml-2 cursor-pointer w-5 h-5 md:ml-0 mr-3"
            onClick={toggleTheme}
          />
        ) : (
          <FaMoon
            className="text-gray-800 ml-2 cursor-pointer w-5 h-5 md:ml-0 mr-3"
            onClick={toggleTheme}
          />
        )}

        <div className="flex space-x-4 ml-5">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[15px] cursor-pointer hover:text-slate-300 ${
                pathname === link.href ? "text-green-500" : theme === "light" ? "text-black" : "text-white"
              } hidden md:block`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className={`md:hidden ${theme === "light" ? "text-black" : "text-white"}`}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? (
          <FaTimes className={theme === "light" ? "text-black" : "text-white"} size={24} />
        ) : (
          <FaBars className={theme === "light" ? "text-black" : "text-white"} size={24} />
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

        {NavLinks.map((link, index) => (
          <li key={index}>
            {link.text === "Login" ? (
              <button className="border border-emerald-500 text-emerald-500 rounded-xl px-5 py-2 text-md font-small  hover:text-[#1EAE98]/60 hover:border-[#1EAE98]/60 transition mr-20">
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
        <div className={`p-10 md:hidden w-full h-auto flex flex-col items-end absolute top-0 left-0 z-10 h-1/1 p-10 ${theme === "light" ? "bg-black" : "bg-[#3A6351]"}`}>
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
                href="/privacy"
                className="text-white text-md hover:text-emerald-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
            </li>
            {NavLinks.map((link, index) => (
              <li key={index}>
                {link.text === "Sign up" ? (
                  <button className="border border-emerald-500 text-emerald-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-emerald-500 hover:text-white transition w-full text-center">
                    <Link href={link.href} onClick={() => setIsMenuOpen(false)}>{link.text}</Link>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:text-emerald-400"
                    onClick={() => setIsMenuOpen(false)}
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
