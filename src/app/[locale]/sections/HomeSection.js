"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n, useScopedI18n } from "./../../locales/I18nContext";
import useLocalLink from "./../hooks/useLocalLink"; 
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; 

const HomeSection = () => {
  const { locale, setLocale } = useI18n();
    const localLink = useLocalLink();
    const [homeImage, setHomeImage] = useState("/images/1500x950-lagula.webp");
  
    useEffect(() => {
      // Récupérer dynamiquement le chemin de l'image depuis l'API
      const fetchHomeImage = async () => {
        try {
          const response = await fetch("/api/get-image-paths");
          if (response.ok) {
            const data = await response.json();
            if (data.homeImage) {
              setHomeImage(data.homeImage);
            } else {
              console.error("Chemin de l'image de la page d'accueil manquant dans la réponse");
            }
          } else {
            console.error("Erreur lors de la récupération de l'image, status :", response.status);
          }
        } catch (error) {
          console.error("Erreur de connexion :", error);
        }
      };
  
      fetchHomeImage();
    }, []);

  const t = useScopedI18n("home");
  const t1 = useScopedI18n("navigation");

  const changeLanguage = (lang) => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
  };

  return (
    <section className="flex items-center justify-center h-screen w-full">
     <Image
        src={homeImage}  
        alt={t("image_alt")}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="hidden lg:flex relative z-50 justify-center self-start">
      <div className="flex flex-col">
      <div className="flex items-center self-end gap-2 pt-4 text-white translate-y-2">
      <button onClick={() => changeLanguage("fr")} className={`text-15px font-title ${locale === "fr" ? "font-bold" : ""}`}>
            FR
          </button>
          <span>/</span>
          <button onClick={() => changeLanguage("en")} className={`text-15px font-title ${locale === "en" ? "font-bold" : ""}`}>
            EN
          </button>
          <Link href="https://www.tripadvisor.fr/Attraction_Review-g663644-d25436276-Reviews-L_Agula_Marina_Croisieres-Cargese_Corse_du_Sud_Corsica.html">
          <Image
            src="/images/triphomesection.svg"
            alt="Trip-Advisor"
            width={26}
            height={26}
            className="ml-3 mr-1"
            style={{ height: '16px', width: 'auto' }}
          />
        </Link>
        <Link href="https://www.facebook.com/lagulamarinacroisieres/">
          <Image
            src="/images/fbhomesection.svg"
            alt="Facebook"
            width={10}
            height={10}
            className="mr-1"
            style={{ height: '16px', width: 'auto' }}
          />
        </Link>
        <Link href="https://www.instagram.com/lagulamarina_croisieres/">
          <Image
            src="/images/instahomesection.svg"
            alt="Instagram"
            width={18}
            height={18}
            className="mr-1"
          />
        </Link>
        <Link href="tel:+33643040014">
        <Image
            src="/images/telhomesection.svg"
            alt="Phone"
            width={17}
            height={17}
          />
        </Link>
        <p className="font-content text-15px font-medium">
          +33 (0)6 43 04 00 14
        </p>
      </div>
      <div className="flex items-center -translate-y-1">
        <Link href={localLink("/")} className="cursor-pointer">
          <Image
            src="/images/logowhite.svg"
            alt={t("header.logo_alt")}
            width={181}
            height={78}
          />
        </Link>
        <nav className="flex font-medium pt-6 gap-10 px-16 font-content text-15px text-white">
        <Link
          href={localLink("/nos-circuits")}
        >
          {t1("circuits")}
        </Link>    
        <Link
          href={localLink("/bateau")}
        >
              {t1('boat')}
              </Link> 

        <Link
          href={localLink("/equipe")}
        >
              {t1('team')}
              </Link> 
{t1('commitments')}            
<Link
          href={localLink("/privatisation")}
        >
              {t1('private')}
              </Link> 
<a
              href="#"
            >
{t1('gallery')}            </a>

        </nav>
        <Link href={localLink("/reservation")}>
        <button className="border border-white text-white mt-6 px-14 py-2 font-semibold text-14px">
          {t("book_button")}
        </button>
        </Link>
      </div>
      </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white md:-top-32 leading-none">
        <h1 className="text-35px font-bold font-title">{t("title")}</h1>
        <p className="text-32px mx-4 font-light font-title leading-40px">
          {t("description")}
        </p>
      </div>
      <Link href={localLink("/reservation")}>
      <button className="absolute bottom-0 inset-x-0 w-full mt-8 py-2 px-6 bg-blue-3 text-white font-content text-20px font-semibold md:hidden">
        {t("book_button")}
      </button>
      </Link>
      <div className="hidden absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-11/12 text-white py-8 md:flex justify-between">
        {[
          { number: "01", title: t("embark_title"), description: t("embark_description") },
          { number: "02", title: t("enjoy_title"), description: t("enjoy_description") },
          { number: "03", title: t("live_title"), description: t("live_description") },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="max-w-[20%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} 
          >
            <h3 className="text-20px font-title font-bold">
              <span className="font-medium pr-1">{item.number}</span>
              {item.title}
            </h3>
            <p className="text-14px font-content font-semibold mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Barre blanche animée */}
      <motion.div
        className="hidden md:flex absolute bottom-[10%] w-11/12 h-0.5 opacity-50 bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
      <div className="hidden md:flex absolute bottom-0 w-full justify-center items-center py-4">
        <Image
          src="/images/arrowdown.svg"
          alt="Arrow Down"
          width={30}
          height={30}
          className="animate-bounce w-auto h-auto"
        />
      </div>
    </section>
  );
};

export default HomeSection;
