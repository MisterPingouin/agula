"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScopedI18n } from "./../../locales/I18nContext";


const TextWithLineBreaks = ({ text }) => {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <p key={index} className="mb-2">
          {line}
        </p>
      ))}
    </>
  );
};

const FaqPage = () => {
  const t = useScopedI18n("faq");

  const faqs = [
    { question: t("question1"), answer: t("answer1") },
    { question: t("question2"), answer: t("answer2") },
    { question: t("question3"), answer: t("answer3") },
    { question: t("question4"), answer: t("answer4") },
    { question: t("question5"), answer: t("answer5") },
    { question: t("question6"), answer: t("answer6") },
    { question: t("question7"), answer: t("answer7") },
    { question: t("question8"), answer: t("answer8") },
    { question: t("question9"), answer: t("answer9") },
    { question: t("question10"), answer: t("answer10") }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-10 md:w-3/5 md:px-0 mx-auto p-4 mt-[86px] md:mt[99px] mb-8">
      <h2 className="text-25px md:text-35px text-green fond-title font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-lg font-title text-20px md:text-25px"
            >
              {faq.question}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-1 text-15px leading-23px text-gray-700"
              >
                <TextWithLineBreaks text={faq.answer} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
