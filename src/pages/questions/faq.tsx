import React, { useState } from "react";

const faqData = [
  {
    question: "How does the platform help students?",
    answer:
      "We use AI to match students with the right resources, mentors, and study tools.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! Everyone who joins the waitlist gets early access and a 30-day free trial.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time with no extra fees.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-black py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>
        <div className="bg-white/50 rounded-lg">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border border-gray-200 rounded-lg shadow-sm transition duration-200 ${
                  isOpen ? "bg-white" : "bg-transparent"
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-lg hover:bg-gray-50 flex justify-between items-center hover:cursor-pointer"
                >
                  {item.question}
                  <span className="text-xl">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
