"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { avataaars, identicon, micah, pixelArt } from '@dicebear/collection';
import { BiMessageRounded as ChatBubbleOutlineIcon } from 'react-icons/bi';
import { MdVisibility, MdSubscriptions } from "react-icons/md";
import SchoolIcon from '@mui/icons-material/School';

import screenshot0 from "../public/screenshot.png";
import screenshot1 from "../public/screenshot1.png";
import screenshot2 from "../public/screenshot2.png";
import screenshot3 from "../public/screenshot3.png";
import screenshot4 from "../public/screenshot4.png";
import screenshot5 from "../public/screenshot5.png";

import mobileScreen1 from "../public/mobile-screen1.png";
import mobileScreen2 from "../public/mobile-screen2.png";
import mobileScreen3 from "../public/mobile-screen3.png";
import mobileScreen4 from "../public/mobile-screen4.png";
import mobileScreen5 from "../public/mobile-screen5.png";

import {
  FaEnvelope,
} from "react-icons/fa";

import { useTheme } from "./context/ThemeContext";
import axios from "axios";
import { createAvatar } from '@dicebear/avatars';

export const getButtonClass = (theme: string, isSelected: boolean) => {
  if (isSelected && theme === 'light') {
    return 'font-medium underline underline-offset-8 text-black'; // Selected button color
  }
  if (isSelected && theme === 'dark') {
    return 'font-medium underline underline-offset-8 text-white'; // Selected button color
  }
  return theme === 'light' ? 'text-black' : 'text-white'; // Default button color based on theme
};

const getButtonStyles = (theme: string, isSelected: boolean) => {
  const baseStyle = "px-6 py-2 rounded-full border border-[#3D3D3D] whitespace-nowrap flex-shrink-0";
  const activeStyle = theme === 'light' 
    ? "bg-[#F0F0F0] border" // Light theme active style
    : "bg-[#F0F0F0] border"; // Dark theme active style

  if (isSelected) { 
    return `${baseStyle} ${activeStyle} `;
  }
  return `${baseStyle} ${theme === 'light' ? 'text-black' : 'text-[#F0F0F0]'}`; // Default text color for dark theme
};

const Landing = () => {
  const { theme } = useTheme();

  // Set default selected filter to "Web" and "Screen"
  const [selectedFilter, setSelectedFilter] = useState<string | null>("React Native");
  const [selectedView, setSelectedView] = useState<string | null>("Apps");
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState<number>(0);
  const [currentRating, setCurrentRating] = useState<number | null>(4.5);
  const [isViewClicked, setIsViewClicked] = useState<boolean>(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleViewClick = (view: string) => {
    setSelectedView(view);
  };

  const openModal = (index: number) => {
    setCurrentScreenshotIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const nextImage = () => {
    setCurrentScreenshotIndex((prevIndex) => (prevIndex + 1) % [mobileScreen1, mobileScreen2, mobileScreen3, mobileScreen4, mobileScreen5].length);
  };

  const prevImage = () => {
    setCurrentScreenshotIndex((prevIndex) => (prevIndex - 1 + [mobileScreen1, mobileScreen2, mobileScreen3, mobileScreen4, mobileScreen5].length) % [mobileScreen1, mobileScreen2, mobileScreen3, mobileScreen4, mobileScreen5].length);
  };

  const handleRating = (rating: number) => {
    setCurrentRating(rating);
  };

  // Show modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSubscribeModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeSubscribeModal = () => {
    setIsSubscribeModalOpen(false);
  };

  const generateAvatar = (index: number) => {
    const svg = createAvatar(micah as any, {
      seed: `user-${index}`, // Unique seed for each avatar
      dataUri: true,
      baseColor: ["77311d","ac6651","f9c9b6"],
      background: ['#f0f0f0', '#ffcc00', '#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999', '#aaaaaa', '#bbbbbb', '#cccccc', '#dddddd', '#eeeeee', '#ffffff'], 
      avatarStyle: 'circle', // Changed to a more neutral style
      facialHair: 'medium', // Example: add medium facial hair
      hair: 'short', // Example: short hair
      skinTone: 'light', // Example: light skin tone
      size: 128,
      backgroundType: ["gradientLinear","solid"]
    });
    return svg;
  };

  const premiumPosts = [ 3, 5]; // Indices of premium posts

  return (
    <section
      className={`${theme === "light" ? "bg-white" : "bg-[#111111]"} flex flex-col items-start w-full flex-1 flex-start flex-start ${styles.body}`}
    >
      <div className="flex flex-col items-start w-full flex-1 flex-start flex-start justify-between pl-20">
      <h1 className={`text-3xl pl-2 mb-2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>Discover</h1>
      <h2 className={`text-[1.1em] pl-2 mb-4 font-medium ${theme === "light" ? "text-black" : "text-[#EEEEEE]"}`}>
        Get handpicked practices, tutorials, and trends for mobile developers, designers and QA engineers.
      </h2>

     <div className="flex w-full justify-start pl-0 mb-2">
        {["React Native", "Flutter", "Android", "iOS", ].map((filter) => (
          <div className="flex flex-col items-start w-1/1 justify-start">
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-3 text-l py-2 rounded-xl border-none text-black   ${getButtonClass(theme, selectedFilter === filter)}`}
            >
              {filter}
            </button>
          </div>
        ))}
      </div> 

      <div className="flex overflow-x-auto w-full space-x-3 justify-start pl-1 mt-3">
        {["Tutorials", "Best Practices", "News & Trends", "Tools & Libraries", "Design", "Quality Assurance"].map((view) => (
          <button
            key={view}
            onClick={() => {
              handleViewClick(view);
              setIsViewClicked(true);
            }}
            className={getButtonStyles(theme, selectedView === view)}
            onMouseEnter={() => !isViewClicked && setHoveredImageIndex(view)}
            onMouseLeave={() => !isViewClicked && setHoveredImageIndex(null)}
          >
            {view}
          </button>
        ))}
      </div>


      </div>

      <div className="flex flex-col items-center justify-center w-full ">
        <div className="flex overflow-x-auto mt-5 w-full pl-0 md:pl-20 flex-col md:flex-row flex-wrap justify-start">
          {["React Native Basics", "Understanding Flutter", "Android Development 101", "iOS App Design", "Building Web Apps with React", "Quality Assurance Best Practices", "Exploring DevOps Tools", "Introduction to UI/UX Design"].map((blog, index) => (
            <div key={index} className={`m-4 flex flex-col items-center w-full md:w-1/5 space-y-2 border-large border-slate-200 p-5 rounded-xl ${premiumPosts.includes(index) ? 'bg-gradient-to-r from-[#024CAA] to-[#1E90FF] border border-[#024CAA]' : 'bg-transparent'}`}>
              <div className="flex justify-between w-full">
                <div className="flex items-center mt-2 cursor-pointer mb-1" onClick={() => window.open('https://www.linkedin.com/in/adnansahinovic/', '_blank')}>
                  <img src={generateAvatar(index)} alt="Author Avatar" className="w-7 h-7 rounded-full mr-2" />
                  <span className="text-[0.95em] text-slate-100">Adnan Sahinovic</span>
                </div>
                <span className="text-[0.95em] text-slate-200 mt-2">Three days ago</span>
              </div>
              <Image
                src={[screenshot0, screenshot1, screenshot2, screenshot3, screenshot1, screenshot2, screenshot2, screenshot1, screenshot0][index]} // Use screenshot images
                alt={`Screenshot ${index + 1}`}
                className="w-full h-55 object-cover rounded-xl"
              />
              <div className="flex flex-col items-start w-full">
                <h3 className="text-[1.4em] font-bold text-slate-100 tracking-wide">{blog}</h3>
                <p className="text-slate-200 font-inter text-[0.9em]">A step-by-step guide for mastering React Native fundamentals and best practices.</p>
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="flex items-center mt-2">
                    <MdVisibility className="h-4 w-4 mr-1" color="white" />
                    <span className="text-[0.8em] text-slate-200 font-inter font-medium">1.5K Views</span>
                  </div>
                  {/* <div className="flex items-center">
                    <ChatBubbleOutlineIcon className="h-4 w-4 mr-1" color="white" />
                    <span className="text-[0.8em] text-slate-200 font-inter font-medium">10+ Comments</span>
                  </div> */}
                  <div className="flex items-center">
                    <img style={{filter: 'invert(1)'}} src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="Likes Icon" className="h-4 w-4 mr-1 text-slate-100" />
                    <span className="text-[0.8em] text-slate-200 font-inter font-medium">45 Likes</span>
                  </div>
                </div>
                <button className="mt-2 border border-slate-200 hover:bg-[#73EC8B] hover:text-black text-black px-3 py-1.5 rounded-lg w-full text-white text-bold transition duration-200 ease-in-out hover:outline hover:outline-[#73EC8B]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

 

      {/* Subscribe Modal */}
      {isSubscribeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeSubscribeModal}>
          <div className="bg-white rounded-lg shadow-lg text-center w-1/4 p-10" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeSubscribeModal}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-2 text-[#09122C] flex items-center justify-center">
              <SchoolIcon className="mr-2" size={35} /> Join Our Newsletter
            </h2>
            <p className="mb-4 font-inter font-medium text-[#243642]">Join our newsletter to stay updated with the currated and latest mobile resources, trends, and best practices.</p>
            <div className="flex items-center border rounded p-2 mb-4 w-full border-slate-400">
              <FaEnvelope className="mr-2 text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow h-5 focus:outline-none focus:border-none"
                style={{ fontSize: '1em', padding: '1%' }}
              />
            </div>
            <button
              onClick={closeSubscribeModal}
              className="bg-black text-white px-4 py-2 rounded w-full hover:bg-slate-800"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Landing;
