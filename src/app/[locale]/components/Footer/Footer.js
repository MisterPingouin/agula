"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScopedI18n } from "./../../../locales/I18nContext";
import useLocalLink from "./../../hooks/useLocalLink"; 


const Footer = () => {
  const t = useScopedI18n("footer");
    const localLink = useLocalLink();
  

  return (
    <footer className="bg-blue-3 text-white w-full h-auto">
      {/* -------------------- VERSION MOBILE (PAR DÉFAUT) -------------------- */}
      <div className="flex flex-col items-center justify-start md:hidden">
        {/* Logo */}
        <div className="mt-8">
          <Link href={localLink("/")} className="cursor-pointer">
            <Image
              src="/images/logowhite.svg"
              alt="logo lagula marina"
              width={181}
              height={78}
            />
          </Link>
        </div>
        {/* Retrouvez-nous */}
        <p className="mt-6 mb-3 font-medium font-title text-15px">
          {t("findUs")}
        </p>
        <div className="flex space-x-1">
        <Link href="thttps://www.tripadvisor.fr/Attraction_Review-g663644-d25436276-Reviews-L_Agula_Marina_Croisieres-Cargese_Corse_du_Sud_Corsica.html">
            <Image
              src="/images/tripfooter.svg"
              alt="Tripadvisor"
              width={26}
              height={26}
            />
          </Link>
          <Link href="https://www.facebook.com/lagulamarinacroisieres/">
          <Image
              src="/images/fbfooter.svg"
              alt="Facebook"
              width={26}
              height={26}
            />
          </Link>
          <Link href="https://www.instagram.com/lagulamarina_croisieres/">
          <Image
              src="/images/instafooter.svg"
              alt="Instagram"
              width={26}
              height={26}
            />
          </Link>
        </div>
        <p className="mt-3 font-medium font-title text-13px">
          @lagulamarina_croisieres
        </p>

        {/* Séparateur */}
        <hr className="w-[80%] border-gray-300 mt-6 mb-3" />

        {/* Contact */}
        <h2 className="font-medium text-18px font-title mb-2">
          {t("contact")}
        </h2>
        <div className="flex flex-col gap-1.5 justify-center items-center font-title font-medium text-13px">
          {/* Lien téléphonique */}
          <p>
            <Link href="tel:+33643040014" className="hover:text-green-3">
              +33 (0)6 43 04 00 14
            </Link>
          </p>
          <p>Chemin du port</p>
          <p>20130 Cargèse</p>
          {/* Lien mailto */}
          <p>
            <Link
              href="mailto:lagulamarinacroisieres@gmail.com"
              className="hover:text-green-3"
            >
              lagulamarinacroisieres@gmail.com
            </Link>
          </p>
        </div>

        <hr className="w-[80%] border-gray-300 my-6" />

        {/* Circuits */}
        <h2 className="font-medium text-18px font-title mb-2">
          {t("circuits")}
        </h2>
        <div className="flex flex-col gap-1 justify-center items-center font-title font-medium text-13px mb-7">
          <Link href={localLink("/nos-circuits")} className="hover:text-green-3">
            {t("nosCircuits")}
          </Link>
          <Link href="#" className="hover:text-green-3">
            {t("reserver")}
          </Link>
          <Link href={localLink("/privatisation")} className="hover:text-green-3">
            {t("privatisation")}
          </Link>
          <Link href="#" className="hover:text-green-3">
            {t("tarifs")}
          </Link>
        </div>

        {/* Mentions légales et autres */}
        <p className="mt-auto mb-4 text-13px font-title font-light text-center px-4">
          <Link href="#" className="hover:text-green-3">
            {t("mentionsLegales")}
          </Link>{" "}
          |{" "}
          <Link href="#" className="hover:text-green-3">
            {t("cgv")}
          </Link>{" "}
          |{" "}
          <Link href="#" className="hover:text-green-3">
            Resamare
          </Link>{" "}
          |{" "}
          <Link href="#" className="hover:text-green-3">
            {t("realisation")}
          </Link>
          <br />
          @lagulamarina_croisieres 2025
        </p>
      </div>

      {/* -------------------- VERSION DESKTOP (MD ET PLUS) -------------------- */}
      <div className="hidden md:block max-w-6xl mx-auto py-8 px-4">
        <div className="grid grid-cols-4 gap-8">
          {/* Colonne 1 : Logo + réseaux */}
          <div>
            <Link href={localLink("/")} className="cursor-pointer">
              <Image
                src="/images/logowhite.svg"
                alt="logo lagula marina"
                width={181}
                height={78}
              />
            </Link>
            <p className="font-medium font-title text-13px">
              {t("findUs")}
            </p>
            <div className="flex space-x-0.5 mt-1">
            <Link href="thttps://www.tripadvisor.fr/Attraction_Review-g663644-d25436276-Reviews-L_Agula_Marina_Croisieres-Cargese_Corse_du_Sud_Corsica.html" className="hover:text-green-3">
            <Image
                  src="/images/tripfooter.svg"
                  alt="Tripadvisor"
                  width={26}
                  height={26}
                />
              </Link>
              <Link href="https://www.facebook.com/lagulamarinacroisieres/" className="hover:text-green-3">
              <Image
                  src="/images/fbfooter.svg"
                  alt="Facebook"
                  width={26}
                  height={26}
                />
              </Link>
              <Link href="https://www.instagram.com/lagulamarina_croisieres/" className="hover:text-green-3">
              <Image
                  src="/images/instafooter.svg"
                  alt="Instagram"
                  width={26}
                  height={26}
                />
              </Link>
            </div>
            <p className="font-light font-title text-13px">
              @lagulamarina_croisieres 2025
            </p>
          </div>

          {/* Colonne 2 : Contact */}
          <div className="mt-1">
            <h2 className="font-medium text-18px font-title mb-2 uppercase border-b border-white w-fit pb-1">
              {t("contact")}
            </h2>
            <div className="flex flex-col gap-1.5 font-title font-medium text-13px mt-4">
              <Link
                href="tel:+33643040014"
                className="hover:text-green-3"
              >
                +33 (0)6 43 04 00 14
              </Link>
              <p>Chemin du port</p>
              <p>20130 Cargèse</p>
              <Link
                href="mailto:lagulamarinacroisieres@gmail.com"
                className="hover:text-green-3"
              >
                lagulamarinacroisieres@gmail.com
              </Link>
            </div>
          </div>

          {/* Colonne 3 : Circuits */}
          <div className="mt-1">
            <h2 className="font-medium text-18px font-title mb-2 uppercase border-b border-white w-fit pb-1">
              {t("circuits")}
            </h2>
            <div className="flex flex-col gap-1.5 font-title font-medium text-13px mt-4">
              <Link href={localLink("/nos-circuits")} className="hover:text-green-3">
                {t("nosCircuits")}
              </Link>
              <Link href="#" className="hover:text-green-3">
                {t("reserver")}
              </Link>
              <Link href="#" className="hover:text-green-3">
                {t("privatisation")}
              </Link>
              <Link href="#" className="hover:text-green-3">
                {t("tarifs")}
              </Link>
            </div>
          </div>

          {/* Colonne 4 : Informations */}
          <div className="mt-1">
            <h2 className="font-medium text-18px font-title mb-2 uppercase border-b border-white w-fit pb-1">
              {t("informations")}
            </h2>
            <div className="flex flex-col gap-1.5 font-title font-medium text-13px mt-4">
              <Link href="#" className="hover:text-green-3">
                {t("mentionsLegales")}
              </Link>
              <Link href="#" className="hover:text-green-3">
                {t("cgv")}
              </Link>
              <Link href="#" className="hover:text-green-3">
                Resamare
              </Link>
              <Link href="#" className="hover:text-green-3">
                {t("realisation")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
