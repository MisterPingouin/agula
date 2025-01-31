"use client"

import React from "react";
import Image from "next/image";
import { useScopedI18n } from "./../../locales/I18nContext";

const HomeSection = () => {
  const t = useScopedI18n("home");

  return (
    <section className="relative h-screen w-full">
      <Image
        src="/images/1500x950-lagula.webp"
        alt={t('image_alt')}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-35px font-bold font-title">{t('title')}</h1>
        <p className="text-26px mx-4 font-light font-title leading-28px">
          {t('description')}
        </p>
        <p className="text-26px mx-4 font-subtitle">
          {t('agency')}
        </p>
      </div>
      <button className="absolute bottom-0 inset-x-0 w-full mt-8 py-2 px-6 bg-blue-3 text-white font-content text-20px font-semibold">
        {t('book_button')}
      </button>
    </section>
  );
};

export default HomeSection;