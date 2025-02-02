"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScopedI18n } from "./../../../locales/I18nContext";

const Footer = () => {
  const t = useScopedI18n("footer");

  return (
    <footer className="flex flex-col items-center justify-start bg-blue-3 text-white w-full h-auto">
      {/* Logo */}
      <div className="mt-8">
        <Link href="/" className="cursor-pointer">
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
      <div className="flex space-x-4">
        {/* Icônes réseaux sociaux (tripadvisor, facebook, instagram, etc.) */}
        <Link href="#">
          <Image src="/images/whitephone.svg" alt="Tripadvisor" width={14} height={14} />
        </Link>
        <Link href="#">
          <Image src="/images/whitephone.svg" alt="Facebook" width={14} height={14} />
        </Link>
        <Link href="#">
          <Image src="/images/whitephone.svg" alt="Instagram" width={14} height={14} />
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
          <Link href="tel:+33643040014">+33 (0)6 43 04 00 14</Link>
        </p>
        <p>Chemin du port</p>
        <p>20130 Cargèse</p>
        {/* Lien mailto */}
        <p>
          <Link href="mailto:lagulamarinacroisieres@gmail.com">
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
        <Link href="#">{t("nosCircuits")}</Link>
        <Link href="#">{t("reserver")}</Link>
        <Link href="#">{t("privatisation")}</Link>
        <Link href="#">{t("tarifs")}</Link>
      </div>

      {/* Mentions légales et autres */}
      <p className="mt-auto mb-4 text-13px font-title font-light text-center px-4">
        <Link href="#">{t("mentionsLegales")}</Link> |
        <Link href="#">{t("cgv")}</Link> |
        <Link href="#"> Resamare</Link> | 
        <Link href="#">{t("realisation")}</Link>
        <br />
        @lagulamarina_croisieres 2025
      </p>
    </footer>
  );
};

export default Footer;
