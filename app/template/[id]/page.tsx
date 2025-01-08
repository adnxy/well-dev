"use client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



import mobileScreen1 from "../../../public/mobile-screen1.png";
import mobileScreen2 from "../../../public/mobile-screen2.png";
import mobileScreen3 from "../../../public/mobile-screen3.png";
import mobileScreen4 from "../../../public/mobile-screen4.png";
import mobileScreen5 from "../../../public/mobile-screen5.png";

const TemplatePage = () => {
  const title = "AI Chatbot"; // Replace with dynamic data
  const platform = "iOS, Android"; // Replace with dynamic data
  const rating = "4.5/5"; // Replace with dynamic data
  const category = "AI"; // Replace with dynamic data
  const screenshots = [mobileScreen1, mobileScreen2, mobileScreen3, mobileScreen4, mobileScreen5, mobileScreen1, mobileScreen2, mobileScreen3, mobileScreen4, mobileScreen5]; // Replace with dynamic data
  const [isVideoVisible, setIsVideoVisible] = useState(false); // State to control video visibility

  const handlePlayDemo = () => {
    setIsVideoVisible(true); // Show the video
    const iframe = document.getElementById('youtube-video');
    if (iframe) {
      const requestFullscreen = iframe.requestFullscreen || iframe?.webkitRequestFullscreen || iframe?.mozRequestFullScreen || iframe?.msRequestFullscreen;
      if (requestFullscreen) {
        requestFullscreen.call(iframe);
      }
    }
  };

  const handleCloseVideo = () => {
    setIsVideoVisible(false); // Hide the video
    const iframe = document?.getElementById('youtube-video');
    const exitFullscreen = document?.exitFullscreen || document?.webkitExitFullscreen || document?.mozCancelFullScreen || document?.msExitFullscreen;

    // Check if the document is in fullscreen mode before attempting to exit
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      if (exitFullscreen) {
        exitFullscreen.call(document);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col items-start justify-start pl-20 mt-10">
      <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>

        <div className="">
          <p className="text-lg text-white my-1">Platform: {platform}</p>
          <p className="text-lg text-white my-1">Stack: <span className="text-slate-200">React Native, Expo</span></p>
          <p className="text-lg text-white my-1">Rating: {rating}</p>
          <p className="text-lg text-white my-1">Category: {category}</p>
        </div>
        <div className="flex justify-end mt-4 absolute right-10 mb-100">
          {!isVideoVisible && (
            <>
              <button 
                onClick={handlePlayDemo} 
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 font-bold text-md mr-4"
              >
                Play Demo
              </button>
              <button 
                className="bg-emerald-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-bold text-md"
              >
                Buy Now $99
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
      <div style={{ display: 'flex', overflowX: 'auto', padding: '0 50px', marginTop: '40px', marginLeft: '10px' }}>
        {screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot.src} alt={`Screenshot ${index + 1}`} style={{ margin: '0 10px', height: '700px', width: '400px', borderRadius: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default TemplatePage;