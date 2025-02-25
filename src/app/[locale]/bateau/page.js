"use client";

import { useScopedI18n } from "./../../locales/I18nContext";
import Image from "next/image";

export default function BateauPage() {
  const t = useScopedI18n("boat");

  return (
    <main className="flex flex-col justify-center items-center text-black mt-[80px] px-6 md:px-0">
      {/* En-tête - Image de fond */}
      {/* Version tablette */}
      <Image
        src="/images/boat4.webp"
        alt="Bateau Sacha Tablet"
        width={1280}
        height={440}
        className="w-full object-cover hidden md:block lg:hidden"
        priority
      />
      {/* Version desktop */}
      <Image
        src="/images/boat4.webp"
        alt="Bateau Sacha Desktop"
        width={1280}
        height={440}
        className="w-full object-cover hidden lg:block"
        priority
      />

      <div className="w-full max-w-screen-lg mx-auto md:px-10 lg:px-0">
        {/* Titre */}
        {/* Version mobile */}
        <h1 className="font-subtitle text-50px text-green text-center md:hidden">
          {t("title")}
        </h1>
        {/* Version tablette */}
        <h1 className="font-subtitle hidden md:block lg:hidden text-80px mt-4 text-green text-center">
          {t("title")}
        </h1>
        {/* Version desktop */}
        <h1 className="font-subtitle hidden lg:block text-80px mt-4 text-green text-center">
          {t("title")}
        </h1>

        {/* Sous-titre */}
        {/* Version mobile */}
        <h2 className="font-content text-center text-15px font-bold leading-23px pb-6 md:hidden">
          {t("subtitle")}
        </h2>
        {/* Version tablette */}
        <h2 className="font-content hidden md:block lg:hidden text-center text-20px font-bold leading-25px pb-6 px-16">
          {t("subtitle")}
        </h2>
        {/* Version desktop */}
        <h2 className="font-content hidden lg:block text-center text-25px font-bold leading-normal pb-6 px-28">
          {t("subtitle")}
        </h2>

        {/* Première section – Contenu lié à boat1.webp */}
        {/* Version mobile */}
        <Image
          src="/images/boat1.webp"
          alt="Bateau Sacha"
          width={352}
          height={426}
          className="md:hidden ml-3"
          priority
        />
        <h3 className="font-title font-bold text-25px self-start py-4 px-3 md:hidden">
          {t("subtitle2")}
        </h3>
        <p className="font-content text-15px leading-23px pb-8 px-3 md:hidden">
          {t("content")}
        </p>
        <div className="flex justify-center md:hidden">
          <Image
            src="/images/ancre2.svg"
            alt="Bateau Sacha"
            width={50}
            height={57}
            style={{ height: "50px", width: "auto" }}
          />
        </div>
        <p className="font-subtitle text-25px leading-29px py-6 text-center md:hidden">
          {t("content2")}
        </p>

        {/* Version tablette */}
        <div className="hidden md:flex lg:hidden justify-center items-center gap-6 mt-6">
          <Image
            src="/images/boat1.webp"
            alt="Bateau Sacha Tablet"
            width={352}
            height={426}
            style={{ height: "auto", width: "1000px" }}
            priority
          />
          <div className="flex flex-col">
            <h3 className="font-title font-bold text-30px self-start py-3 mt-6 px-3">
              {t("subtitle2")}
            </h3>
            <p className="font-content text-15px leading-23px pb-6 px-3 w-[400px]">
              {t("content")}
            </p>
            <div className="flex gap-4">
              <Image
                src="/images/ancre2.svg"
                alt="Bateau Sacha Tablet"
                width={50}
                height={57}
                style={{ height: "50px", width: "auto" }}
              />
              <p className="font-subtitle text-25px leading-29px w-4/6">
                {t("content2")}
              </p>
            </div>
          </div>
        </div>

        {/* Version desktop */}
        <div className="hidden lg:flex justify-center items-center gap-8 mt-8">
          <Image
            src="/images/boat1.webp"
            alt="Bateau Sacha Desktop"
            width={352}
            height={426}
            style={{ height: "426px", width: "auto" }}
            priority
          />
          <div className="flex flex-col">
            <h3 className="font-title font-bold text-35px self-start py-4 mt-8 px-3">
              {t("subtitle2")}
            </h3>
            <p className="font-content text-15px leading-23px pb-8 px-3 w-[465px]">
              {t("content")}
            </p>
            <div className="flex gap-4">
              <Image
                src="/images/ancre2.svg"
                alt="Bateau Sacha Desktop"
                width={50}
                height={57}
                style={{ height: "50px", width: "auto" }}
              />
              <p className="font-subtitle text-25px leading-29px w-4/6">
                {t("content2")}
              </p>
            </div>
          </div>
        </div>

        {/* Deuxième section – Contenu lié à boat3.jpg */}
        {/* Version mobile */}
        <Image
          src="/images/boat3.jpg"
          alt="Bateau"
          width={356}
          height={427}
          className="md:hidden ml-3"
        />
        <h4 className="font-title font-bold text-25px self-start py-4 px-3 md:hidden">
          {t("subtitle3")}
        </h4>
        <p className="font-content text-15px leading-23px pb-8 px-3 md:hidden">
          {t("content3")}
        </p>
        <div className="flex justify-center md:hidden">
          <Image
            src="/images/dive2.svg"
            alt="Scuba"
            width={51}
            height={62}
            className="w-auto h-auto"
          />
        </div>
        <p className="font-subtitle text-25px leading-29px py-6 text-center md:hidden">
          {t("content4")}
        </p>

        {/* Version tablette */}
        <div className="hidden md:flex lg:hidden gap-6">
          <div className="flex flex-col justify-center">
            <h4 className="font-title font-bold text-30px self-start py-3">
              {t("subtitle3")}
            </h4>
            <p className="font-content text-15px leading-23px pb-6 w-[400px]">
              {t("content3")}
            </p>
            <div className="flex gap-4">
              <Image
                src="/images/dive2.svg"
                alt="Scuba Tablet"
                width={51}
                height={62}
                className="w-auto h-auto"
              />
              <p className="font-subtitle text-25px leading-29px py-6">
                {t("content4")}
              </p>
            </div>
          </div>
          <Image
            src="/images/boat3.jpg"
            alt="Bateau Tablet"
            width={356}
            height={427}
            style={{ height: "auto", width: "500px" }}
          />
        </div>

        {/* Version desktop */}
        <div className="hidden lg:flex gap-8">
          <div className="flex flex-col justify-center">
            <h4 className="font-title font-bold text-35px self-start py-4">
              {t("subtitle3")}
            </h4>
            <p className="font-content text-15px leading-23px pb-8 w-[452px]">
              {t("content3")}
            </p>
            <div className="flex gap-6">
              <Image
                src="/images/dive2.svg"
                alt="Scuba Desktop"
                width={51}
                height={62}
                className="w-auto h-auto"
              />
              <p className="font-subtitle text-31px leading-29px py-6 w-[517px]">
                {t("content4")}
              </p>
            </div>
          </div>
          <Image
            src="/images/boat3.jpg"
            alt="Bateau Desktop"
            width={356}
            height={427}
            style={{ height: "427px", width: "auto" }}
          />
        </div>

        {/* Section "Confort" */}
        {/* Version mobile */}
        <p className="font-title text-25px leading-29px text-center px-3 py-6 md:hidden">
          {t("confort")}
        </p>
        {/* Version tablette */}
        <p className="font-title hidden md:block lg:hidden text-center px-3 py-6 text-30px leading-40px mt-4">
          {t("confort")}
        </p>
        {/* Version desktop */}
        <p className="font-title hidden lg:block text-center px-3 py-6 text-35px leading-50px mt-6">
          {t("confort")}
        </p>
      </div>
    </main>
  );
}
