"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import bannerBg2 from "../public/pitch.jpg";
import bannerBg4 from "../public/bg-4.jpg";
import bannerBg6 from "../public/bg-6.jpg";
import bannerBg7 from "../public/bg-7.jpg";
import brasilLiga from "../public/brasil-flag.png";
import mexicoLiga from "../public/mexico-flag.png";
import argentinaLiga from "../public/argentina.png";
import honduras from "../public/honduras.png";
import bolivia from "../public/bolivia.png";
import aruba from "../public/aruba.png";
import nicaragua from "../public/nicaragua.png";
import salvador from "../public/el-salvador.png";
import australia from "../public/australia.png";
import japan from "../public/japan.png";
import southKorea from "../public/south-korea.png";
import hongKong from "../public/hong-kong.png";

import {
  FaTrophy,
  FaCrown,
  FaInfoCircle,
  FaArrowLeft,
  FaArrowRight,
  FaDollarSign,
  FaSun,
  FaBook,
  FaStar,
  FaChartLine,
} from "react-icons/fa";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import premierLeagueImg from "../public/england.png";
import laLigaImg from "../public/spain.png";
import bundesligaImg from "../public/germany.png";
import serieAImg from "../public/italy.png";
import franceLeague from "../public/france.png";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from "./context/ThemeContext";
import axios from "axios";

const SoccerBetting = () => {
  const [selectedLeague, setSelectedLeague] = useState("Top Leagues");
  const { theme } = useTheme();
  const teamRef = useRef<HTMLDivElement>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [vipPredictions, setVipPredictions] = useState<any[]>([]);
  const [scorers, setScorers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const leagues = [
    { name: "Top Leagues", icon: <FaCrown />, tooltip: "Major Leagues" },
    {
      name: "Big Returns",
      icon: <FaChartLine />,
      tooltip: "x2, x3, x4 Returns",
    },
    { name: "Daily Picks", icon: <FaStar />, tooltip: "Daily Picks" },
    { name: "Scores", icon: <FaTrophy />, tooltip: "Match Scores" },

  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentBannerIndex(
          (prevIndex) => (prevIndex + 1) % headerImages.length
        );
        setFade(false);
      }, 750);
    }, 3500);

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
    // }
  };

  const getLeagueTitle = (league: string) => {
    switch (league) {
      case "Premium":
        return "Premium Predictions";
      case "Scores":
        return "Exact Results";
      case "Top Leagues":
        return "Top Leagues";
      case "Daily Picks":
        return "Biggest Probabilities";
      default:
        return "Big Returns";
    }
  };

  const getLeagueImage = (league: string) => {
    switch (league) {
      case "1":
        return premierLeagueImg;
      case "2":
        return premierLeagueImg;
      case "5":
        return laLigaImg;
      case "509":
        return laLigaImg;
      case "7":
        return bundesligaImg;

      case "8":
        return franceLeague;

      case "68":
        return mexicoLiga;
      case "375":
        return mexicoLiga;

      case "512":
        return argentinaLiga;
      case "19":
        return argentinaLiga;

      case "20":
        return brasilLiga;

      case "6":
        return serieAImg;

      case "121":
        return honduras;

      case "111":
        return bolivia;

      case "357":
        return aruba;

      case "234":
        return nicaragua;

      case "145":
        return salvador;

      case "702":
        return australia;

      case "21":
        return japan;


      case "128":
        return southKorea;

      case "408":
        return hongKong;

      default:
        return null;
    }
  };
  console.log("vip league::::", vipPredictions);

  const renderMatches = (
    type: "predictions" | "vipPredictions" | "scorers"
  ) => {
    let data: any[] = [];
    switch (type) {
      case "scorers":
        data = scorers;
        break;
      case "vipPredictions":
        data = vipPredictions;
        break;
      case "predictions":
      default:
        data = predictions;
        break;
    }

    if (selectedLeague === "Big Returns") {
      data = predictions;
    } else if (selectedLeague === "Top Leagues") {
      data = vipPredictions;
    } else if (selectedLeague === "Scores") {
      data = scorers;
    } else if (selectedLeague === "Daily Picks") {
      data = predictions
        .filter(item => item.prediction_probability)
        .sort((a, b) => b.prediction_probability - a.prediction_probability)
        .slice(0, 4);
    }

    return data.map((item, index) => {
      const leagueImage = getLeagueImage(item.league);
      const itemClass = index % 2 === 0 && theme === "dark" ? "bg-[#06231F]" : "bg-gray-800";

      return (
        <li
          key={index}
          className={`flex justify-between items-center p-6 ${itemClass} text-white shadow-md rounded transition-colors duration-300 ${theme === "dark" ? "hover:bg-[#0C473F]" : "hover:bg-[#F5F5F5]"}`}
        >
          <div className="flex items-center w-1/2">
            {leagueImage && (
              <Image
                src={leagueImage}
                alt="Country Icon"
                width={20}
                height={20}
                className="mr-3"
              />
            )}
            <span
              className={` ${
                theme === "light" ? "text-black-100" : "text-white"
              }`}
            >
              {item.home_team} vs {item.away_team}
              <div
                className={`${
                  theme === "light"
                    ? "border border-gray-300 text-black-100"
                    : "border border-green-500 text-white"
                } px-2 py-1/2 rounded inline-block relative left-3 rounded-1/3 text-[1em]`}
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
            }`}
          >
            {item.pred}
          </span>

          {item.prediction_probability ? (
            <div className="flex-1 flex justify-end items-center space-x-4 pb-2">
              <div className=" h-2 bg-gray-300 rounded justify-center items-center align-middle">
                <ProgressBar
                  animateOnRender={true}
                  transitionDuration="0.3s"
                  labelSize="16"
                  bgColor="#00FF9C"
                  labelColor={theme === "light" ? "#425F57" : "#425F57"}
                  className="w-40 h-4 pb-20 text-s"
                  completed={Math.min(item.prediction_probability + 22, 99)}
                />
              </div>
            </div>
          ) : (
            <div>
              <p
                style={{
                  fontSize: "1em",
                  color: theme === "light" ? "#425F57" : "#00FF9C",
                }}
              >
                Average goals: {item.average_goals}
              </p>
            </div>
          )}
          <span
            className={`ml-10 text-center text-[0.9em] ${
              theme === "light" ? "text-black-100" : "text-white"
            }`}
          >
            {(() => {
              return `${new Date(item.date_time).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })} at ${new Date(
                item.date_time
              ).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}`;
            })()}
          </span>
        </li>
      );
    });
  };

  return (
    <section
      className={`flex flex-col items-center ${
        theme === "light" ? "bg-white" : "bg-[#021814]"
      }`}
    >
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
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50" />{" "}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 ">
          <h1 className="text-4xl font-bold">Premium AI Prediction Agent</h1>
          <p className="text-lg mt-2">
            Our model analyzes millions of data sets added each week and makes
            predictions.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-[#2D9479] px-8 py-3 rounded flex items-center justify-center hover:bg-[#1f7a5b]">
              <FaCrown className="mr-2" /> Free Deals & Offers
            </button>
            <button className="bg-gray-200 text-black-100 px-8 py-3 rounded flex items-center justify-center hover:bg-gray-300 hover:bg-slate-200">
              <FaInfoCircle className="mr-2" /> Learn More
            </button>
          </div>
        </div>
      </header>
      <div className="flex space-x-4 mt-5 mb-5 justify-start w-4/5">
        <div className="flex flex-row justify-start">
          <TransitionGroup className="flex flex-row">
            {leagues.map((league) => (
              <CSSTransition key={league.name} timeout={500} classNames="fade">
                <div className="relative group">
                  <button
                    className={`h-12 font-base flex items-center space-x-2 px-4 py-2 rounded mr-3 transition duration-300 ease-in-out ${
                      selectedLeague === league.name
                        ? theme === "light" ? "bg-[#F5F5F5] text-black-100" : "bg-[#1f7a5b] text-white"
                        : theme === "light" ? "bg-gray-300 hover:bg-gray-400 text-black-100" : "bg-[#06231F] hover:bg-[#06231F] text-white"
                    }`}
                    onClick={() => handleLeagueChange(league.name)}
                  >
                    {league.icon}
                    <span>{league.name}</span>
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

      <div className="mt-6 w-4/5 mb-20 justify-between">
        <h2
          className={`text-xl font-semibold mb-4 ${
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
            )}
          </ul>
        )}
      </div>
      <div className="w-4/5 mb-20 justify-between">
        <h2
          className={`text-xl font-semibold mb-4 ${
            theme === "light" ? "text-black-100" : "text-white"
          }`}
        >
          Completed Games
        </h2>
        <ul className="space-y-2">
          {completedBigReturns.map((prediction, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-6 ${
                theme === "light" ? "bg-[#EEEEEE]" : "bg-[#06231F]"
              } ${
                theme === "light" ? "text-black-100" : "text-white"
              } shadow-md rounded transition-colors duration-300 ${theme === "light" ? "hover:bg-[#F5F5F5]" : "hover:bg-[#06231F]"}`}
            >
              <div className="flex items-center w-1/2">
                <span className="flex-1">
                  {prediction.home_team} vs {prediction.away_team}
                </span>
                <span className="flex-1 text-center font-medium">
                  {prediction.prediction} ({prediction.result_score ? prediction.result_score : ''})
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

      <div className="mt-6 w-4/5 mb-20">
        <div className="flex justify-between items-center">
          <h2
            className={`text-xl font-semibold mb-4 ${
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
    </section>
  );
};

export default SoccerBetting;
