import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";
import Button from "./Button";

const Navbar = () => {
  const session = null;

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-5">
        <Link href="/">
          <Image
            src="/taskdone-logo.png"
            width={80}
            height={80}
            alt="framewell-logo"
            style={{ marginLeft: 35, paddingTop: 20 }}
          ></Image>
        </Link>
        <ul className="flex-1 flex justify-end items-center pr-10 mr-20">
        {NavLinks.map((link, index) => (
            <li key={index}>
                <Link
                  href={link.href}
                  className="text-teal-900 font-medium mr-5 hover:underline" // Updated for header link style
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
