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
    <section className="bg-[#021814] flex flex-col items-center">
      <div className="py-4 mx-auto max-w-screen-xl lg:py-0 bg-[#021814]"> {/* Changed top margin from py-8 to py-4 */}
        <div className="space-y-3"> {/* Changed space-y-5 to space-y-3 for smaller margin */}
          {faqData.map((faq, index) => (
            <div key={index} className="rounded-md shadow-md bg-slate-200 dark:bg-slate-800"> {/* Changed bg-slate-800 to bg-slate-200 for lighter background */}
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-slate-50 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-black dark:text-black w-full">{faq.question}</span> {/* Changed text color to black */}
                <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                  &#x25BC; {/* Chevron down */}
                </span>
              </button>
              {openFaq === index && (
                <div className="p-4 bg-gray-50 bg-slate-100 pt-1  ">
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
