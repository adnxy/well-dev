// app/pricing/PricingPage.js
import React from "react";
// import { useTheme } from "../context/ThemeContext";

const PricingPage = () => {
  // const { theme } = useTheme();

  return (
    <div className="pricing-container p-8 pt-[120px] bg-[#021814]">
      <h1 className="title text-white text-3xl font-b old text-center mb-8">
        Choose Your Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-white p-6 rounded-lg shadow-lg">
          <h2 className="plan-title text-xl font-semibold">Free Account</h2>
          <p className="price text-2xl font-bold">$0</p>
          <ul className="benefits-list mt-4">
            <li className="flex items-center">
              <span className="icon">🌟</span> Acces to five major leagues
            </li>
            <li className="flex items-center">
              <span className="icon">🤖</span> AI Trained Model
            </li>
            <li className="flex items-center">
              <span className="icon">📈</span> Analytics Dashboard
            </li>
            <li className="flex items-center">
              <span className="icon">📅</span> Weekly Analysis
            </li>
          </ul>
          <button className="button mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-lg">
          <h2 className="plan-title text-xl font-semibold">Premium Monthly</h2>
          <p className="price text-2xl font-bold">$6.99</p>
          <ul className="benefits-list mt-4">
            <li className="flex items-center">
              <span className="icon">🌟</span> Access to 30+ leagues
            </li>
            <li className="flex items-center">
              <span className="icon">🤖</span> AI Premium Trained Model
            </li>
            <li className="flex items-center">
              <span className="icon">📈</span> Analytics Dashboard
            </li>
            <li className="flex items-center">
              <span className="icon">📅</span> Weekly Analysis
            </li>
          </ul>
          <button className="button mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-lg">
          <h2 className="plan-title text-xl font-semibold">Premium Yearly</h2>
          <p className="price text-2xl font-bold">$50</p>
          <ul className="benefits-list mt-4">
            <li className="flex items-center">
              <span className="icon">🌟</span> Access to 30+ leagues
            </li>
           <li className="flex items-center">
              <span className="icon">🤖</span> AI Premium Trained Model
            </li>
            <li className="flex items-center">
              <span className="icon">📈</span> Analytics Dashboard
            </li>
            <li className="flex items-center">
              <span className="icon">📅</span> Weekly Analysis
            </li>
          </ul>
          <button className="button mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
