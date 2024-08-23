"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  faqData: FaqItem[];
};

const Faq = ({ faqData }: FaqProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="rounded-md shadow-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-gray-900 dark:text-white w-full">{faq.question}</span>
                <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                  &#x25BC; {/* Chevron down */}
                </span>
              </button>
              {openFaq === index && (
                <div className="p-4 bg-gray-50 dark:bg-gray-600">
                  <p className="text-gray-700 dark:text-gray-300 w-full">{faq.answer}</p>
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