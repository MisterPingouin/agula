"use client";

import { useScopedI18n } from "./../../locales/I18nContext";
import Image from "next/image";
import CardPrivat from "./../components/Cards/CardPrivat";

export default function PrivatisationPage() {
  const t = useScopedI18n("privat");

  return (
    <main className="text-black mt-[80px] md:[99px] mx-auto">
      {/* Header */}
      <div className="flex flex-col justify-center items-center px-4 py-4">
        {/* Mobile */}
        <h1 className="font-subtitle mt-4 text-50px text-green-2 leading-none text-center md:hidden">
          {t("title")}
        </h1>
        <p className="font-title font-bold pt-4 text-15px text-center md:hidden">
          {t("subtitle")}
        </p>
        <p className="font-title font-bold pb-4 text-15px text-center md:hidden">
          {t("subtitle1")}
        </p>

        {/* Tablette */}
        <h1 className="font-subtitle hidden md:block lg:hidden mt-4 text-80px text-green-2 leading-none text-center">
          {t("title")}
        </h1>
        <p className="font-title font-bold hidden md:block lg:hidden pt-4 text-20px leading-25px text-center">
          {t("subtitle")}
        </p>
        <p className="font-title font-bold hidden md:block lg:hidden pb-4 text-20px leading-30px text-center">
          {t("subtitle1")}
        </p>

        {/* Desktop */}
        <h1 className="font-subtitle hidden lg:block mt-4 text-80px text-green-2 leading-none text-center">
          {t("title")}
        </h1>
        <p className="font-title font-bold hidden lg:block pt-4 text-25px leading-36px text-center">
          {t("subtitle")}
        </p>
        <p className="font-title font-bold hidden lg:block pb-4 text-25px leading-23px text-center">
          {t("subtitle1")}
        </p>

        {/* Première section – Contenu image et textes */}
        {/* Mobile */}
        <Image
          src="/images/privat1desktop.webp"
          alt="Bateau Sacha"
          width={352}
          height={426}
          style={{ height: "auto", width: "426px" }}
          className="object-cover h-auto md:hidden"
          priority
        />
        <h2 className="font-title text-25px font-bold leading-none mt-2 self-start px-4 pt-4 md:hidden">
          {t("subtitle2")}
        </h2>
        <h3 className="font-title text-25px font-bold leading-none mb-2 self-start px-4 md:hidden">
          {t("subtitle2_5")}
        </h3>
        <p className="font-content text-15px leading-23px px-4 pt-2 md:hidden">
          {t("content1")}
        </p>
        <p className="font-content text-15px leading-23px px-4 py-8 md:hidden">
          {t("content2")}
        </p>
        <p className="font-content text-15px leading-23px px-4 md:hidden">
          {t("content3")}
        </p>
        <Image
          src="/images/ancre2.svg"
          alt="Ancre"
          width={50}
          height={56}
          className="object-cover h-auto py-6 md:hidden"
          priority
        />
        <p className="font-subtitle text-25px text-center leading-29px mb-10 md:hidden">
          {t("content4")}
        </p>
        <h4 className="text-green font-bold font-title text-25px mt-10 md:hidden">
          {t("subtitle3")}
        </h4>
      </div>

      {/* Tablette – Première section */}
      <div className="hidden md:flex lg:hidden items-center justify-center gap-8 my-14 px-4">
        <Image
          src="/images/privat1desktop.webp"
          alt="Bateau Sacha Tablet"
          width={393}
          height={502}
          style={{ height: "auto", width: "393px" }}
          priority
        />
        <div className="flex flex-col max-w-[563px]">
          <h2 className="font-title text-30px font-bold leading-none mt-2 self-start px-4 pt-4">
            {t("subtitle2")}
          </h2>
          <h3 className="font-title text-30px font-bold leading-none mb-2 self-start px-4">
            {t("subtitle2_5")}
          </h3>
          <p className="font-content text-15px leading-23px px-4 pt-2">
            {t("content1")}
          </p>
          <p className="font-content text-15px leading-23px px-4 pt-6">
            {t("content2")}
          </p>
          <p className="font-content text-15px leading-23px px-4">
            {t("content3")}
          </p>
          <div className="flex items-center gap-6 w-[370px]">
            <Image
              src="/images/ancre2.svg"
              alt="Ancre Tablet"
              width={50}
              height={56}
              className="object-cover h-auto py-6"
              priority
            />
            <p className="font-subtitle text-25px leading-29px">
              {t("content4")}
            </p>
          </div>
        </div>
      </div>
      <h4 className="hidden md:block lg:hidden text-green text-center font-bold font-title text-30px mt-10">
        {t("subtitle3")}
      </h4>

      {/* Desktop – Première section */}
      <div className="hidden lg:flex items-center justify-center gap-8 my-14 px-4">
        <Image
          src="/images/privat1desktop.webp"
          alt="Bateau Sacha Desktop"
          width={393}
          height={502}
          style={{ height: "auto", width: "393px" }}
          priority
        />
        <div className="flex flex-col max-w-[563px]">
          <h2 className="font-title text-35px font-bold leading-none mt-2 self-start px-4 pt-4">
            {t("subtitle2")}
          </h2>
          <h3 className="font-title text-35px font-bold leading-none mb-2 self-start px-4">
            {t("subtitle2_5")}
          </h3>
          <p className="font-content text-15px leading-23px px-4 pt-2">
            {t("content1")}
          </p>
          <p className="font-content text-15px leading-23px px-4 pt-6">
            {t("content2")}
          </p>
          <p className="font-content text-15px leading-23px px-4">
            {t("content3")}
          </p>
          <div className="flex items-center gap-6 w-[370px]">
            <Image
              src="/images/ancre2.svg"
              alt="Ancre Desktop"
              width={50}
              height={56}
              className="object-cover h-auto py-6"
              priority
            />
            <p className="font-subtitle text-25px leading-29px">
              {t("content4")}
            </p>
          </div>
        </div>
      </div>
      <h4 className="hidden lg:block text-green text-center font-bold font-title text-35px mt-10">
        {t("subtitle3")}
      </h4>

      {/* Contenu des cartes */}
      <div className="my-8 px-4">
        {/* Mobile : layout en flex */}
        <div className="flex flex-col gap-4 max-w-md mx-auto md:hidden">
          <CardPrivat tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
          <CardPrivat tourKey="calanquesPiana" imageSrc="/images/calanques-piana.jpg" />
          <CardPrivat tourKey="scandolaGirolata" imageSrc="/images/scandola-girolata.jpg" />
          <CardPrivat tourKey="grandTourSunset" imageSrc="/images/grandtour-sunset.jpg" />
          <CardPrivat tourKey="calanquesPianaSunset" imageSrc="/images/calanques-piana-sunset.jpg" />
          <CardPrivat tourKey="scandolaGirolataSunset" imageSrc="/images/scandola-girolata-sunset.jpg" />
        </div>

        {/* Tablette : layout en grid (2 colonnes) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 max-w-[1200px] mx-auto">
          <CardPrivat tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
          <CardPrivat tourKey="calanquesPiana" imageSrc="/images/calanques-piana.jpg" />
          <CardPrivat tourKey="scandolaGirolata" imageSrc="/images/scandola-girolata.jpg" />
          <CardPrivat tourKey="grandTourSunset" imageSrc="/images/grandtour-sunset.jpg" />
          <CardPrivat tourKey="calanquesPianaSunset" imageSrc="/images/calanques-piana-sunset.jpg" />
          <CardPrivat tourKey="scandolaGirolataSunset" imageSrc="/images/scandola-girolata-sunset.jpg" />
        </div>

        {/* Desktop : layout en grid (3 colonnes) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          <CardPrivat tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
          <CardPrivat tourKey="calanquesPiana" imageSrc="/images/calanques-piana.jpg" />
          <CardPrivat tourKey="scandolaGirolata" imageSrc="/images/scandola-girolata.jpg" />
          <CardPrivat tourKey="grandTourSunset" imageSrc="/images/grandtour-sunset.jpg" />
          <CardPrivat tourKey="calanquesPianaSunset" imageSrc="/images/calanques-piana-sunset.jpg" />
          <CardPrivat tourKey="scandolaGirolataSunset" imageSrc="/images/scandola-girolata-sunset.jpg" />
        </div>
      </div>
    </main>
  );
}
