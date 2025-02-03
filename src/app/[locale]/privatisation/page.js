"use client";

import { useScopedI18n } from "./../../locales/I18nContext";
import Image from "next/image";
import CardPrivat from "./../components/Cards/CardPrivat";


export default function PrivatisationPage() {
  const t = useScopedI18n("privat");

  return (
    <main className="text-black mt-[86px] md:[99px] mx-auto">
        <div className="flex flex-col justify-center items-center px-4">
        <h1 className="font-subtitle mt-4 text-50px md:text-80px text-green-2 leading-none text-center">
          {t("title")}</h1>
        <p className="font-title font-bold py-4 text-15px md:text-15px leading-23px text-center max-w-[900px]">
          {t("subtitle")}
        </p>
        <Image
        src="/images/privat1desktop.webp"
          alt="Bateau Sacha"
          width={352}
          height={426}
          className="object-cover h-auto"
          priority
        />  
        <h2 className="font-title text-25px font-bold leading-none mt-2 self-start px-4 pt-4">{t("subtitle2")}</h2>
        <h3 className="font-title text-25px font-bold leading-none mb-2 self-start px-4">{t("subtitle2_5")}</h3>
        <p className="font-content text-15px leading-23px px-4 pt-2">{t("content1")}</p>
        <p className="font-content text-15px leading-23px px-4 py-8">{t("content2")}</p>
        <p className="font-content text-15px leading-23px px-4">{t("content3")}</p>
        <Image
        src="/images/ancre2.svg"
          alt="Ancre"
          width={50}
          height={56}
          className="object-cover h-auto py-6"
          priority
        /> 
        <p className="font-subtitle text-25px text-center leading-29px mb-10">{t("content4")}</p> 
        <h4 className="text-green font-bold font-title text-25px mt-10">{t("subtitle3")}</h4>
      </div>
            {/* Contenu des cartes */}
            <div className="my-8 px-4">
              {/* Mobile : flex layout */}
              <div className="flex flex-col gap-4 max-w-md mx-auto md:hidden">
                <CardPrivat tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
                <CardPrivat tourKey="calanquesPiana" imageSrc="/images/calanques-piana.jpg" />
                <CardPrivat tourKey="scandolaGirolata" imageSrc="/images/scandola-girolata.jpg" />
                <CardPrivat tourKey="grandTourSunset" imageSrc="/images/grandtour-sunset.jpg" />
                <CardPrivat tourKey="calanquesPianaSunset" imageSrc="/images/calanques-piana-sunset.jpg" />
                <CardPrivat tourKey="scandolaGirolataSunset" imageSrc="/images/scandola-girolata-sunset.jpg" />
              </div>
      
              {/* Desktop : grid layout */}
              <div className="hidden md:grid grid-cols-3 gap-6 max-w-[1200px] mx-auto">
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
