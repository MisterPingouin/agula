"use client";

import React from "react";
import NavLinks from "../NavLinks";
import Image from "next/image";
import { useI18n, useScopedI18n  } from "./../../../locales/I18nContext";

const MobileMenu = ({ onClose }) => {
  const { locale, setLocale } = useI18n();

  const changeLanguage = (lang) => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
  };

    const t = useScopedI18n("header");

  return (
    <div className="fixed inset-0 bg-white z-40 flex flex-col p-3 h-screen">
      {/* Logo en haut */}
      <Image
        src="/images/logo.svg"
        alt="L'Agula Marina Croisières"
        width={120}
        height={40}
        className="self-start"
      />

      {/* Bouton de fermeture */}
      <button onClick={onClose} />

      {/* Liens de navigation */}
      <NavLinks />

      {/* Boutons d'action */}
      <div className="mt-2 flex flex-col space-y-2 p-3">
        <button className="w-full py-2 text-white bg-blue-3 font-content font-semibold">
        {t('book')}
        </button>
        <button className="w-full py-2 text-white bg-blue-4 font-content font-semibold">
        {t('offer')} 
        </button>
      </div>


      {/* Bouton de changement de langue */}
      <div className="flex items-center p-3 mt-6 text-20px gap-2 font-title font-bold text-green-3 self-start">
      <button
          onClick={() => changeLanguage("fr")}
          className={` ${
            locale === "fr" ? "font-bold" : ""
          }`}
        >
          FR
        </button>
        <p className="">/</p>
        <button
          onClick={() => changeLanguage("en")}
          className={`${
            locale === "en" ? "" : "font-bold"
          }`}
        >
          EN
        </button>
        </div>
      {/* Section des réseaux sociaux */}
      <div className="flex flex-col px-4 mt-auto">
        <div className="flex flex-col space-y-1">
          <p className="mt-4 text-20px font-title font-bold text-green-3">
          {t('follow_us')}
          </p>
          <div className="flex space-x-1">
            <a href="#">
              <Image src="/images/phone.svg" alt="Phone" width={24} height={24} />
            </a>
            <a href="#">
              <Image src="/images/phone.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#">
              <Image src="/images/phone.svg" alt="Facebook" width={24} height={24} />
            </a>
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
