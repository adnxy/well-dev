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
    <nav className="flexBetween navbar h-16"> {/* Reduced height */}
      <div className="flex-1 flexStart gap-5">
        <Link href="/">
          <Image
            src="/taskdone-logo.png"
            width={80}
            height={80}
            alt="framewell-logo"
            style={{ marginLeft: 35, paddingTop: 10 }} // Adjusted padding for less height
          ></Image>
        </Link>
        <ul className="flex-1 flex justify-end items-center pr-10 mr-20">
        {!isDashboard && NavLinks.map((link, index) => ( // Conditional rendering based on route
            <li key={index}>
                <Link
                  href={link.href}
                  className="text-teal-900 font-medium mr-5 hover:underline"
                >
                  {link.text}
                </Link>
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
