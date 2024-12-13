"use client";
import React from "react";
import Image from "next/image";
import aiModelImg from "../../public/dashboard-desktop.png";
// import { useTheme } from "../context/ThemeContext";
import { useTheme } from "../context/ThemeContext";

const HowItWorks = () => {
const { theme } = useTheme();

  return (
    <section className={`${theme === 'dark' ? 'bg-[#021814]' : 'bg-white'} flex flex-col items-center mb-50`}>
    <div className={`px-40 pt-20`}>
      <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-3xl font-bold mb-6`}>Platform Overview</h1>
      <section className="mb-4">
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-semibold`}>Understanding the AI Model</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Our AI model utilizes advanced algorithms to analyze historical data and make predictions about soccer results. It collects data continuously, ensuring that the model is always up-to-date with the latest trends and statistics.</p>
      </section>
      <div className="flex justify-center">
        <Image className="rounded-lg pt-10 flex justify-center" src={aiModelImg} alt="AI Model" width={1000} height={500} />
      </div>

      <section className="mb-4">
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-semibold`}>Data Collection Frequency</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>The model collects data on a daily basis, allowing it to adapt to changes in team performance, player conditions, and other relevant factors that influence match outcomes.</p>
      </section>
      <section className="mb-4">
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-semibold`}>How AI Projects Soccer Results</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>By analyzing patterns in the data, the AI can project the likelihood of various outcomes in soccer matches, providing insights that can help fans and analysts make informed decisions.</p>
      </section>
      <section className="mb-4">
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-semibold`}>Premium AI Model</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Our Premium AI model offers enhanced features, including deeper analytics and personalized insights. It collects data more frequently, allowing for real-time updates and predictions.</p>
      </section>
      <section className="">
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-semibold`}>Benefits of the Premium AI Model</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>With the Premium AI model, users gain access to exclusive insights, improved accuracy in predictions, and tailored recommendations based on individual preferences and historical performance.</p>
      </section>
      <section className="mb-4">
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-semibold mt-10`}>How the AI Model Works</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>The AI model operates by first gathering vast amounts of historical data from various soccer matches. It then processes this data using machine learning algorithms that identify patterns and correlations between different variables, such as player statistics, team formations, and match conditions. This analysis allows the model to generate predictions based on current data inputs.</p>
      </section>
      <section className="mb-4">
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-semibold`}>Continuous Learning</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>One of the key features of our AI model is its ability to learn continuously. As new data becomes available, the model updates its algorithms to improve accuracy. This means that the predictions become more reliable over time, adapting to changes in team dynamics and player performance.</p>
      </section>

    </div>
    </section>
  );
};

export default HowItWorks;
