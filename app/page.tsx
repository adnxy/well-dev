"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import bannerBg2 from "../public/pitch.jpg";
import bannerBg4 from "../public/bg-4.jpg";
import bannerBg6 from "../public/bg-6.jpg";
import bannerBg7 from "../public/bg-7.jpg";


import screenshot0 from "../public/screenshot.png";
import screenshot1 from "../public/screenshot1.png";
import screenshot2 from "../public/screenshot2.png";
import screenshot3 from "../public/screenshot3.png";

import mobileScreen1 from "../public/mobile-screen1.png";
import mobileScreen2 from "../public/mobile-screen2.png";
import mobileScreen3 from "../public/mobile-screen3.png";
import mobileScreen4 from "../public/mobile-screen4.png";
import mobileScreen5 from "../public/mobile-screen5.png";

import {
  FaTrophy,
  FaCrown,
  FaInfoCircle,
  FaArrowLeft,
  FaArrowRight,
  FaDollarSign,
  FaStar,
  FaGlobe,
  FaLock,
  FaSeedling,
  FaCheckCircle,
  FaImage,
  FaInfo,
  FaOpencart,
  FaCompress,
  FaStreetView,
  FaArrowCircleRight,
} from "react-icons/fa";

import { useTheme } from "./context/ThemeContext";
import axios from "axios";

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

  const mobileScreenshots = [mobileScreen1, mobileScreen2, mobileScreen3, mobileScreen4, mobileScreen1, mobileScreen2];

  return (
    <section
      className={`${theme === "light" ? "bg-white" : "bg-[#111111]"} flex flex-col items-start w-full flex-1 flex-start flex-start ${styles.body}`}
    >
      <div className="flex flex-col items-start w-full flex-1 flex-start flex-start justify-between pl-20">
      <h1 className={`text-3xl pl-2 mb-2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>Discover</h1>
      <h2 className={`text-[1.1em] pl-2 mb-4 font-medium ${theme === "light" ? "text-black" : "text-[#EEEEEE]"}`}>
        Get inspired and download premium mobile designs, elements, workflows and pre-coded templates.
      </h2>

     <div className="flex w-full justify-start pl-0 mb-2">
        {["React Native", "Flutter", "Android", "iOS", "Figma" ].map((filter) => (
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
        {["Apps", "Workflows", "Screens", "UI Elements"].map((view) => (
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

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex overflow-x-auto mt-5 w-full pl-0 md:pl-20 flex-col md:flex-row">
          {selectedFilter === "React Native" || selectedFilter === "Flutter" || selectedFilter === "Android" || selectedFilter === "iOS"
            ? mobileScreenshots.map((screenshot, index) => (
              <div
                key={index}
                className="m-1 flex justify-center relative w-full md:w-auto"
                onMouseEnter={() => setHoveredImageIndex(index)}
                onMouseLeave={() => setHoveredImageIndex(null)}
                onClick={() => window.location.href = `/template/${index}`}
              >
                {/* Circle overlay for hovered screenshots */}
                {hoveredImageIndex === index && (
                  <div className="absolute top-10 left-10 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#111111]" />
                )}
                <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="min-w-[320px] min-h-[200px] w-full object-cover cursor-pointer m-2 rounded-xl"
                />
                {hoveredImageIndex === index && (
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-2 flex space-x-1 whitespace-nowrap">
                    <button className="bg-slate-100 text-black px-6 py-3 rounded-full mr-1 text-[1em]">
                      View Demo
                    </button>
                    <button className="bg-[#111111] text-white px-6 py-3 rounded-full mr-1 text-[1em]">
                      Buy Now
                    </button>
                  </div>
                )}
              </div>
            ))
            : [screenshot0, screenshot1, screenshot2, screenshot3].map((screenshot, index) => (
              <div
                key={index}
                className="m-4 flex justify-center relative w-full md:w-2/5 bg-blue-500"
                onMouseEnter={() => setHoveredImageIndex(index)}
                onMouseLeave={() => setHoveredImageIndex(null)}
              >
                <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="min-w-[550px] min-h-[400px] w-full object-cover cursor-pointer m-3 rounded-xl"
                  onClick={() => openModal(index)}
                />
                {hoveredImageIndex === index && (
                  <div className="absolute inset-0 bg-black opacity-50 rounded-xl w-full" />
                )}
                {hoveredImageIndex === index && 
                  <FaArrowCircleRight color="navy" className="text-3xl absolute top-5 right-10" />
                }
                {hoveredImageIndex === index && (
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-2 flex space-x-2 whitespace-nowrap">
                    <button className="bg-slate-200 text-black px-3 py-3 rounded mr-1 text-sm">
                      Download Design
                    </button>
                    <button className="bg-[#00FF9C] text-black px-3 py-3 rounded mr-1 text-sm">
                      Download Code
                    </button>
                  </div>
                )}
              </div>
            ))
          }
        </div>
      </div>

      {/* Modal for displaying the screenshot */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-0">
          <div ref={modalRef} className="relative w-[95%] max-h-[95%] flex flex-col items-center p-0 bg-[#1E1E1E]/90 overflow-hidden rounded-xl">
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl text-white">❮</button>
            <button onClick={nextImage} className="absolute top-1/2 right-[10px] transform -translate-y-1/2 text-2xl text-white">❯</button> {/* Ensure visibility */}
            
            <div className="flex bg-[#1f1f1f] rounded-none  mt-10 mb-10  rounded-xl"> {/* Changed rounded to none */}
              <Image
                src={[mobileScreen1, mobileScreen2, mobileScreen3, mobileScreen4, mobileScreen5][currentScreenshotIndex]} // Use current index
                alt={`Screenshot ${currentScreenshotIndex + 1}`} // Update alt text for accessibility
                className="w-full h-[700px] object-cover rounded-xl" // Changed dimensions to full
              />
              <div className="bg-[#1f1f1f] text-white flex flex-col min-w-[370px] p-5 pl-1/4 rounded-none"> {/* Changed rounded to none */}
                <h3 className="text-[1.4em] font-semibold mb-2 font-inter leading-tight mb-3">E-commerce Shop</h3> {/* Added font */}
                <p className="text-[1em] text-gray-500 mb-1 font-inter leading-tight mb-3">Type: iOS App, Android App</p>
                <p className="text-[1em] text-gray-500 mb-1 font-inter leading-tight mb-3">Updated: Jan 3, 2023</p>
                <p className="text-base text-gray-500 mb-4 font-inter leading-tight mb-3 line-height-3">Stack: Expo, React Native, Tailwind CSS</p>
                <div className="border-b-2 border-slate-200 pt-1 pb-1" />
                <div className="flex flex-col space-y-2 mt-5 mb-5">
                  <p className="text-sm text-gray-500 mb-4 font-inter leading-tight mb-3 line-height-3">Easy to customize</p>
                  <p className="text-sm text-gray-500 mb-4 font-inter leading-tight mb-3 line-height-3">Easy to customize</p>
                  <p className="text-sm text-gray-500 mb-4 font-inter leading-tight mb-3 line-height-3">Easy to customize</p>
                </div>

                <div className="flex flex-col space-y-3">
                  <button className="text-sm bg-slate-200 text-black px-6 py-3 rounded-lg shadow-md hover:bg-slate-200/90 transition duration-200">
                    View Demo
                  </button>

                  <button className="text-sm bg-slate-200 text-black px-6 py-3 rounded-lg shadow-md hover:bg-slate-200/90 transition duration-200">
                    Buy $199 
                  </button>

                  <button className="text-sm bg-[#1F509A] text-white px-6 py-3 rounded-lg shadow-md ">
                    Customize
                  </button>

                  {/* Separate Divider */}
                  <div className="border-b-21 border-slate-200 pt-1 pb-1" /> {/* New divider */}
                  {/* Star Rating Component */}
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`mr-3 cursor-pointer text-2xl ${star <= currentRating ? 'text-yellow-500' : 'text-gray-400'}`}
                        // onClick={() => handleRating(star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-white">Average Rating: 4.5 (115 reviews)</p>
                  {/* Disabled rating functionality */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )}

      {/* New Section */}
      <div className="flex flex-col items-center justify-left w-full mt-20 pl-40">
        <h2 className={`text-4xl font-bold ${theme === "light" ? "text-black" : "text-white"} w-1/2 text-center line-height-10`}>
          The world’s premium design inspiration and pre-coded solutions
        </h2>
        <div className="mt-4 p-6 border rounded-lg shadow-lg bg-[#1E1E1E]/40 mb-2 mt-8 w-1/2 line-height-10">
          {/* Content for the box can be added here */}
          <p style={{fontSize: '1.15em'}} className={`text-center ${theme === "light" ? "text-black" : "text-white"} font-inter line-height-30 font-xl font-[#1E1E1E] font-normal font-[15em]`}>
            Explore a vast collection of design resources, templates, and inspiration for your next project. Download designs, coded solutions, or help us build custom apps.
          </p>
        </div>
        <div className="flex justify-end mt-4 right-10 mb-130">
              <>
                <button className="bg-[#F0F0F0] text-black px-7 py-2 rounded-full shadow-lg hover:bg-[#]/80 transition duration-300 font-bold text-md mr-4">
                  Create Account
                </button>
                <button
                  className="text-white border border-white px-7 py-2 rounded-full shadow-lg transition duration-300 font-bold text-md"
                >
                  See All Plans
                </button>
              </>
        </div>
        {/* Moved icons to a new artistic layout */}
        <div className="flex flex-wrap justify-between w-full pr-40 mt-20">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="h-14 transform rotate-12 mb-4" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="h-14 transform -rotate-12 mb-4" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" className="h-14 transform translate-x-4 mb-4" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg" className="h-14 transform -translate-x-4 mb-4" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" className="h-14 transform rotate-6 mb-4" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" className="h-14 transform -rotate-6 mb-4 filter invert" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" className="h-14 transform -rotate-6 mb-4" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg" className="h-14 transform -rotate-6 mb-4" />
        </div>

    
      </div>
    </section>
  );
};

export default Landing;
