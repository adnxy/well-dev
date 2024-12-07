import React from "react";
import Image from "next/image";
import aiModelImg from "../../public/dashboard-desktop.png";
// import { useTheme } from "../context/ThemeContext";

const HowItWorks = () => {
// const { theme } = useTheme();

  return (
    <section className={'flex flex-col items-center bg-[#021814]'}>
    <div className={`px-40 pt-20`}>
      <h1 className="text-3xl font-bold mb-6 text-white">Platform Overview</h1>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-white">Understanding the AI Model</h2>
        <p className="text-white">Our AI model utilizes advanced algorithms to analyze historical data and make predictions about soccer results. It collects data continuously, ensuring that the model is always up-to-date with the latest trends and statistics.</p>
      </section>
      <div className="flex justify-center">
        <Image className="rounded-lg pt-10 flex justify-center" src={aiModelImg} alt="AI Model" width={1000} height={500} />
      </div>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-white">Data Collection Frequency</h2>
        <p className="text-white">The model collects data on a daily basis, allowing it to adapt to changes in team performance, player conditions, and other relevant factors that influence match outcomes.</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-white">How AI Projects Soccer Results</h2>
        <p className="text-white">By analyzing patterns in the data, the AI can project the likelihood of various outcomes in soccer matches, providing insights that can help fans and analysts make informed decisions.</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-white">Premium AI Model</h2>
        <p className="text-white">Our Premium AI model offers enhanced features, including deeper analytics and personalized insights. It collects data more frequently, allowing for real-time updates and predictions.</p>
      </section>
      <section className="">
        <h2 className="text-2xl font-semibold text-white">Benefits of the Premium AI Model</h2>
        <p className="text-white">With the Premium AI model, users gain access to exclusive insights, improved accuracy in predictions, and tailored recommendations based on individual preferences and historical performance.</p>
      </section>
      <section className="">
        <h2 className="text-2xl font-semibold text-white">Benefits of the Premium AI Model</h2>
        <p className="text-white">With the Premium AI model, users gain access to exclusive insights, improved accuracy in predictions, and tailored recommendations based on individual preferences and historical performance.</p>
      </section>
      <section className="">
        <h2 className="text-2xl font-semibold text-white">Benefits of the Premium AI Model</h2>
        <p className="text-white">With the Premium AI model, users gain access to exclusive insights, improved accuracy in predictions, and tailored recommendations based on individual preferences and historical performance.</p>
      </section>
    </div>
    </section>
  );
};

export default HowItWorks;
