"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n, useScopedI18n } from "./../../locales/I18nContext";
import useLocalLink from "./../hooks/useLocalLink";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeSection = () => {
  // Contexte de langue
  const { locale, setLocale } = useI18n();
  const localLink = useLocalLink();

  // Hooks pour la traduction
  const t = useScopedI18n("home");
  const t1 = useScopedI18n("navigation");

  // État pour l'image d'accueil
  const [homeImage, setHomeImage] = useState("/images/1500x950-lagula.webp");

  // === POP-UP : on récupère data.popup depuis /api/admin/get-content ===
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  useEffect(() => {
    const fetchPopupConfig = async () => {
      try {
        const response = await fetch(`/api/admin/get-content?locale=${locale}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          console.error("Impossible de récupérer la configuration de la pop-up");
          return;
        }

        const data = await response.json();
        const popup = data.popup || {};
        setPopupData(popup);

        // Si la pop-up est activée, on l'affiche
        if (popup.enabled) {
          setShowPopup(true);
        } else {
          setShowPopup(false);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de la pop-up :", error);
      }
    };

    fetchPopupConfig();
  }, [locale]);

  // Méthode pour fermer la pop-up (ne mémorise plus rien dans localStorage)
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Récupération de l'image d'accueil
  useEffect(() => {
    const fetchHomeImage = async () => {
      try {
        const response = await fetch("/api/get-image-paths");
        if (response.ok) {
          const data = await response.json();
          if (data.homeImage) {
            setHomeImage(data.homeImage);
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

  // Changer la langue
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

      {/* == Pop-up dynamique == */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute flex items-center justify-center z-50 inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-[45px] md:p-[35px] max-w-[500px] w-[90%] md:w-[80%]  shadow-lg relative text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Bouton pour fermer la pop-up */}
              <button
                onClick={handleClosePopup}
                className="absolute top-2 right-2 text-black text-3xl"
              >
                &times;
              </button>

              {/* Contenu de la pop-up (pris via popupData) */}
              <h2 className="text-20px font-title mb-6 leading-tight md:text-25px">
                {popupData.title}
              </h2>
              <p className="mb-2 font-content text-13px md:text-15px">{popupData.line1}</p>
              <p className="mb-2 font-content text-13px md:text-15px">{popupData.line2}</p>
              <p className="mb-4 font-content text-13px md:text-15px">{popupData.line3}</p>
              <p className="font-content text-13px md:text-15px">{popupData.validity}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* == Fin pop-up == */}

      {/* Barre du haut (desktop) */}
      <div className="hidden lg:flex relative z-50 justify-center self-start">
        <div className="flex flex-col">
          <div className="flex items-center self-end gap-2 pt-4 text-white">
            {/* Boutons FR / EN */}
            <button
              onClick={() => changeLanguage("fr")}
              className={`text-15px font-title ${locale === "fr" ? "font-bold" : ""}`}
            >
              FR
            </button>
            <span>/</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`text-15px font-title ${locale === "en" ? "font-bold" : ""}`}
            >
              EN
            </button>
            <Link href="https://www.tripadvisor.fr/Attraction_Review-g663644-d25436276-Reviews-L_Agula_Marina_Croisieres-Cargese_Corse_du_Sud_Corsica.html">
              <Image
                src="/images/triphomesection.svg"
                alt="Trip-Advisor"
                width={26}
                height={26}
                className="ml-3 mr-1"
                style={{ height: "16px", width: "auto" }}
              />
            </Link>
            <Link href="https://www.facebook.com/lagulamarinacroisieres/">
              <Image
                src="/images/fbhomesection.svg"
                alt="Facebook"
                width={10}
                height={10}
                className="mr-1"
                style={{ height: "16px", width: "auto" }}
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
            <p className="font-content text-15px font-medium">+33 (0)6 43 04 00 14</p>
          </div>
          <div className="flex items-center -translate-y-3">
            <Link href={localLink("/")}>
              <Image
                src="/images/logowhite.svg"
                alt={t("header.logo_alt")}
                width={181}
                height={78}
              />
            </Link>
            <nav className="flex font-medium pt-6 gap-10 px-16 font-content text-15px text-white">
              {[
                { href: "/nos-circuits", label: t1("circuits") },
                { href: "/bateau", label: t1("boat") },
                { href: "/equipe", label: t1("team") },
                { href: "/engagement", label: t1("commitments") },
                { href: "/privatisation", label: t1("private") },
                { href: "/gallerie", label: t1("gallery") },
              ].map((item, index) => (
                <Link key={index} href={localLink(item.href)} className="relative group">
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              ))}
            </nav>
            <Link href={localLink("/reservation")}>
              <button className="border border-white text-white mt-6 px-14 py-2 font-semibold text-14px">
                {t("book_button")}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white md:-top-32 leading-none">
        <h1 className="text-35px font-bold font-title">{t("title")}</h1>
        <p className="text-32px mx-4 font-light font-title leading-40px">{t("description")}</p>
      </div>
      <Link href={localLink("/reservation")}>
        <button className="absolute bottom-0 inset-x-0 w-full mt-8 py-2 px-6 bg-blue-3 text-white font-content text-20px font-semibold lg:hidden">
          {t("book_button")}
        </button>
      </Link>
      <div className="hidden absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-11/12 text-white py-8 lg:flex justify-between">
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
        className="hidden lg:flex absolute bottom-[10%] w-11/12 h-0.5 opacity-50 bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <div className="hidden lg:flex absolute bottom-0 w-full justify-center items-center py-4">
        <Image
          src="/images/arrowdown.svg"
          alt="Arrow Down"
          width={30}
          height={30}
          className="animate-bounce w-auto h-auto cursor-pointer"
          onClick={() => {
            const nextSection = document.getElementById("next-section");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </div>
    </section>
  );
};

export default HomeSection;
