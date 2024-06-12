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
            src="/framewell-logo.png"
            width={150}
            height={40}
            alt="framewell-logo"
            style={{ marginLeft: 30 }}
          ></Image>
        </Link>
        <ul className="flex-1 flex justify-end items-center pr-10">
          {NavLinks.map((link, index) => (
            <li key={index}>
              {index === 0 ? (
                <Link
                  href={link.href}
                  className="bg-emerald-200 text-teal-900 px-5 py-2 rounded-md hover:bg-teal-200 hover:text-teal-900 font-bold"
                >
                  {link.text}
                </Link>
              ) : (
                <Link
                className="bg-gray-500 text-teal-900 px-5 py-2 rounded-md hover:scale-110 hover:text-teal-900 font-bold transition-transform duration-150"
                href={link.href}
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
