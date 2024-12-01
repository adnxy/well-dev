"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css"; // Add your styles here
import bannerBg from "../public/banner-bg.jpg";
import bannerBg2 from "../public/pitch.jpg";
import bannerBg3 from "../public/bg-3.jpg";
import bannerBg4 from "../public/bg-4.jpg";
import bannerBg6 from "../public/bg-6.jpg";
import bannerBg7 from "../public/bg-7.jpg";

import { FaFootballBall, FaFlag, FaTrophy, FaMedal, FaEthereum, FaBitcoin, FaCrown, FaInfoCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Example icons
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
  const teamRef = useRef<HTMLDivElement>(null);

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

  const headerImages = [bannerBg2, bannerBg4, bannerBg6, bannerBg7]; // Add your images here

  // Add old predictions data with dates
  const oldPredictions = [
    { match: "Manchester City vs Liverpool", prediction: "Manchester City wins", result: "Won", date: "2023-09-01" },
    { match: "Real Madrid vs Barcelona", prediction: "Draw", result: "Lost", date: "2023-09-02" },
    { match: "Juventus vs AC Milan", prediction: "Juventus wins", result: "Won", date: "2023-09-03" },
    { match: "Barcelona vs Atletico Madrid", prediction: "Barcelona wins", result: "Won", date: "2023-09-04" },
    { match: "Chelsea vs Manchester United", prediction: "Draw", result: "Lost", date: "2023-09-05" },
  ];

  const teamImages = [
    'https://www.socios.com/wp-content/uploads/2024/05/The-Final-Stretch-of-the-Premier-League_-Championship-Battle-2024_.jpg',
    'https://thefootballfaithful.com/wp-content/uploads/2024/08/Liverpool-Premier-League-Season-Preview-202425.png',
    "https://images2.minutemediacdn.com/image/upload/c_crop,w_2389,h_1343,x_0,y_64/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01j6me33dnshvytgk973.jpg",
    "https://assets.goal.com/images/v3/blt2dfcd69db17738d4/arsenal%20newcastle.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    "https://static.euronews.com/articles/stories/08/30/18/18/1920x1080_cmsv2_45b0ba81-86b6-51aa-b2db-3fe1396d6f1c-8301818.jpg"

  ];

  const analyses = [
    { title: "Mohhamed Salah 2024 Analysis", content: "Detailed analysis of match predictions.", date: "2023-09-10" },
    { title: "Amad Diallo Analysis", content: "Insights on team performances.", date: "2023-09-11" },
    { title: "Cole Palmer Long Range Analysis", content: "Player statistics and their impact.", date: "2023-09-12" },
    { title: "Brentford Team Analysis", content: "Tactical breakdown of recent matches.", date: "2023-09-13" },
  ];

  const analysesRef = useRef<HTMLDivElement>(null); // Create a ref for the analyses container

  const scrollLeft = () => {
    if (analysesRef.current) {
      analysesRef.current.scrollBy({ left: -400, behavior: 'smooth' }); // Scroll left
    }
  };

  const scrollRight = () => {
    if (analysesRef.current) {
      analysesRef.current.scrollBy({ left: 400, behavior: 'smooth' }); // Scroll right
    }
  };

  const scrollLeftTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollBy({ left: -400, behavior: 'smooth' }); // Scroll left
    }
  };

  const scrollRightTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollBy({ left: 400, behavior: 'smooth' }); // Scroll right
    }
  };

  const playerImages = [
    'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/415112630_968953824589575_8956224801862747014_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=45Za0g99lxgQ7kNvgHFqnVL&_nc_zt=23&_nc_ht=scontent.fsjj1-1.fna&_nc_gid=A_3dLSqHi-JuUpZYgfB4jzb&oh=00_AYDyWGb76l47-OgTUh2ptvlfkT7FNSs2k0Ws60Yo1x2RfQ&oe=67526007',
    'https://static.independent.co.uk/2024/11/08/08/013d26c9bcec553a7cb49ef25a657575Y29udGVudHNlYXJjaGFwaSwxNzMxMTIwNTY1-2.78135283.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp',
    'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/3a97/live/0dac61f0-d7a9-11ee-8f28-259790e80bba.jpg.webp',
    'https://static.standard.co.uk/2023/10/21/16/Brentford+FC+v+Burnley+FC+-+Premier+League-eb8ma2xy.jpeg?crop=8:5,smart&quality=75&auto=webp&width=1000'
    // Add more image paths as needed
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Add state for hover index
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // useEffect(() => {
  //   setHoveredIndex(0);
  //   const interval = setInterval(() => {
  //     setHoveredIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex + 1) % analyses.length));
  //   }, 3000);
    
  //   setIntervalId(interval); // Store interval ID
  //   return () => clearInterval(interval);
  // }, []);

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0); // State for current banner index
  const [fade, setFade] = useState(false); // State for fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade out
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % headerImages.length); // Update index
        setFade(false); // Trigger fade in
      }, 750); // Match this duration with your CSS transition duration
    }, 3500); // Change banner every 2000 ms (1.5s for fade + 0.5s for display)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const teamAnalyses = [
    { title: "Manchester City Team Analysis", content: "In-depth look at Manchester City's performance this season." },
    { title: "Liverpool Team Analysis", content: "Analysis of Liverpool's tactics and player performances." },
    { title: "Chelsea Team Analysis", content: "Review of Chelsea's recent matches and strategies." },
    { title: "Arsenal Team Analysis", content: "Insights into Arsenal's team dynamics and player contributions." },
    { title: "Manchester United Team Analysis", content: "Analysis of Manchester United's recent matches and strategies." },
  ];

  return (
    <section className={`flex flex-col items-center ${theme === 'light' ? 'bg-white' : 'bg-[#021814]'}`}>
      {/* Header */}
      <header className={`relative h-80 w-4/5 mx-auto rounded-xl overflow-hidden mt-5 px-4 flex justify-center items-center mb-10 border-4 border-[#06231F] rounded-full ${fade ? styles.fadeOut : styles.fadeIn}`}>
        <div className="rounded-xl">
          <Image
            src={headerImages[currentBannerIndex]} // Use the current banner image
            alt={`Soccer Betting Header ${currentBannerIndex + 1}`}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay for better text visibility */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 ">
          <h1 className="text-4xl font-bold">Premium AI Prediction Agent</h1>
          <p className="text-lg mt-2">Our model analyzes millions of data sets added each week and makes predictions.</p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-[#2D9479] px-8 py-3 rounded flex items-center justify-center hover:bg-[#1f7a5b]">
              <FaCrown className="mr-2" /> Get Premium
            </button>
            <button className="bg-gray-200 text-black-100 px-8 py-3 rounded flex items-center justify-center hover:bg-gray-300 hover:bg-slate-200">
              <FaInfoCircle className="mr-2" /> Learn More
            </button>
          </div>
        </div>
      </header>

      {/* New Task Input Section */}
      {/* <div className="flex justify-center items-center gap-2 w-4/5 mx-auto mb-8">
        <input 
          type="text"
          placeholder="Enter your prediction or analysis..."
          className={`w-full px-6 py-4 rounded-lg ${
            theme === 'light' 
              ? 'bg-slate-100 text-black-100 placeholder-gray-500 border-gray-300' 
              : 'bg-[#06231F] text-white placeholder-gray-400 border-[#1f7a5b]'
          } border focus:outline-none focus:ring-2 focus:ring-[#2D9479] focus:border-transparent transition-all`}
        />
        <button className="whitespace-nowrap px-6 py-4 bg-[#2D9479] hover:bg-[#1f7a5b] text-white rounded-lg font-medium transition-all flex items-center">
          <FaFootballBall className="mr-2" />
          Search
        </button>
      </div> */}

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
                  className={`h-12 font-medium flex items-center space-x-2 px-4 py-2 rounded mr-2 transition duration-300 ease-in-out ${selectedLeague === league.name ? "bg-[#1f7a5b] text-white" : theme === 'light' ? "bg-gray-300 hover:bg-gray-400 text-black-100" : "bg-[#06231F] hover:bg-[#06231F] text-white"}`}
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
        <h2 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black-100' : 'text-white'}`}>Predictions</h2>
        <ul className="space-y-3 mb-1">
          {matches.map((match, index) => (
            <li key={index} className={`flex justify-between items-center p-6 ${theme === 'light' ? 'bg-slate-100' : 'bg-[#06231F]'} text-white shadow-md rounded transition-colors duration-300 hover:bg-[#1f7a5b]`}>
              <span className={`flex-1 ${theme === 'light' ? 'text-black-100' : 'text-white'}`}>{match.home} vs {match.away}</span>
              <span className={`flex-1 text-center font-medium ${theme === 'light' ? 'text-black-100' : 'text-white'}`}>{match.prediction}</span>
              <div className="flex-1 flex justify-end items-center space-x-4 pb-8">
                <div className=" h-2 bg-gray-300 rounded justify-center items-center align-middle">
                  <p className={`text-xs ${theme === 'light' ? 'text-black-100' : 'text-white'} text-center pb-2`}>Probability</p>
                  <ProgressBar bgColor="#2D9479" baseBgColor={theme === 'light' ? '#06231F' : '#F3F3F4'} className="w-40 h-10 pb-20" completed={match.probability} />
                </div>
                {/* <button className="ml-4 bg-[#021914] text-white px-4 py-2 rounded flex items-center hover:bg-[#1f7a5b] transition duration-300" onClick={() => window.open('https://stake.com/?c=Mi4UzmEa', '_blank')}>
                  <FaEthereum className="mr-1" />
                  <FaBitcoin className="mr-1" />
                  Bet Now
                </button> */}
              </div>
            </li>
          ))}
        </ul>
      </div>


      <div className="mt-6 w-4/5 mb-20">
        <div className="flex justify-between items-center">
        <h2 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black-100' : 'text-white'}`}>Player Analyses</h2>
        <div className="flex items-center">
        <FaArrowLeft color={theme === 'light' ? 'black' : 'white'} width={10} height={10} className="mr-2 w-5 h-5 cursor-pointer" onClick={scrollLeft} /> {/* Left arrow */}
        <FaArrowRight color={theme === 'light' ? 'black' : 'white'} width={10} height={10} className="ml-2 w-5 h-5 cursor-pointer" onClick={scrollRight} /> {/* Right arrow */}
        </div>
        </div>

        <div className="flex items-center">
  

          <div ref={analysesRef} className="flex overflow-x-auto space-x-4">
            {analyses.map((analysis, index) => (
              <div 
                key={index} 
                className={`cursor-pointer justify-center items-center min-w-[400px] p-20 rounded-xl shadow-md ${theme === 'light' ? 'bg-slate-100' : 'bg-[#06231F]'} transition-colors duration-300 hover:bg-[#1f7a5b] text-center`}
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
                onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
                style={{ 
                  backgroundImage: `url(${playerImages[index]})`, // Update with actual image paths
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: hoveredIndex === index ? 'none' : 'grayscale(100%)', // Change filter based on hover state
                  border: hoveredIndex === index ? '4px solid #2D9479' : 'none', // Change border based on hover state
                  transition: 'border 0.3s, filter 0.3s', // Add transition for smooth effect
                }}
              >
                <h2 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-white' : 'text-white'}`}>{analysis.title}</h2>
                <p className={`text-sm font-bold ${theme === 'light' ? 'text-white' : 'text-white'}`}>{analysis.content}</p>
                {/* <span className={`text-xs font-medium ${theme === 'light' ? 'text-white' : 'text-white'}`}>{new Date(analysis.date).toLocaleDateString('en-GB')}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-4/5 mb-20 justify-between">
      <h2 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black-100' : 'text-white'}`}>Past Predictions</h2>
      <ul className="space-y-2">
          {oldPredictions.map((prediction, index) => (
            <li 
              key={index} 
              className={`flex justify-between items-center p-6 ${theme === 'light' ? 'bg-slate-100' : 'bg-[#06231F]'} ${theme === 'light' ? 'text-black-100' : 'text-white'} shadow-md rounded transition-colors duration-300 hover:bg-[#1f7a5b]`}
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

      {/* Team Analyses Section */}
      <div className="mt-6 w-4/5 mb-20">
        <div className="flex justify-between items-center">
        <h2 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black-100' : 'text-white'}`}>Player Analyses</h2>
        <div className="flex items-center">
        <FaArrowLeft color={theme === 'light' ? 'black' : 'white'} width={10} height={10} className="mr-2 w-5 h-5 cursor-pointer" onClick={scrollLeftTeam} /> {/* Left arrow */}
        <FaArrowRight color={theme === 'light' ? 'black' : 'white'} width={10} height={10} className="ml-2 w-5 h-5 cursor-pointer" onClick={scrollRightTeam} /> {/* Right arrow */}
        </div>
        </div>
        
        <div className="flex items-center">
          <div ref={teamRef} className="flex overflow-x-auto space-x-4">
            {teamAnalyses.map((analysis, index) => (
              <div 
                key={index} 
                className={`cursor-pointer justify-center items-center min-w-[400px] p-20 rounded-xl shadow-md ${theme === 'light' ? 'bg-slate-100' : 'bg-[#06231F]'} transition-colors duration-300 hover:bg-[#1f7a5b] text-center`}
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
                onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
                style={{ 
                  backgroundImage: `url(${teamImages[index]})`, // Update with actual image paths
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: hoveredIndex === index ? 'none' : 'grayscale(100%)', // Change filter based on hover state
                  border: hoveredIndex === index ? '4px solid #2D9479' : 'none', // Change border based on hover state
                  transition: 'border 0.3s, filter 0.3s', // Add transition for smooth effect
                }}
              >
                <h2 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-white' : 'text-white'}`}>{analysis.title}</h2>
                <p className={`text-sm font-bold ${theme === 'light' ? 'text-white' : 'text-white'}`}>{analysis.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default SoccerBetting;