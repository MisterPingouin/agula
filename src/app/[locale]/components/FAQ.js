import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScopedI18n } from "./../../locales/I18nContext";
import Image from 'next/image';

const FAQ = () => {
const t = useScopedI18n("faq");

  const faqs = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: "Est-il possible d’annuler ?",
      answer: "Oui, il est possible d'annuler votre réservation selon nos conditions générales."
    },
    {
      question: "Les animaux sont-ils autorisés à bord ?",
      answer: "Oui, les animaux sont autorisés à bord sous certaines conditions."
    },
    {
      question: "Vous souhaitez privatiser notre bateau ?",
      answer: "Veuillez nous contacter pour discuter des options de privatisation."
    }
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
          <div
            key={index}
            className="border-b border-gray-300 pb-2"
          >
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
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
<div className="flex justify-center items-center gap-6 mb-6 mt-6">
<p className="font-title font-bold text-green-2 text-10px md:text-12px">{t("more")}</p>
<Image
          src="/images/greenarrowright.svg"
          alt="Greenarrowright"
          width={50}
          height={40}
          className="w-auto h-auto"
        />
        </div>
            </div>
  );
};

export default FAQ;
