"use client";

import React from "react";
import NavLinks from "../NavLinks";
import Image from "next/image";
import Link from "next/link";
import { useI18n, useScopedI18n } from "./../../../locales/I18nContext";
import useLocalLink from "../../hooks/useLocalLink";


const MobileMenu = ({ onClose }) => {
  const { locale, setLocale } = useI18n();

  const changeLanguage = (lang) => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
  };

  const t = useScopedI18n("header");
    const localLink = useLocalLink();
  

  return (
    <div className="fixed inset-0 bg-white z-40 flex flex-col p-3 h-screen">
      {/* Logo en haut */}
      <Link onClick={onClose} href="/" className="cursor-pointer">
        <Image
          src="/images/logo.svg"
          alt="logo lagula marina"
          width={120}
          height={40}
        />
      </Link>

      {/* Bouton de fermeture */}
      <button onClick={onClose} />

      {/* Liens de navigation */}
      <NavLinks onClose={onClose} />

      {/* Boutons d'action */}
      <div className="mt-2 flex flex-col space-y-2 p-3">
      <Link href={localLink("/reservation")}>
        <button onClick={onClose} className="w-full py-2 text-white bg-blue-3 font-content font-semibold">
          {t("book")}
        </button>
        </Link>
        <button className="w-full py-2 text-white bg-blue-4 font-content font-semibold">
          {t("offer")}
        </button>
      </div>
      {/* Bouton de changement de langue */}
      <div className="flex items-center p-3 mt-6 text-20px gap-2 font-title font-bold text-green-3 self-start">
        <button
          onClick={() => changeLanguage("fr")}
          className={` ${locale === "fr" ? "font-bold" : ""}`}
        >
          FR
        </button>
        <p className="">/</p>
        <button
          onClick={() => changeLanguage("en")}
          className={`${locale === "en" ? "" : "font-bold"}`}
        >
          EN
        </button>
      </div>
      {/* Section des réseaux sociaux */}
      <div className="flex flex-col px-3 mt-auto">
        <div className="flex flex-col space-y-1">
          <p className="mt-4 text-20px font-title font-bold text-green-3">
            {t("follow_us")}
          </p>
          <div className="flex space-x-1">
            <Link href="https://www.tripadvisor.fr/Attraction_Review-g663644-d25436276-Reviews-L_Agula_Marina_Croisieres-Cargese_Corse_du_Sud_Corsica.html">
              <Image
                src="/images/tripgreen.svg"
                alt="Trip-advisor"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.instagram.com/lagulamarina_croisieres/">
              <Image
                src="/images/instagreen.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.facebook.com/lagulamarinacroisieres/">
              <Image
                src="/images/fbgreen.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <p className="text-black font-content font-bold text-9px">
            ©lagulamarinacroisieres
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
