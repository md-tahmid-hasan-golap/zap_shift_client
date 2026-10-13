import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain a proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders to help you maintain proper posture.",
    },
    {
      question: "Is it suitable for all age and body types?",
      answer:
        "Yes, posture support products can generally be used by different age groups and body types. However, choosing the right size and fit is important for comfort.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "It can help encourage better posture and provide support while sitting or standing. For persistent or serious back pain, professional medical advice is recommended.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Some posture correctors include smart features such as vibration alerts that remind you when your posture needs adjustment.",
    },
    {
      question: "How will be notified when the product is back in stock?",
      answer:
        "You can usually subscribe to stock notifications and receive an alert when the product becomes available again.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#03373D]">
          Frequently Asked Question (FAQ)
        </h2>

        <p className="text-gray-500 text-xs md:text-sm max-w-2xl mx-auto mt-3 leading-6">
          Enhance posture, mobility, and well-being effortlessly with Postura
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* FAQ */}
      <div className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                isOpen ? "border border-cyan-500 bg-[#EDF8F9]" : "bg-white"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between text-left px-4 py-4 text-sm font-semibold text-[#03373D]"
              >
                <span>{faq.question}</span>

                <span className="ml-4 shrink-0">{isOpen ? "⌃" : "⌄"}</span>
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-4 pb-5">
                  <p className="text-xs md:text-sm text-gray-500 leading-6">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 bg-lime-300 hover:bg-lime-400 text-[#03373D] font-semibold text-sm px-5 py-3 rounded-full transition duration-300">
          See More FAQ's
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1C1C1C] text-white">
            <FaArrowUp className="text-xs rotate-45" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default FaqSection;
