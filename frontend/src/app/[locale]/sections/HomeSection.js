"use client";

import React from "react";
import Image from "next/image";
import { useI18n, useScopedI18n } from "./../../locales/I18nContext";


const HomeSection = () => {
  const { locale, setLocale } = useI18n();

  const t = useScopedI18n("home");

  const changeLanguage = (lang) => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
  };

  return (
    <section className="relative h-screen w-full">
      <Image
        src="/images/1500x950-lagula.webp"
        alt={t("image_alt")}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="relative z-50 hidden md:flex items-center gap-2 px-16 pt-4 justify-self-end text-white">
      <button
          onClick={() => changeLanguage("fr")}
          className={`text-15px font-medium font-title ${
            locale === "fr" ? "font-bold" : "font-bold"
          }`}
        >
          FR
        </button>
        <p>/</p>
        <button
          onClick={() => changeLanguage("en")}
          className={`text-15px font-medium font-title ${
            locale === "en" ? "font-bold" : "font-bold"
          }`}
        >
          EN
        </button>
                      <a href="#">
                        <Image src="/images/whitephone.svg" alt="Phone" width={14} height={14} />
                      </a>
                      <a href="#">
                        <Image src="/images/whitephone.svg" alt="Phone" width={14} height={14} />
                      </a>
                      <a href="#">
                        <Image src="/images/whitephone.svg" alt="Phone" width={14} height={14} />
                      </a>
                      <a href="#">
                        <Image src="/images/whitephone.svg" alt="Phone" width={14} height={14} />
                      </a>
                      <p className="font-content text-15px font-medium">+33 (0)6 43 04 00 14</p>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-35px font-bold font-title">{t("title")}</h1>
        <p className="text-26px mx-4 font-light font-title leading-28px">
          {t("description")}
        </p>
        <p className="text-26px mx-4 font-subtitle">
          {t("agency")}
        </p>
      </div>
      <button className="absolute bottom-0 inset-x-0 w-full mt-8 py-2 px-6 bg-blue-3 text-white font-content text-20px font-semibold md:hidden">
        {t("book_button")}
      </button>
    </section>
  );
};

export default HomeSection;
