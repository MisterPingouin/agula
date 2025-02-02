"use client";

import { useScopedI18n } from "./../../locales/I18nContext";
import Card from "./../components/Cards/Card"; 


export default function CircuitsPage() {
  const t = useScopedI18n("circuits");
  const t1 = useScopedI18n("cards");


  return (
    <section className=" text-black">
        <div className="h-[86px]"></div>
        <div className="flex flex-col justify-center gap-2 mt-6 items-center px-8">
            <h1 className="font-subtitle text-50px text-green-2 ">{t("title")}</h1>
            <p className="font-content text-15px leading-23px">{t("content")}</p>
        </div>
              <div className="flex flex-col my-8 px-4 gap-4 max-w-md mx-auto md:hidden">
                <Card tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
                <Card
                    tourKey="calanquesPiana"
                    imageSrc="/images/calanques-piana.jpg"
                  />
                            <Card
                    tourKey="scandolaGirolata"
                    imageSrc="/images/scandola-girolata.jpg"
                  />
                                  <Card tourKey="grandTourSunset" imageSrc="/images/grandtour-sunset.jpg" />
                                  <Card tourKey="calanquesPianaSunset" imageSrc="/images/calanques-piana-sunset.jpg" />
                                  <Card tourKey="scandolaGirolataSunset" imageSrc="/images/scandola-girolata-sunset.jpg" />

              </div>
        </section>
);
}
