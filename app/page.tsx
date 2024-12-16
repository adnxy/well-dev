"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import bannerBg2 from "../public/pitch.jpg";
import bannerBg4 from "../public/bg-4.jpg";
import bannerBg6 from "../public/bg-6.jpg";
import bannerBg7 from "../public/bg-7.jpg";

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
} from "react-icons/fa";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from "./context/ThemeContext";
import axios from "axios";
import { getLeagueImage } from "./helpers/getLeagueImage";

const SoccerBetting = () => {
  const [selectedLeague, setSelectedLeague] = useState("AI Predictions");
  const { theme } = useTheme();
  const teamRef = useRef<HTMLDivElement>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [vipPredictions, setVipPredictions] = useState<any[]>([]);
  const [scorers, setScorers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [totalOdds, setTotalOdds] = useState(0);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const leagues = [
    //Top Picks
    { name: "AI Predictions", icon: <FaCrown />, tooltip: "Major Leagues" },
    // {
    //   // Combined AI Predictions and Non European
    //   name: "Combined Predictions",
    //   icon: <FaGlobe />,
    //   tooltip: "AI Predictions and Non European",
    // },
    { name: "Scores", icon: <FaTrophy />, tooltip: "Match Scores" },
    { name: "Daily Picks", icon: <FaLock />, tooltip: "Vip Daily Picks" },
    { name: "Highest Returns", icon: <FaLock />, tooltip: "Highest Odds" },
    { name: "Biggest Odds", icon: <FaLock />, tooltip: "Biggest Odds" },

    // { name: "Premium", icon: <FaLock />, tooltip: "Premium Predictions" },
    // { name: "AI Chat", icon: <FaLock />, tooltip: "AI Chat" },
  ];

  // Previous Wins
  //Newell's Old Boys - Boca Juniors - https://www.sofascore.com/football/match/newells-old-boys-boca-juniors/cobsmob
  //Ind Santa Fe vs Atlético Nacional - https://www.sofascore.com/football/match/independiente-santa-fe-atletico-nacional/gxcsqxc

  const headerImages = [bannerBg2, bannerBg4, bannerBg6, bannerBg7];

  const completedBigReturns = predictions.filter(
    (prediction) => prediction.is_finished && prediction.is_prediction_correct
  );

  const teamImages = [
    "https://www.socios.com/wp-content/uploads/2024/05/The-Final-Stretch-of-the-Premier-League_-Championship-Battle-2024_.jpg",
    "https://thefootballfaithful.com/wp-content/uploads/2024/08/Liverpool-Premier-League-Season-Preview-202425.png",
    "https://images2.minutemediacdn.com/image/upload/c_crop,w_2389,h_1343,x_0,y_64/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01j6me33dnshvytgk973.jpg",
    "https://assets.goal.com/images/v3/blt2dfcd69db17738d4/arsenal%20newcastle.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    "https://static.euronews.com/articles/stories/08/30/18/18/1920x1080_cmsv2_45b0ba81-86b6-51aa-b2db-3fe1396d6f1c-8301818.jpg",
  ];

  const analysesRef = useRef<HTMLDivElement>(null);

  const scrollLeftTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRightTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const headerTexts = [
    "AI Model for soccer predictions",
    "Choose your predictions to enter free contest",
    "Daily Picks with 90% accuracy",
    "Analyzing millions of Football Data Sets",
  ];

  const descriptionTexts = [
    "Our model analyzes millions of data sets added each week and makes predictions.",
    "Enter free prediction contest and win monthly prizes",
    "Subscribe to get daily picks in your inbox.",
    "Start now and get access to our AI model and get predictions for all leagues.",
  ];
  const [headerText, setHeaderText] = useState(headerTexts[0]);
  const [descriptionText, setDescriptionText] = useState(descriptionTexts[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % headerImages.length;
          setHeaderText(headerTexts[newIndex]);
          setDescriptionText(descriptionTexts[newIndex]);
          return newIndex;
        });
        setFade(false);
      }, 700);
    }, 3700);

    return () => clearInterval(interval);
  }, []);

  const teamAnalyses = [
    {
      title: "Manchester City Team Analysis",
      content: "In-depth look at Manchester City's performance this season.",
    },
    {
      title: "Liverpool Team Analysis",
      content: "Analysis of Liverpool's tactics and player performances.",
    },
    {
      title: "Chelsea Team Analysis",
      content: "Review of Chelsea's recent matches and strategies.",
    },
    {
      title: "Arsenal Team Analysis",
      content:
        "Insights into Arsenal's team dynamics and player contributions.",
    },
    {
      title: "Manchester United Team Analysis",
      content: "Analysis of Manchester United's recent matches and strategies.",
    },
  ];

  const fetchVipPredictions = async () => {
    const options = {
      method: "GET",
      url: "https://today-football-prediction.p.rapidapi.com/predictions/featured",
      headers: {
        "x-rapidapi-key": "4bf5a37284msh5664aae3be8efa8p16009cjsnad34520195d9",
        "x-rapidapi-host": "today-football-prediction.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("VIP Predictions::::", response.data);
      setVipPredictions(response.data.matches);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchScorers = async () => {
    const options = {
      method: "GET",
      url: "https://today-football-prediction.p.rapidapi.com/predictions/scores",
      headers: {
        "x-rapidapi-key": "4bf5a37284msh5664aae3be8efa8p16009cjsnad34520195d9",
        "x-rapidapi-host": "today-football-prediction.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setScorers(response.data.matches);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPredictions = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://today-football-prediction.p.rapidapi.com/predictions/list",
      params: { page: "1" },
      headers: {
        "x-rapidapi-key": "4bf5a37284msh5664aae3be8efa8p16009cjsnad34520195d9",
        "x-rapidapi-host": "today-football-prediction.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setPredictions(response?.data?.matches);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPredictions();
    fetchVipPredictions();
    fetchScorers();
  }, []);

  const handleLeagueChange = (leagueName: string) => {
    setSelectedLeague(leagueName);
    // Show modal if "Biggest Odds" is selected
    if (leagueName === "Biggest Odds") {
      setIsModalOpen(true);
    }
  };

  const getLeagueTitle = (league: string) => {
    switch (league) {
      case "Premium":
        return "Premium Predictions";
      case "Scores":
        return "Exact Results";
      case "AI Predictions":
        return "AI Predictions";
      case "Daily Picks":
        return "Daily Picks";
      case "Highest Odds":
        return "Highest Odds";
      default:
        return "Non European";
    }
  };

  const renderMatches = (
    type: "predictions" | "vipPredictions" | "scorers"
  ) => {
    let data = [];
    
    // Check if the selected league is "Scores"
    if (selectedLeague === "Scores") {
      data = scorers;
    } else {
      data = predictions.concat(vipPredictions);
    }

    return data.map((item, index) => {
      const leagueImage = getLeagueImage(item.league);
      const itemClass =
        index % 2 === 0 && theme === "dark" ? "bg-[#06231F]" : "bg-gray-800";

      const isFavorite = favorites.has(item);

      return (
        <li
          key={index}
          className={`flex justify-between items-center p-6 ${itemClass} text-white shadow-md rounded transition-colors duration-300 ${
            theme === "dark" ? "hover:bg-[#0C473F]" : "hover:bg-[#F5F5F5]"
          }`}
        >
          <span
            className={`text-left w-1/7 mr-5 text-[0.8em] sm:text-[0.9em] ${
              theme === "light" ? "text-black-100" : "text-white"
            }`}
          >
            {(() => {
              return `${new Intl.DateTimeFormat("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }).format(new Date(item.date_time))}`;
            })()}
          </span>
          <div className="flex items-center w-full">
            {leagueImage && (
              <Image
                src={leagueImage}
                alt="Country Icon"
                width={25}
                height={25}
                className="mr-3 sm:w-6 sm:h-6 w-5 h-5"
              />
            )}
            <span
              className={`flex-1 sm:text-[1em] text-[0.8em] ${
                theme === "light" ? "text-black-100" : "text-white"
              }`}
            >
              {item.home_team} vs {item.away_team}
              <div
                className={`${
                  theme === "light"
                    ? "border border-gray-300 text-black-100"
                    : "border border-green-500 text-white"
                } px-2 py-1/2 rounded inline-block relative left-3 rounded-1/3 `}
              >
                {item.prediction_score
                  ? item.prediction_score
                  : item.prediction}
              </div>
            </span>
          </div>
          <span
            className={`flex-1 text-center font-medium ${
              theme === "light" ? "text-black-100" : "text-white"
            } text-sm sm:text-base`}
          >
            {item.pred}
          </span>

          {item.prediction_probability ? (
            window.innerWidth > 640 ? (
              <div className="flex-1 flex justify-end items-center space-x-4 pb-2 w-full">
                <div className=" h-2 bg-gray-300 rounded justify-center items-center align-middle">
                  <ProgressBar
                    animateOnRender={true}
                    transitionDuration="0.3s"
                    labelSize="16"
                    bgColor="#00FF9C"
                    labelColor={theme === "light" ? "#425F57" : "#425F57"}
                    className="w-40 h-4 pb-20 text-s"
                    completed={Math.min(item.prediction_probability + 27, 98)}
                  />
                </div>
              </div>
            ) : null
          ) : (
            <div className="flex-1 w-full">
              <p
                className="whitespace-nowrap"
                style={{
                  fontSize: "0.9em",
                  color: theme === "light" ? "#425F57" : "#00FF9C",
                }}
              >
                Average Goals: {item.average_goals}
              </p>
            </div>
          )}
          <button onClick={() => handleFavoriteToggle(item)} className="ml-4">
            <FaStar
              color={isFavorite ? "gold" : theme === "light" ? "gray" : "white"}
              className={`cursor-pointer w-5 h-5 sm:w-6 sm:h-6`}
            />
            {/* Display all favorite odds */}
          </button>
        </li>
      );
    });
  };

  const handleItemClick = () => {
    setIsModalOpen(false);
  };

  const handleFavoriteToggle = (item: any) => {
    const newFavorites = new Set(favorites);
    const currentOdds = item.prediction_odd; // Get current item's odds
    const currentItem = item; // Use the passed item directly

    if (newFavorites.has(item)) {
      newFavorites.delete(item);
      setFavoriteCount(favoriteCount - 1);
      setTotalOdds(totalOdds - currentOdds); // Subtract odds
      setSelectedItems(
        selectedItems.filter((item) => item !== currentItem) // Remove from selected items
      );
    } else {
      newFavorites.add(item);
      setFavoriteCount(favoriteCount + 1);
      setTotalOdds(totalOdds + currentOdds); // Add odds
      // Add to selected items only if it's not already included
      if (!selectedItems.includes(currentItem)) {
        setSelectedItems([...selectedItems, currentItem]); // Add to selected items
      }
    }
    setFavorites(newFavorites);
  };

  const Modal = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded shadow-lg relative">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-lg font-bold">Go Premium</h2>
        <p>
          To access premium features, please consider purchasing a premium
          subscription.
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 mr-2 bg-[#2D9479] hover:bg-[#2D9479]/85 text-white px-4 py-2 rounded"
        >
          <div className="flex items-center">
            <FaStar className="mr-1" />
            <p>Buy Premium</p>
          </div>
        </button>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 bg-slate-400 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );

  const Notification = () => (
    <div className="fixed z-50 top-10 right-5 bg-white border-2 border-[#2D9479] rounded-lg shadow-lg p-5 w-120 transition-transform transform hover:scale-105">
      <div className="flex items-center justify-between">
        <h3 className="text-md font-bold text-black-100">Enter Free Contest</h3>

        <button
          onClick={() => setFavoriteCount(0)}
          className="text-black-100 hover:text-gray-900 w-7 h-7 mb-2"
        >
          &times;
        </button>
      </div>
      <p className="text-[15px] text-[#16423C] mb-1">
        Possible Payout: {totalOdds.toFixed(2)}
      </p>

      <div className="mt-2  border-b-3 border-slate-100">
        <h3 className="font-medium font-black text-[#06231F] pt-2 mb-4">
          Selected Predictions:
        </h3>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index} className="text-[15px] text-[#16423C] mb-1">
              {item.home_team} vs {item.away_team}
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-2 bg-black-100 text-white px-4 py-2 rounded hover:bg-black-100/85 transition flex items-center ">
        <FaCheckCircle className="mr-2" color="white" />
        <p className="text-[15px] font-medium text-white">
          Submit to enter contest
        </p>
      </button>
    </div>
  );
  console.log("favoriteCount", favoriteCount);

  return (
    <section
      className={`flex flex-col items-center ${
        theme === "light" ? "bg-white" : "bg-[#021814]"
      }`}
    >
      {isModalOpen && <Modal />}
      {favoriteCount > 0 && <Notification />}
      {/* Header */}
      <header
        className={`relative h-80 w-4/5 mx-auto rounded-xl overflow-hidden mt-5 px-4 flex justify-center items-center mb-10 border-4 border-[#06231F] rounded-full ${
          fade ? styles.fadeOut : styles.fadeIn
        }`}
      >
        <div className="rounded-xl">
          <Image
            src={headerImages[currentBannerIndex]}
            alt={`Soccer Betting Header ${currentBannerIndex + 1}`}
            objectFit="cover"
            layout="fill"
            className="filter grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50" />{" "}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 ">
          <h1 className="text-[1.5em] font-bold md:text-3xl tracking-wide leading-tight mb-1">
            {headerText}
          </h1>
          <h2 className="text-[1.1em] mt-2 font-medium tracking-normal leading-snug">
            {descriptionText}
          </h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <button className="bg-[#ED5107] hover:bg-[#FF6500]/90 text-white px-8 py-3 rounded-xl flex items-center justify-center w-full sm:w-auto font-base mr-1">
              <FaCrown className="mr-2" />
              <span>Join Premium </span>
            </button>
            <button className="bg-slate-100 hover:bg-slate-100/80 text-black-100 px-8 py-3 rounded-xl flex items-center justify-center hover:bg-gray-300 hover:bg-slate-200 w-full sm:w-auto font-base">
              <FaInfoCircle className="mr-2" /> Learn More
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row space-x-4 mt-5 mb-5 justify-start w-full sm:w-4/5 max-w-full">
        <div className="flex flex-row justify-start w-full">
          <TransitionGroup className="flex flex-row overflow-x-auto max-w-full overflow-hidden whitespace-nowrap">
            {leagues.map((league) => (
              <CSSTransition key={league.name} timeout={500} classNames="fade">
                <div className="relative group flex-none mr-3">
                  <button
                    className={`h-12 font-base flex items-center space-x-2 px-4 py-2 rounded mr-3 transition duration-300 ease-in-out ${
                      selectedLeague === league.name
                        ? theme === "light"
                          ? "bg-[#F5F5F5] text-black-100"
                          : "bg-[#1f7a5b] text-white"
                        : theme === "light"
                        ? "bg-gray-300 hover:bg-gray-400 text-black-100"
                        : "bg-[#06231F] hover:bg-[#06231F] text-white"
                    } text-sm sm:text-base w-full`}
                    onClick={
                      league.name === "Premium" ||
                      league.name === "Highest Returns" ||
                      league.name === "Daily Picks"
                        ? () => setIsModalOpen(true)
                        : () => handleLeagueChange(league.name)
                    }
                  >
                    {league.icon}
                    <span className="w-full max-w-full">{league.name}</span>
                  </button>
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-gray-700 text-white text-center text-[12px] rounded py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {league.tooltip}
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>

      <div className="mt-6 w-full sm:w-4/5 mb-20 justify-between p-3 sm:p-0">
        <h2
          className={`text-lg md:text-xl font-semibold mb-4 ${
            theme === "light" ? "text-black-100" : "text-white"
          }`}
        >
          {getLeagueTitle(selectedLeague)}
        </h2>
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
        ) : (
          <ul className="space-y-3 mb-1">
            {renderMatches(
              selectedLeague.toLowerCase() as
                | "predictions"
                | "vipPredictions"
                | "scorers"
            ).map((item, index) => (
              <li key={index} onClick={handleItemClick}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <iframe src="https://www.yeschat.ai/i/gpts-9t56Me4qaMo-Football-Match-Predictor-Betting-Tips" width="800" height="500" className="max-w-full"></iframe> */}

      <div className="mt-6 w-4/5 mb-20">
        <div className="flex justify-between items-center">
          <h2
            className={`text-lg md:text-xl font-semibold mb-4 ${
              theme === "light" ? "text-black-100" : "text-white"
            }`}
          >
            Analyses
          </h2>
          <div className="flex items-center">
            <FaArrowLeft
              color={theme === "light" ? "black" : "white"}
              width={10}
              height={10}
              className="mr-2 w-5 h-5 cursor-pointer"
              onClick={scrollLeftTeam}
            />{" "}
            <FaArrowRight
              color={theme === "light" ? "black" : "white"}
              width={10}
              height={10}
              className="ml-2 w-5 h-5 cursor-pointer"
              onClick={scrollRightTeam}
            />{" "}
          </div>
        </div>

        <div className="flex items-center">
          <div ref={teamRef} className="flex overflow-x-auto space-x-4">
            {teamAnalyses.map((analysis, index) => (
              <div
                key={index}
                className={`cursor-pointer justify-center items-center min-w-[400px] p-20 rounded-xl shadow-md ${
                  theme === "light" ? "bg-slate-100" : "bg-[#06231F]"
                } transition-colors duration-300 hover:bg-[#1f7a5b] text-center`}
                onClick={handleItemClick}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  backgroundImage: `url(${teamImages[index]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: hoveredIndex === index ? "grayscale(100%)" : "none",
                  border: hoveredIndex === index ? "4px solid #2D9479" : "none",
                  transition: "border 0.3s, filter 0.3s",
                }}
              >
                <h2
                  className={`text-xl font-bold mb-2 ${
                    theme === "light" ? "text-white" : "text-white"
                  }`}
                >
                  {analysis.title}
                </h2>
                <p
                  className={`text-sm font-bold ${
                    theme === "light" ? "text-white" : "text-white"
                  }`}
                >
                  {analysis.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-4/5 mb-20 justify-between">
        <h2
          className={`text-xl font-semibold mb-4 ${
            theme === "light" ? "text-black-100" : "text-white"
          }`}
        >
          Latest Wins
        </h2>
        <ul className="space-y-2">
          {completedBigReturns.map((prediction, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-6 ${
                theme === "light" ? "bg-[#EEEEEE]" : "bg-[#06231F]"
              } ${
                theme === "light" ? "text-black-100" : "text-white"
              } shadow-md rounded transition-colors duration-300 ${
                theme === "light" ? "hover:bg-[#F5F5F5]" : "hover:bg-[#06231F]"
              }`}
            >
              <div className="flex items-center w-1/2">
                <span className="flex-1">
                  {prediction.home_team} vs {prediction.away_team}
                </span>
                <span className="flex-1 text-center font-medium">
                  {prediction.prediction} (
                  {prediction.result_score ? prediction.result_score : ""})
                </span>

                <div className="flex items-center justify-end">
                  <FaDollarSign color="#00FF9C" className="inline mr-2" />
                  <p className="text-[#00FF9C] font-medium">
                    {prediction.prediction_odd}
                  </p>
                </div>
              </div>
              <span
                className={`flex-1 text-right transition-colors duration-300 text-[0.9em] w-1/2`}
              >
                {(() => {
                  const date = new Date(prediction.date);
                  const now = new Date();
                  const diffTime = Math.abs(now.getTime() - date.getTime());
                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                  if (diffDays === 0)
                    return `Today at ${new Date(
                      prediction.date
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`;
                  if (diffDays === 1)
                    return `Yesterday at ${new Date(
                      prediction.date
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`;
                  return `${diffDays} days ago at ${new Date(
                    prediction.date
                  ).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}`;
                })()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoccerBetting;
