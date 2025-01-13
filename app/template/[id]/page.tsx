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
  const platform = "iOS & Android"; // Replace with dynamic data
  const rating = "4.8"; // Replace with dynamic data
  const category = "Artificial Intelligence"; // Replace with dynamic data
  const stack = "React Native, Expo"; // Replace with dynamic data
  const delivery = "  , Code"; // Replace with dynamic data
  const description = "AI Chatbot, a React Native app that allows you to chat with AI. Created with Expo, Typescript. Easy to customize and deploy. Documentation and support included. Project maintenance and lifetime support included."; // Replace with dynamic data
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

  const comments = [
    {
      name: "John Doe",
      avatar: "https://example.com/avatar1.png",
      comment: "This app is fantastic! It has changed the way I interact with AI. I've been using it for a few months now and it's been a game changer for me.",
      userType: "UI Designer"
    },
    {
      name: "Jane Smith",
      avatar: "https://example.com/avatar2.png",
      comment: "Nice UI, easy to use and customize. I've been using it for a few months now and it's been a game changer for me.",
      userType: "Frontend Developer"
    },
    {
      name: "Alice Johnson",
      avatar: "https://example.com/avatar3.png",
      comment: "Looking for a way to chat with AI? This app is the perfect solution. It's easy to use and has a great user interface. I've been using it for a few months now and it's been a game changer for me.",
      userType: "Founder"  
    },
  ]; // Added comments array

  return (
    <div>
      <div className="flex flex-col items-start justify-start pl-20 mt-10">
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <h2 className="text-[1em] font-normal text-white max-w-[800px] overflow-wrap break-word">{description}</h2>  
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
          <div className="flex space-x-12">
            <p className="text-md text-slate-300 my-1 font-regular">Platform</p>
            <p className="text-md text-slate-300 my-1 font-regular">Rating</p>
            <p className="text-md text-slate-300 my-1 font-regular">Category</p>
          </div>
          <div className="flex space-x-5">
            <p className="text-[1em] text-white my-1 font-medium">{platform}</p>
            <p className="text-[1em] text-white my-1 font-medium">{rating} (180)</p>
            <p className="text-[1em] text-white my-1 font-medium">{category}</p>
          </div>

          <div className="flex justify-end mt-4 right-10 mb-100">
            {!isVideoVisible && (
              <>
                <button className="bg-[#F0F0F0] text-black px-4 py-2 rounded-full shadow-lg hover:bg-[#]/80 transition duration-300 font-bold text-md mr-3">
                  Buy Now $99
                </button>
                <button
                  onClick={handlePlayDemo}
                  className=" text-white border border-white px-4 py-2 rounded-full shadow-lg transition duration-300 font-bold text-md"
                >
                  Play Demo
                </button>
                <button
                  onClick={handlePlayDemo}
                  className=" text-white border border-white px-4 py-2 rounded-full shadow-lg transition duration-300 font-medium text-md ml-2 absolute right-20 top-40 "
                >
                  Customize
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
  
      <div className="mt-10 flex space-x-4 p-4 bg-gray-900 rounded-lg shadow-lg pl-20 overflow-x-auto">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start p-4 bg-gray-800 rounded-lg shadow-md min-w-[250px]">
            <img
              // src={comment.avatar}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`${comment.name}'s avatar`}
              className="h-10 w-10 rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-white">{comment.name}</p>
              <p className="text-gray-300 text-[0.95em] text-slate-100">@{comment.userType}</p>
              <p className="text-gray-300 text-[0.95em] text-slate-300">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 bg-[#1E1E1E]/40 p-20">
        <div className="text-center mt-10">
          <p className="text-white text-[2em] font-bold">Access to all mobile apps and 9,631 screens.</p>
          <p className="text-slate-200 font-[1.5em]">Get unlimited access to the full library from $10/month — cancel anytime.</p>
          <button className="bg-[#F0F0F0] text-black px-8 py-2 rounded-full shadow-lg hover:bg-[#]/80 transition duration-300 font-medium text-md mt-4">
            Get Pro
          </button>
          <div className="flex items-center justify-center mt-2">
            <div className="flex -space-x-1">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                className="h-8 w-8 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-slate-300 mt-2 ml-4">Supporting thousands of software developers, designers and agencies worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
