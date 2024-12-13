"use client";

import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { FaStar } from 'react-icons/fa';

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links, theme }: ColumnProps & { theme: string }  ) => (
  <div className="footer_column mr-40">
    <h4 className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-semibold`}>{title}</h4>
    <ul className={`${theme === 'dark' ? 'text-white' : 'text-black'} flex flex-col gap-2 font-normal`}>
      {links.map((link) => (
        <Link href="/" key={link} className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const { theme } = useTheme();
  console.log(theme);
  const backgroundColor = theme === 'dark' ? '#021814' : '#021814';

  return (
    <section className={` ${theme === 'dark' ? 'bg-[#021814]' : 'bg-white'} z-10 border-rounded border-white flex flex-col items-center footer pl-20 pt-10 pb-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`  } >
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start justify-between w-full">
          {/* <Image src="/logo.svg" width={150} height={60} alt="logo" /> */}

          {/* <p className="text-start text-sm font-normal l-5 max-w-xs text-white">
             Autoapply is a platform that allows you to outsource your job applications to a virtual assistant. We apply to jobs across the web and schedule interviews for you.
          </p> */}
        </div>
        <div className="flex flex-wrap gap-12 justify-center">
          <div className="flex-1 flex flex-col gap-4">
            {/* <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            /> */}
            {/* <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            /> */}
          </div>
          <div className="ml-auto">
            <FooterColumn
              title={footerLinks[6].title}
              links={footerLinks[6].links}
              theme={theme}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full footer_copyright text-white">
        <p className={`relative left-20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>@ 2024 Kickpredict. All rights reserved <span className="text-white pl-10">1234 Main St, Delaware, USA</span></p>
        <div className="flex justify-center mt-4 pr-40">
          <Link href="/premium" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
            <FaStar className="mr-2" /> Go Premium
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
