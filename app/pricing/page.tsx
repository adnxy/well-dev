"use client"
// app/pricing/PricingPage.js
import React from "react";
import { useTheme } from "../context/ThemeContext";
import stripeLogo from "../../public/stripe.png";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRobot, faChartLine, faCalendar, faGlobe } from '@fortawesome/free-solid-svg-icons';

const PricingPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`px-40 pricing-container p-8 pt-[120px] ${theme === 'dark' ? 'bg-[#021814]' : 'bg-white'}`}>
      <h1 className={`title text-white text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        Choose Your Subscription Plan
      </h1>
      <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-center text-lg font-normal mb-10 relative bottom-5`}>Choose the plan that best suits your needs and start enjoying the benefits of our premium AI prediction model.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`card p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-[#06231f]' : 'bg-white'}`}>
          <h2 className={`plan-title text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Free Account</h2>
          <p className={`mb-5 text-lg font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Free access to the basic features.</p>
          <p className={`price text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>$0</p>
          <ul className="benefits-list mt-4">
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faStar} className="text-xl mr-2" /> European leagues predictions
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faRobot} className="text-xl mr-2" /> Non-European leagues predictions
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faChartLine} className="text-xl mr-2" /> Exact scores predictions
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faChartLine} className="text-xl mr-2" /> Analytics Dashboard
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faCalendar} className="text-xl mr-2" /> Monthly Analysis
            </li>
          </ul>
          <button className={`button mt-4 ${theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-black text-white'} py-2 px-4 rounded`}>
            Get Started
          </button>
        </div>
        <div className={`card p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-[#06231f]' : 'bg-white'}`}>
          <h2 className={`plan-title text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Premium Monthly</h2>
          <p className={`mb-5 text-lg font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Access to all AI features and dashboard.</p>
          <p className={`price text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>$5.99</p>
          <ul className="benefits-list mt-4">
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faStar} className="text-xl mr-2" /> European leagues
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faGlobe} className="text-xl mr-2" /> Non-European leagues
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faChartLine} className="text-xl mr-2" /> Exact scores predictions
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faRobot} className="text-xl mr-2" /> Premium AI predictions
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faCalendar} className="text-xl mr-2" /> Daily picks
            </li>
          </ul>
          <button className="button mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
        <div className={`card p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-[#06231f]' : 'bg-white'}`}>
          <h2 className={`plan-title text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Premium Yearly</h2>
          <p className={`mb-5 text-lg font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Access to all AI features and dashboard.</p>
          <p className={`price text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>$50</p>
          <ul className="benefits-list mt-4">
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faStar} className="text-xl mr-2" /> European leagues
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faGlobe} className="text-xl mr-2" /> Non-European leagues
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faChartLine} className="text-xl mr-2" /> Exact scores predictions
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faRobot} className="text-xl mr-2" /> Premium AI predictions
            </li>
            <li className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faCalendar} className="text-xl mr-2" /> Daily picks
            </li>
          </ul>
          <button className="button mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center mt-10 flex flex-col items-center">
      <Image src={stripeLogo} alt="Stripe Logo" className="h-20 w-auto" />
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-md`}>
          Secure payments via Stripe. Pause or cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
