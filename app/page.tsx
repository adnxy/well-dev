"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css"; // Add your styles here
import bannerBg from "../public/banner-bg.jpg";
import { FaFootballBall, FaFlag, FaTrophy, FaMedal, FaEthereum, FaBitcoin } from 'react-icons/fa'; // Example icons
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Import CSSTransition and TransitionGroup
import premierLeagueImg from "../public/england.png"; // Import Premier League image
import laLigaImg from "../public/spain.png"; // Import La Liga image
import bundesligaImg from "../public/germany.png"; // Import Bundesliga image
import serieAImg from "../public/italy.png"; // Import Serie A image
import ProgressBar from '@ramonak/react-progress-bar'; // Import ProgressBar
import { Carousel } from 'react-responsive-carousel'; // Import Carousel from react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { useTheme } from "./context/ThemeContext";


const SoccerBetting = () => {

  const [selectedLeague, setSelectedLeague] = useState("Premier League");
  const { theme } = useTheme();

  const leagues = [
    { name: "Premier League", icon: <Image src={premierLeagueImg} alt="Premier League" width={22} height={22} /> },
    { name: "La Liga", icon: <Image src={laLigaImg} alt="La Liga" width={22} height={22} /> },
    { name: "Bundesliga", icon: <Image src={bundesligaImg} alt="Bundesliga" width={22} height={22} /> },
    { name: "Serie A", icon: <Image src={serieAImg} alt="Serie A" width={22} height={22} /> },
  ];
  const matches = [
    { home: "Manchester City", away: "Liverpool", prediction: "Manchester City wins", probability: 75 },
    { home: "Real Madrid", away: "Barcelona", prediction: "Draw", probability: 50 },
    { home: "Juventus", away: "AC Milan", prediction: "Juventus wins", probability: 65 },
    { home: "Chelsea", away: "Arsenal", prediction: "Arsenal wins", probability: 55 },
    { home: "Atletico Madrid", away: "Sevilla", prediction: "Atletico Madrid wins", probability: 70 },
  ];

  const headerImages = [bannerBg, bannerBg, bannerBg]; // Add your images here

  // Add old predictions data with dates
  const oldPredictions = [
    { match: "Manchester City vs Liverpool", prediction: "Manchester City wins", result: "Won", date: "2023-09-01" },
    { match: "Real Madrid vs Barcelona", prediction: "Draw", result: "Lost", date: "2023-09-02" },
    { match: "Juventus vs AC Milan", prediction: "Juventus wins", result: "Won", date: "2023-09-03" },
    { match: "Barcelona vs Atletico Madrid", prediction: "Barcelona wins", result: "Won", date: "2023-09-04" },
    { match: "Chelsea vs Manchester United", prediction: "Draw", result: "Lost", date: "2023-09-05" },
  ];

  return (
    <section className={`flex flex-col items-center ${theme === 'light' ? 'bg-white' : 'bg-[#021814]'}`}>
      {/* Header */}
      <header className="relative h-80 w-4/5 mx-auto rounded-xl overflow-hidden mt-5 px-4 flex justify-center items-center mb-10">
        {/* <Carousel 
          autoPlay // Enable autoplay
          infiniteLoop // Enable infinite loop
          interval={3000} // Set the duration for each slide (in milliseconds)
          showThumbs={false} // Hide thumbnails
          showStatus={false} // Hide status
        > */}
          {headerImages.map((image, index) => (
            <div key={index}>
              <Image
                src={image} // Use the image from the array
                alt={`Soccer Betting Header ${index + 1}`}
                objectFit="cover"
                layout="fill"
              />
            </div>
          ))}
        {/* </Carousel> */}
        <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay for better text visibility */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl font-bold">AI Prediction Agent</h1>
          <p className="text-lg mt-2">Our AI model analyzes large data sets and makes predictions on the outcome of upcoming matches.</p>
          <div className="mt-4">
            <button className="bg-[#2D9479] px-10 py-3 rounded mr-2 justify-center items-center hover:bg-[#1f7a5b]">Get Predictions</button>
            <button className="bg-gray-200 text-black px-10 py-3 rounded hover:bg-gray-300">Learn More</button>
          </div>
        </div>
      </header>

      {/* League Selection Tabs */}
      <div className="flex space-x-4 mt-5 mb-5 justify-start w-4/5">
        <div className="flex flex-row justify-start">
          <TransitionGroup className="flex flex-row">
            {leagues.map((league) => (
              <CSSTransition
                key={league.name}
                timeout={500}
                classNames="fade" 
              >
                <button
                  className={`h-12 font-medium flex items-center space-x-2 px-4 py-2 rounded mr-2 transition duration-300 ease-in-out ${selectedLeague === league.name ? "bg-[#1f7a5b] text-white" : theme === 'light' ? "bg-gray-300 hover:bg-gray-400 text-black" : "bg-[#06231F] hover:bg-[#06231F] text-white"}`}
                  onClick={() => setSelectedLeague(league.name)}
                >
                  {league.icon}
                  <span>{league.name}</span>
                </button>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>

      {/* Matches List */}
      <div className="mt-6 w-4/5 mb-20 justify-between">
        <h2 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Upcoming Matches</h2>
        <ul className="space-y-2">
          {matches.map((match, index) => (
            <li key={index} className={`flex justify-between items-center p-6 ${theme === 'light' ? 'bg-[#EAEBEC]' : 'bg-[#06231F]'} text-white shadow-md rounded transition-colors duration-300 hover:bg-[#1f7a5b]`}>
              <span className={`flex-1 ${theme === 'light' ? 'text-black' : 'text-white'}`}>{match.home} vs {match.away}</span>
              <span className={`flex-1 text-center font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>{match.prediction}</span>
              <div className="flex-1 flex justify-end items-center space-x-4">
                <div className="relative h-2 bg-gray-300 rounded">
                  <ProgressBar bgColor="#2D9479" baseBgColor="#06231F" className="w-40 h-10 pb-20" completed={match.probability} />
                </div>
                <button className="ml-4 bg-[#021914] text-white px-4 py-2 rounded flex items-center hover:bg-[#1f7a5b] transition duration-300" onClick={() => window.open('https://stake.com/?c=Mi4UzmEa', '_blank')}>
                  <FaEthereum className="mr-1" />
                  <FaBitcoin className="mr-1" />
                  Bet Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Old Predictions Section */}
      <div className="mt-6 w-4/5 mb-20 justify-between">
        <h2 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Past Predictions</h2>
        <ul className="space-y-2">
          {oldPredictions.map((prediction, index) => (
            <li 
              key={index} 
              className={`flex justify-between items-center p-6 ${theme === 'light' ? 'bg-[#EAEBEC]' : 'bg-[#06231F]'} ${theme === 'light' ? 'text-black' : 'text-white'} shadow-md rounded transition-colors duration-300 hover:bg-[#1f7a5b]`}
            >
              <span className="flex-1">{prediction.match}</span>
              <span className="flex-1 text-center font-medium">{prediction.prediction}</span>
              <span 
                className={`flex-1 text-center transition-colors duration-300 ${prediction.result === "Won" ? "text-green-500" : "text-red-500"}`}
              >
                {prediction.result === "Won" ? <FaTrophy className="inline mr-2" /> : <FaFlag className="inline mr-2" />}
                {prediction.result}
              </span>
              <span className="flex-1 text-right text-gray-400">
                {new Date(prediction.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoccerBetting;