"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n, useScopedI18n } from "./../../locales/I18nContext";

const HomeSection = () => {
  const { locale, setLocale } = useI18n();

  const t = useScopedI18n("home");
  const t1 = useScopedI18n("navigation");

  const changeLanguage = (lang) => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
  };

  return (
    <section className="relative flex items-center justify-center h-screen w-full">
      <Image
        src="/images/1500x950-lagula.webp"
        alt={t("image_alt")}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="hidden lg:flex justify-center self-start">
      <div className="flex flex-col">
      <div className="relative z-50 flex items-center self-end gap-2 pt-4 text-white translate-y-2 ">
      <button onClick={() => changeLanguage("fr")} className={`text-15px font-title ${locale === "fr" ? "font-bold" : ""}`}>
            FR
          </button>
          <span>/</span>
          <button onClick={() => changeLanguage("en")} className={`text-15px font-title ${locale === "en" ? "font-bold" : ""}`}>
            EN
          </button>
        <a href="#">
          <Image
            src="/images/whitephone.svg"
            alt="Phone"
            width={14}
            height={14}
          />
        </a>
        <a href="#">
          <Image
            src="/images/whitephone.svg"
            alt="Phone"
            width={14}
            height={14}
          />
        </a>
        <a href="#">
          <Image
            src="/images/whitephone.svg"
            alt="Phone"
            width={14}
            height={14}
          />
        </a>
        <a href="#">
          <Image
            src="/images/whitephone.svg"
            alt="Phone"
            width={14}
            height={14}
          />
        </a>
        <p className="font-content text-15px font-medium">
          +33 (0)6 43 04 00 14
        </p>
      </div>
      <div className="flex relative z-50 items-center -translate-y-1">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/logowhite.svg"
            alt={t("header.logo_alt")}
            width={181}
            height={78}
          />
        </Link>
        <nav className="flex font-medium pt-6 gap-10 px-16 font-content text-15px text-white">
        <a
              href="#"
            >
              {t1('circuits')}
            </a>
            <a
              href="#"
            >
              {t1('boat')}
            </a>
            <a
              href="#"
            >
{t1('team')}            </a>
<a
              href="#"
            >
{t1('commitments')}            </a>
<a
              href="#"
            >
{t1('private')}            </a>
<a
              href="#"
            >
{t1('gallery')}            </a>

        </nav>
        <button className="border border-white text-white mt-6 px-14 py-2 font-semibold text-14px">
          {t("book_button")}
        </button>
      </div>
      </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-35px font-bold font-title">{t("title")}</h1>
        <p className="text-26px mx-4 font-light font-title leading-28px">
          {t("description")}
        </p>
        <p className="text-26px mx-4 font-subtitle">{t("agency")}</p>
      </div>
      <button className="absolute bottom-0 inset-x-0 w-full mt-8 py-2 px-6 bg-blue-3 text-white font-content text-20px font-semibold md:hidden">
        {t("book_button")}
      </button>
      <div className="hidden md:flex absolute bottom-0 w-full justify-center items-center py-4">
        <Image
          src="/images/arrowdown.svg"
          alt="Arrow Down"
          width={30}
          height={30}
          className="animate-bounce"
        />
      </div>
    </section>
  );
};

export default HomeSection;
