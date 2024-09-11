'use client';

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";
import Button from "./Button";
import { usePathname } from "next/navigation"; // Import usePathname

const Navbar = () => {
  const pathname = usePathname(); // Get current pathname
  const isDashboard = pathname === "/dashboard" || pathname === "/profile"; // Check if current route is dashboard

  if (isDashboard) return null; // Hide header if on dashboard

  return (
    <nav className="flexBetween navbar h-20"> {/* Reduced height */}
      <div className="flex-1 flexStart gap-5">
        <Link href="/">
        <Image
          src="https://logowik.com/content/uploads/images/google-tasks7052.logowik.com.webp"
          alt="Logo"
          width={40}
          height={40}
          className="h-10 w-14 mr-0"
        />
        </Link>
        <ul className="flex-1 flex justify-end items-center pr-10 mr-20">
        {!isDashboard && NavLinks.map((link, index) => ( // Conditional rendering based on route
            <li key={index}>
                {link.text === "Sign up" ? ( // Check if link is "Sign up"
                  <button className="bg-blue-500 rounded-full px-4 py-1"> {/* button with blue color and full border radius */}
                    <Link
                      href={link.href}
                      className="text-white font-bold"
                    >
                      {link.text}
                    </Link>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-teal-900 font-medium mr-5 hover:underline"
                  >
                    {link.text}
                  </Link>
                )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {/* {session ? (
          <>
            User photo
            <Link href="/create-project"> Share your work</Link>
          </>
        ) : (
          <AuthProviders />
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
