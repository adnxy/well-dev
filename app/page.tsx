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
import { getLeagueImage } from "./helpers/getLeagueImage";

export const getButtonClass = (theme: string, isSelected: boolean) => {
  if (isSelected && theme === 'light') {
    return 'font-medium underline underline-offset-8 text-orange-400'; // Selected button color
  }
  if (isSelected && theme === 'dark') {
    return 'font-medium underline underline-offset-8 text-orange-400'; // Selected button color
  }
  return theme === 'light' ? 'text-black' : 'text-white'; // Default button color based on theme
};

const getButtonStyles = (theme: string, isSelected: boolean) => {
  const baseStyle = "px-6 py-2 rounded-full border whitespace-nowrap flex-shrink-0";
  const activeStyle = theme === 'light' 
    ? "text-orange-400" // Light theme active style
    : "text-orange-400"; // Dark theme active style

  if (isSelected) { 
    return `${baseStyle} ${activeStyle} `;
  }
  return `${baseStyle} ${theme === 'light' ? 'text-black' : 'text-white'}`; // Default text color for dark theme
};

const SoccerBetting = () => {
  const { theme } = useTheme();

  // Set default selected filter to "Web" and "Screen"
  const [selectedFilter, setSelectedFilter] = useState<string | null>("Apps");
  const [selectedView, setSelectedView] = useState<string | null>("E-commerce");
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
    console.log("openModal", index);
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
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

  const mobileScreenshots = [mobileScreen1, mobileScreen2, mobileScreen3, mobileScreen4];

  return (
    <section
      className={`${theme === "light" ? "bg-white" : "bg-[#111111]"} flex flex-col items-start w-full flex-1 flex-start flex-start ${styles.body}`}
    >

      <div className="flex flex-col items-start w-full flex-1 flex-start flex-start justify-between pl-20">

      <div className="flex w-full justify-start pl-0 mb-5">
        {["Apps", "Designs", "Free Resources"].map((filter) => (
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

      <div className="flex w-full space-x-3 justify-start pl-1">
        {["E-commerce", "Fitness", "Fintech", "Crypto"].map((view) => (
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
        <div className="flex flex-wrap justify-start mt-5 w-full pl-20">
          {selectedFilter === "Apps" 
            ? mobileScreenshots.map((screenshot, index) => (
              <div
                key={index}
                className="m-1 flex justify-center relative w-1/5 mr-[20px]"
                onMouseEnter={() => setHoveredImageIndex(index)}
                onMouseLeave={() => setHoveredImageIndex(null)}
                onClick={() => openModal(index)}
              >
                {/* Circle overlay for hovered screenshots */}
                {hoveredImageIndex === index && (
                  <div className="absolute top-10 left-10 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500" />
                )}
                <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="min-w-[240px] min-h-[200px] w-full object-cover cursor-pointer m-2 rounded-xl"
                />
                {hoveredImageIndex === index && (
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-2 flex space-x-1 whitespace-nowrap">
                    <button className="bg-slate-100 text-black px-6 py-3 rounded mr-1 text-[1em]">
                      View Demo
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded mr-1 text-[1em]">
                      Buy Now
                    </button>
                  </div>
                )}
              </div>
            ))
            : [screenshot0, screenshot1, screenshot2, screenshot3].map((screenshot, index) => (
              <div
                key={index}
                className="m-4 flex justify-center relative w-2/5"
                onMouseEnter={() => setHoveredImageIndex(index)}
                onMouseLeave={() => setHoveredImageIndex(null)}
              >
                <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="min-w-[650px] min-h-[400px] w-full object-cover cursor-pointer m-3 rounded-xl"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-10 bg-black">
          <div ref={modalRef} className="relative  rounded-lg overflow-hidden flex flex-col items-center p-10 bg-[#2A3335]/40">
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl text-white">❮</button>
            <button onClick={nextImage} className="absolute top-1/2 right-[10px] transform -translate-y-1/2 text-2xl text-white">❯</button> {/* Ensure visibility */}
            
            <div className="flex bg-[#1f1f1f] rounded-xl"> {/* Added flex container for image and details */}
              {/* Ensure the image is displayed correctly */}
              <Image
                src={[mobileScreen1, mobileScreen2, mobileScreen3, mobileScreen4, mobileScreen5][currentScreenshotIndex]} // Use current index
                alt={`Screenshot ${currentScreenshotIndex + 1}`} // Update alt text for accessibility
                className="w-[350px] h-[700px] object-cover rounded-l-xl" // Changed dimensions to 300x300
              />
              <div className="bg-[#1f1f1f] text-white flex flex-col min-w-[370px] p-5 pl-1/4 rounded-r-lg"> {/* Moved content here */}
                <h3 className="text-lg font-semibold mb-2 font-inter leading-tight mb-3">E-commerce Shop</h3> {/* Added font */}
                <p className="text-base text-gray-500 mb-1 font-inter leading-tight mb-3">Type: iOS App, Android App</p>
                <p className="text-base text-gray-500 mb-1 font-inter leading-tight mb-3">Updated: Jan 3, 2023</p>
                <p className="text-base text-gray-500 mb-4 font-inter leading-tight mb-3 line-height-3">Stack: Expo, React Native, Tailwind CSS</p>

                <div className="flex flex-col space-y-3">
   
                  
                  <button className="text-sm bg-slate-200 text-black px-6 py-3 rounded-lg shadow-md hover:bg-slate-200/90 transition duration-200">
                    View Demo
                  </button>

                  <button className="text-sm bg-slate-200 text-black px-6 py-3 rounded-lg shadow-md hover:bg-slate-200/90 transition duration-200">
                    Buy $150 
                  </button>

                  <button className="text-sm bg-[#1F509A] text-white px-6 py-3 rounded-lg shadow-md ">
                    Custom Development
                  </button>

                  {/* Separate Divider */}
                  <div className="border-b-2 border-slate-400 pt-1 pb-1" /> {/* New divider */}
                  {/* Star Rating Component */}
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`mr-3 cursor-pointer text-3xl ${star <= currentRating ? 'text-yellow-500' : 'text-gray-400'}`}
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
    </section>
  );
};

export default SoccerBetting;
