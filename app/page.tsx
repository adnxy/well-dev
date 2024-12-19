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

const SoccerBetting = () => {
  const { theme } = useTheme();

  // Set default selected filter to "Web" and "Screen"
  const [selectedFilter, setSelectedFilter] = useState<string | null>("Web");
  const [selectedView, setSelectedView] = useState<string | null>("UI Screens");
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState<number>(0);

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

  const nextImage = () => {
    setCurrentScreenshotIndex((prevIndex) => (prevIndex + 1) % [screenshot0, screenshot1, screenshot2, screenshot3].length);
  };

  const prevImage = () => {
    setCurrentScreenshotIndex((prevIndex) => (prevIndex - 1 + [screenshot0, screenshot1, screenshot2, screenshot3].length) % [screenshot0, screenshot1, screenshot2, screenshot3].length);
  };

  return (
    <section
      className={`flex flex-col items-start w-full h-100 flex-1 flex-start flex-start ${styles.body}`}
    >
      <div className="flex w-1/1 mt-5 mb-10 justify-start pl-[120px] h-10">
        {["Web", "iOS", "Android"].map((filter) => (
        <button
        key={filter}
        onClick={() => handleFilterClick(filter)}
        className={`px-5 text-l py-2 rounded-xl border-none text-gray-400 ${
          selectedFilter === filter
            ? "text-white underline"
            : "text-slate-400"
        }`}
      >
        {filter}
      </button>
        ))}
      </div>

      <div className="flex w-1/2 space-x-3 justify-start pl-[140px]">
        {["Auth", "Dashboard", "UI Components", "Forms", "Buttons", "Modals", "Charts"].map((view) => (
          <button
            key={view}
            onClick={() => handleViewClick(view)}
            className={`px-10 py-2 rounded-xl border whitespace-nowrap flex-shrink-0 ${
              selectedView === view
                ? "bg-white text-black"
                : "border-gray-400 text-white"
            }`}
          >
            {view}
          </button>
        ))}
      </div>

      {/* New section for screenshots */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-4">
          <FaImage className="text-2xl mr-2" /> {/* Icon */}
          <h2 className="text-xl">Screenshots</h2> {/* Title */}
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {[screenshot0, screenshot1, screenshot2, screenshot3].map((screenshot, index) => (
            <div
              key={index}
              className="m-2 flex justify-center relative w-2/5"
              onMouseEnter={() => setHoveredImageIndex(index)}
              onMouseLeave={() => setHoveredImageIndex(null)}
            >
              <Image
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="min-w-[600px] min-h-[400px] w-full object-cover cursor-pointer m-3 rounded-xl image-hover hover:scale-105 transition-all duration-400"
                onClick={() => openModal(index)}
              />
              {hoveredImageIndex === index && 
                <FaArrowCircleRight color="navy" className="text-3xl absolute top-5 right-10" />
              }
              {hoveredImageIndex === index && (
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-2 flex space-x-3">
                  <button className="bg-slate-200 text-black px-4 py-3 rounded mr-1 mt-2">
                    Download Design
                  </button>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
                    Download Code
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the screenshot */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-10">
          <div className="relative bg-white rounded-lg overflow-hidden flex flex-col items-center">
            <button onClick={closeModal} className="absolute top-2 left-2 text-[35px] text-red-500">✖</button>
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-black">❮</button>
            <button onClick={nextImage} className="absolute top-1/2 right-[400px] transform -translate-y-1/2 text-3xl text-black">❯</button> {/* Ensure visibility */}
            
            <div className="flex"> {/* Added flex container for image and details */}
              {/* Ensure the image is displayed correctly */}
              <Image
                src={[screenshot0, screenshot1, screenshot2, screenshot3][currentScreenshotIndex]} // Use current index
                alt={`Screenshot ${currentScreenshotIndex + 1}`} // Update alt text for accessibility
                className="w-full h-auto max-w-[800px] max-h-[600px] object-cover" // Set max dimensions
              />
              <div className="bg-[#1E1E1E] text-white flex flex-col min-w-[350px] p-10 ml-4"> {/* Moved content here */}
                <h3 className="text-lg font-semibold mb-2">Sleek Authentication</h3>
                <p className="text-base text-gray-500 mb-1">Created: Jan 1, 2023 | Downloads: 150</p>
                <p className="text-base text-gray-500 mb-4">Stack: Figma, React, Tailwind CSS</p>
                <div className="flex flex-col space-y-2">
                  <button className="bg-slate-300 text-black px-6 py-3 rounded-lg shadow-md hover:bg-slate-400 transition duration-200">
                    Download Figma
                  </button>
                  <button className="bg-[#15F5BA] text-black px-6 py-3 rounded-lg shadow-md hover:bg-[#10E5A0] transition duration-200">
                    Download Code
                  </button>
                  <button className="bg-slate-300 text-black px-6 py-3 rounded-lg shadow-md hover:bg-slate-400 transition duration-200">
                    Save to Collection
                  </button>
                  <button className="bg-slate-300 text-black px-6 py-3 rounded-lg shadow-md hover:bg-slate-400 transition duration-200">
                    Add Review
                  </button>
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
