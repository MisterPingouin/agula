"use client";

import { useScopedI18n } from "./../../locales/I18nContext";
import Card from "./../components/Cards/Card"; 

export default function CircuitsPage() {
  const t = useScopedI18n("circuits");

  return (
    <main className="text-black mt-[86px] md:[99px]">
      {/* Titre et description */}
      <div className="flex flex-col justify-center gap-2 mt-6 items-center px-8">
        <h1 className="font-subtitle text-50px md:text-80px text-green-2">{t("title")}</h1>
        <p className="font-content text-13px md:text-15px leading-23px text-center max-w-[900px]">
          {t("content")}
        </p>
      </div>

      {/* Contenu des cartes */}
      <div className="my-8 px-4">
        {/* Mobile : flex layout */}
        <div className="flex flex-col gap-4 max-w-md mx-auto md:hidden">
          <Card tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
          <Card tourKey="calanquesPiana" imageSrc="/images/calanques-piana.jpg" />
          <Card tourKey="scandolaGirolata" imageSrc="/images/scandola-girolata.jpg" />
          <Card tourKey="grandTourSunset" imageSrc="/images/grandtour-sunset.jpg" />
          <Card tourKey="calanquesPianaSunset" imageSrc="/images/calanques-piana-sunset.jpg" />
          <Card tourKey="scandolaGirolataSunset" imageSrc="/images/scandola-girolata-sunset.jpg" />
        </div>

        {/* Desktop : grid layout */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          <Card tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
          <Card tourKey="calanquesPiana" imageSrc="/images/calanques-piana.jpg" />
          <Card tourKey="scandolaGirolata" imageSrc="/images/scandola-girolata.jpg" />
          <Card tourKey="grandTourSunset" imageSrc="/images/grandtour-sunset.jpg" />
          <Card tourKey="calanquesPianaSunset" imageSrc="/images/calanques-piana-sunset.jpg" />
          <Card tourKey="scandolaGirolataSunset" imageSrc="/images/scandola-girolata-sunset.jpg" />
        </div>
      </div>
    </main>
  );
}
