"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import mobileScreen1 from "../../../public/mobile-screen1.png";
import mobileScreen2 from "../../../public/mobile-screen2.png";
import mobileScreen3 from "../../../public/mobile-screen3.png";
import mobileScreen4 from "../../../public/mobile-screen4.png";
import mobileScreen5 from "../../../public/mobile-screen5.png";

const TemplatePage = () => {
  const title = "AI Chatbot - React Native"; // Replace with dynamic data
  const platform = "iOS, Android"; // Replace with dynamic data
  const rating = "4.8"; // Replace with dynamic data
  const category = "Artificial Intelligence"; // Replace with dynamic data
  const stack = "React Native, Expo"; // Replace with dynamic data
  const delivery = "Figma, Code"; // Replace with dynamic data
  const description = "AI Chatbot, a React Native app that allows you to chat with AI. Created with Expo and React Native. Easy to customize and customize. Documentation and support included."; // Replace with dynamic data
  const screenshots = [
    mobileScreen1,
    mobileScreen2,
    mobileScreen3,
    mobileScreen4,
    mobileScreen5,
    mobileScreen1,
    mobileScreen2,
    mobileScreen3,
    mobileScreen4,
    mobileScreen5,
  ]; // Replace with dynamic data
  const [isVideoVisible, setIsVideoVisible] = useState(false); // State to control video visibility

  const author = {
    name: "Adnan Sahinovic", // Replace with dynamic data
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with dynamic data
    company: "@altruist", // Replace with dynamic data
  };

  const handlePlayDemo = () => {
    setIsVideoVisible(true); // Show the video
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      const requestFullscreen =
        iframe.requestFullscreen ||
        iframe?.webkitRequestFullscreen ||
        iframe?.mozRequestFullScreen ||
        iframe?.msRequestFullscreen;
      if (requestFullscreen) {
        requestFullscreen.call(iframe);
      }
    }
  };

  const handleCloseVideo = () => {
    setIsVideoVisible(false); // Hide the video
    const iframe = document?.getElementById("youtube-video");
    const exitFullscreen =
      document?.exitFullscreen ||
      document?.webkitExitFullscreen ||
      document?.mozCancelFullScreen ||
      document?.msExitFullscreen;

    // Check if the document is in fullscreen mode before attempting to exit
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (exitFullscreen) {
        exitFullscreen.call(document);
      }
    }
  };

  const benefits = [
    "Documentation",
    "Easy To Customize",
    "Customer Support",
    "Custom Solutions",
  ]; // Added benefits array

  return (
    <div>
      <div className="flex flex-col items-start justify-start pl-20 mt-10">
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <h2 className="text-[1em] mb-4 font-normal text-white max-w-[800px] overflow-wrap break-word">{description}</h2>  
        <div className="flex justify-start items-start bg-[#2E2E2E] rounded-full w-[98%] px-5 py-2 mt-3 mb-4 pr-10">
          <p className="text-white">
            <span className="text-emerald-500 bg-white px-3 py-0 rounded-full mr-3 text-[0.9em] font-bold">
              PRO
            </span>{" "}
            Subscribe to get access to every resource and weekly new ones in your inbox{" "}
            <span className="text-emerald-500 underline underline-offset-4 cursor-pointer ml-1">
              Upgrade for $10 per month
            </span>
          </p>
        </div>


        <div className="flex items-center mb-4">
          <a href="https://i-ads.medium.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={author.avatar}
              alt={`${author.name}'s avatar`}
              className="h-9 w-9 rounded-full mr-2"
            />
          </a>
          <div className="text-white">
            <p className="font-bold text-[0.9em]">{author.name}</p>
            <p className="text-sm text-[#989898] text-[0.9em]">ex {author.company}</p>
          </div>
        </div>

        <div className="flex space-x-4 mt-2 mb-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            className="h-8 w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="h-8 w-8"
          />
        </div>


        <div className="flex flex-col items-start justify-start">
          <div className="flex space-x-4">
            <p className="text-md text-white my-1 text-[#989898] mr-5 font-medium">
              Platform
            </p>
            <p className="text-md text-white my-1 text-[#989898] mr-5 font-medium">
              Rating
            </p>
            <p className="text-md text-white my-1 text-[#989898] mr-10 font-medium">
              Category
            </p>

            {/* <p className="text-md text-white my-1 font-[#989898]">Stack</p> */}
          </div>
          <div className="flex space-x-4">
            <p className="text-[1em] text-white my-1 font-medium">{platform}</p>
            <p className="text-[1em] text-white my-1 font-medium">{rating}</p>
            <p className="text-[1em] text-white my-1 font-medium ml-5">
              {category}
            </p>
            {/* <p className="text-md text-white my-1">React Native, Expo</p> */}
          </div>

          <div className="flex justify-end mt-4 right-10 mb-100">
            {!isVideoVisible && (
              <>
                <button className="bg-[#F0F0F0] text-black px-4 py-2 rounded-full shadow-lg hover:bg-[#]/80 transition duration-300 font-bold text-md mr-2">
                  Buy Now $99
                </button>
                <button
                  onClick={handlePlayDemo}
                  className=" text-white border border-white px-4 py-2 rounded-full shadow-lg transition duration-300 font-bold text-md"
                >
                  Play Demo
                </button>


              </>
            )}
            {isVideoVisible && (
              <div className="relative">
                <button
                  onClick={handleCloseVideo}
                  className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full"
                >
                  Close
                </button>
                <iframe
                  id="youtube-video"
                  width="1500"
                  height="700"
                  src="https://www.youtube.com/embed/E59--rHLOHA?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

        </div>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "0 50px",
          marginTop: "40px",
          marginLeft: "10px",
        }}
      >
        {screenshots.map((screenshot, index) => (
          <img
            key={index}
            src={screenshot.src}
            alt={`Screenshot ${index + 1}`}
            style={{
              margin: "0 10px",
              height: "700px",
              width: "400px",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
  
    </div>
  );
};

export default TemplatePage;
