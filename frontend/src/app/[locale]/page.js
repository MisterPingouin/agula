"use client";

import HomeSection from "./sections/HomeSection";
import { useScopedI18n } from "./../locales/I18nContext";
import Image from "next/image";
import Card from "./components/Cards/Card"; 

export default function HomePage() {
  const t = useScopedI18n("page");

  return (
    <main>
      <HomeSection />

      <section className="relative w-full h-[120px] mt-2">
        <Image
          src="/images/Tracebleu.svg"
          alt="Vague décorative"
          fill
          className="object-contain"
          priority
        />
        <h2
          className="
            absolute inset-0 flex items-center justify-center
            z-10 text-blue font-subtitle
            text-50px mt-4
          "
        >
          {t("title")}
        </h2>
      </section>
      <section className="relative h-[260px] mb-6">
        <div
          className="
            absolute 
            bottom-0 left-[120px] 
            z-0 
          "
        >
          <Image
            src="/images/sea.jpg"
            alt="Mer"
            width={320}
            height={226}
            className="img-fixed object-cover"
          />
        </div>

        <div
          className="
            absolute
            top-0 left-0
            z-10
          "
        >
          <Image
            src="/images/montagne.jpg"
            alt="Montagne"
            width={188}
            height={234}
            className="object-cover"
          />
        </div>

        <div
          className="
            absolute inset-0
            flex items-center justify-center
            z-20
          "
        >
          <p className="text-white font-bold font-title text-27px leading-none t px-2">
            {t("subtitle1")}
            <br />
            {t("subtitle2")}
            <br />
            {t("subtitle3")}
          </p>
        </div>
      </section>

      <p className="px-9 text-15px leading-23px font-content pt-4">
        {t("content")}
      </p>

      <div className="flex items-center justify-center mt-5">
        <button className="px-14 py-2 text-white text-20px bg-blue-3 font-content font-semibold">
          {t("circuits_button")}
        </button>
      </div>
      <section className="flex flex-col mt-8 px-4 gap-4 max-w-md mx-auto">
        <Card tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
        <Card
            tourKey="calanquesPiana"
            imageSrc="/images/calanques-piana.jpg"
          />
                    <Card
            tourKey="scandolaGirolata"
            imageSrc="/images/scandola-girolata.jpg"
          />
      </section>
    </main>
  );
}
