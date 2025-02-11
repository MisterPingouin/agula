import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScopedI18n } from "./../../locales/I18nContext";
import Image from 'next/image';
import Link from 'next/link';
import useLocalLink from "./../hooks/useLocalLink";


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

const FAQ = () => {
  const t = useScopedI18n("faq");
  const localLink = useLocalLink();

  const faqs = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      question: t("question3"),
      answer: t("answer3"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-10 md:w-3/5 md:px-0 mx-auto p-4">
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
                className="mt-2 text-15px leading-23px text-gray-700"
              >
                <TextWithLineBreaks text={faq.answer} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <Link href={localLink("/faq")} className="cursor-pointer">
      <div className="flex  justify-center items-center gap-6 mb-6 mt-6">
        <p className="font-title font-bold text-green-2 text-10px md:text-17px">{t("more")}</p>
        <Image
          src="/images/greenarrowright.svg"
          alt="Greenarrowright"
          width={50}
          height={40}
          className="w-auto h-auto"
        />
      </div>
      </Link> 
    </div>
  );
};

export default FAQ;
