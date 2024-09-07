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
      <div className="py-8 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <div key={index} className="rounded-md shadow-md bg-white dark:bg-gray-800"> {/* Added bg-white for visibility */}
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-black dark:text-black w-full">{faq.question}</span> {/* Changed text color to black */}
                <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                  &#x25BC; {/* Chevron down */}
                </span>
              </button>
              {openFaq === index && (
                <div className="p-4 bg-gray-50 dark:bg-gray-600">
                  <p className="text-black dark:text-gray-300 w-full">{faq.answer}</p> {/* Changed text color to black */}
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