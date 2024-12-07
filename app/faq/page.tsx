'use client'
import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "What is your return policy?", answer: "You can return any item within 30 days." },
        { question: "How do I track my order?", answer: "You will receive a tracking number via email." },
        { question: "Do you ship internationally?", answer: "Yes, we ship to over 100 countries." },
        { question: "What is the cost of shipping?", answer: "Shipping is free for all orders over $50." },
        { question: "What is the cost of shipping?", answer: "Shipping is free for all orders over $50." },
        { question: "What is the cost of shipping?", answer: "Shipping is free for all orders over $50." },
        { question: "What is the cost of shipping?", answer: "Shipping is free for all orders over $50." }, 
        { question: "What is the cost of shipping?", answer: "Shipping is free for all orders over $50." }, 
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="px-40 pt-20 bg-[#021814]">
            <h1 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-white rounded-lg shadow-md">
                        <button
                            className="w-full text-left p-4 focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h2 className="font-semibold text-white">{faq.question}</h2>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 border-t border-white">
                                <p className="text-white">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
