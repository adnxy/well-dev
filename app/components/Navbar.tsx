'use client';

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";
import Button from "./Button";
import { usePathname } from "next/navigation"; // Import usePathname
import rb from "../../public/grab.svg";

const Navbar = () => {
  const pathname = usePathname(); // Get current pathname
  const isDashboard = pathname === "/dashboard" || pathname === "/profile"; // Check if current route is dashboard

  if (isDashboard) return null; // Hide header if on dashboard

  return (
    <nav className="flexBetween navbar h-30 border-b-0 pt-5 pr-40" style={{ backgroundColor: '#1c1c1c' }}> {/* Removed border on bottom */}
      <div className="flex-1 flexStart gap-5">
        <Link href="/" className="flex justify-end ml-60"> {/* Added flex and justify-end to move image to the right */}
          <Image className="h-10 w-20 mt-5 " // Added padding left
            src={rb} alt="Red Bull" width={80} height={30} />
        </Link>
        <ul className="flex-1 flex justify-end items-center pr-10 mr-20">
          <div style={{display: 'flex', gap: '10px', marginRight: '30px'}}>
          <li >
            <Link href="/pricing" className="text-white font-small mr-5 hover:underline">Pricing</Link>
          </li>
          <li>
            <Link href="/privacy" className="text-white font-small mr-5 hover:underline">Privacy</Link>
          </li>
          </div>
        {!isDashboard && NavLinks.map((link, index) => ( // Conditional rendering based on route
            <li key={index}>
                {link.text === "Sign up" ? ( // Check if link is "Sign up"
                  <button className="bg-gray-800 border border-gray-500 text-gray-200 rounded px-6 py-2 shadow-md hover:bg-blue-500 hover:text-white transition"> {/* Changed button background to light black */}
                    <Link
                      href={link.href}
                      className="font-bold"
                    >
                      {link.text}
                    </Link>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white font-small mr-5 hover:underline"
                  >
                    {link.text}
                  </Link>
                )}
            </li>
          ))}
          {/* Added new links for Pricing and Privacy */}

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
