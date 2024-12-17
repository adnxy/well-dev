"use client";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { theme } = useTheme();
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days.",
    },
    {
      question: "How do I track my order?",
      answer: "You will receive a tracking number via email.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 100 countries.",
    },
    {
      question: "What is the cost of shipping?",
      answer: "Shipping is free for all orders over $50.",
    },
    {
      question: "What is the cost of shipping?",
      answer: "Shipping is free for all orders over $50.",
    },
    {
      question: "What is the cost of shipping?",
      answer: "Shipping is free for all orders over $50.",
    },
    {
      question: "What is the cost of shipping?",
      answer: "Shipping is free for all orders over $50.",
    },
    {
      question: "What is the cost of shipping?",
      answer: "Shipping is free for all orders over $50.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`px-40 pt-20 pb-20 ${theme === "light" ? "bg-white" : "bg-[#021814]"}`}>
                <h1 className="text-3xl font-bold mb-4">FAQs</h1>

      <h3 className={`text-lg font-medium mb-4 ${theme === "light" ? "text-black" : "text-white"}`}>
        Here are some of the most frequently asked questions. If you have any other questions, please don't hesitate to contact us at hello@goalpredict.ai.
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-opacity-50 ${theme === "light" ? "border-black" : "border-slate-500"} rounded-lg shadow-sm`}
          >
            <button
              className={`w-full text-left p-4 focus:outline-none ${openIndex === index ? (theme === "light" ? "bg-gray-200" : "bg-gray-700") : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h2 className={`font-semibold ${theme === "light" ? "text-black" : "text-white"}`}>
                {index + 1}. {faq.question}
              </h2>
            </button>
            {openIndex === index && (
              <div className={`p-4 border-t ${theme === "light" ? "border-black" : "border-slate-500"}`}>
                <p className={`text-black ${theme === "dark" ? "text-white" : "text-black"}`}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
