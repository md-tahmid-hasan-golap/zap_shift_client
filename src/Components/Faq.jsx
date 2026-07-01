import React, { useState } from "react";

const faqData = [
  {
    question: "How does this posture corrector work?",
    answer: "A posture corrector works by providing support...",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer: "Yes, it is designed to be adjustable...",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer: "Yes, it helps align the spine...",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Frequently Asked Question (FAQ)
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors font-medium text-left"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {item.question}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </button>

            {activeIndex === index && (
              <div className="p-4 bg-white text-gray-600 border-t border-gray-100">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 mx-auto">
          See More FAQ's <span>↗</span>
        </button>
      </div>
    </div>
  );
};

export default Faq;
