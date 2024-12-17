"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  faqData: FaqItem[];
};

const Faq = ({ faqData }: FaqProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { theme } = useTheme();

  const isLightTheme = theme === 'light';

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={`flex flex-col items-center ${isLightTheme ? 'bg-white' : 'bg-[#021814]'}`}>
      <div className={`py-4 mx-auto max-w-screen-xl lg:py-0 ${isLightTheme ? 'bg-white' : 'bg-[#021814]'}`}>
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div key={index} className={`rounded-md shadow-md ${isLightTheme ? 'bg-white' : 'bg-slate-200 dark:bg-slate-800'}`}>
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-slate-50 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-black dark:text-black w-full">{faq.question}</span>
                <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                  &#x25BC; {/* Chevron down */}
                </span>
              </button>
              {openFaq === index && (
                <div className="p-4 bg-gray-50 bg-slate-100 pt-1">
                  <p className="text-black dark:text-gray-300 w-full">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
