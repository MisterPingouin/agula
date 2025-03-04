"use client";

import { useEffect, useState } from "react";
import { useScopedI18n } from "./../../../locales/I18nContext";
import Image from "next/image";
import Link from "next/link";
import Card from "./../../components/Cards/Card";
import VideoLagula from "../../components/VideoLagula";
import Calanque from "../../components/Reservation/CalanqueSunset";
import useLocalLink from "./../../hooks/useLocalLink";

export default function CalanquePage({ params }) {
  const t1 = useScopedI18n("sunset");
  const t = useScopedI18n("calanque");
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setLocale(resolvedParams.locale || "fr");
    }
    fetchParams();
  }, [params]);

  const localLink = useLocalLink();

  return (
    <main className="flex flex-col justify-center items-center text-black mt-[80px]">
      {/* Header Image */}
      {/* Mobile */}
      <Image
        src="/images/calanque.webp"
        alt="Calanque"
        width={428}
        height={440}
        className="w-full object-cover md:hidden"
        priority
      />
      {/* Tablet */}
      <Image
        src="/images/calanquedesktop.webp"
        alt="Calanque tablette"
        width={768}
        height={440}
        className="w-full object-cover hidden md:block lg:hidden"
        priority
      />
      {/* Desktop */}
      <Image
        src="/images/calanquedesktop.webp"
        alt="Calanque Desktop"
        width={1280}
        height={440}
        className="w-full object-cover hidden lg:block"
        priority
      />

      {/* Titre et description */}
      <div className="flex flex-col justify-center gap-2 mt-6 items-center px-8">
        <h1 className="font-subtitle text-50px md:text-70px lg:text-80px text-green-2 leading-none text-center">
          {t1("calanque")}
        </h1>
        <p className="font-content font-bold text-15px leading-tight md:leading-tight lg:leading-none text-center mt-2">
          {t("subtitle1")}
        </p>
        <p className="font-content text-15px leading-tight font-bold text-center lg:max-w-[1000px]">
          {t1("calanquesunsetprogram")}
        </p>
      </div>

      {/* Prix et durée */}
      <div className="font-content text-14px font-light flex px-10 items-center my-5">
        <img src="/images/euro.svg" alt="" className="w-3 h-3 mr-2" />
        <p className="pr-20">{t("price")}</p>
        <img src="/images/time.svg" alt="" className="w-3 h-3 mr-2" />
        <p>{t("time")}</p>
      </div>

      {/* Séparateur */}
      <div className="w-10/12 h-[0.5px] md:h-[0.6px] lg:h-[0.75px] md:my-3 lg:my-4 bg-[#707070] mb-6"></div>

      <div className="flex flex-col justify-center items-center px-8">
        {/* Illustration de la carte */}
        {/* Mobile */}
               <Image
                 src="/images/circuitcalanque.jpg"
                 alt="map"
                 width={356}
                 height={531}
                 className="object-cover w-full h-auto md:hidden"
                 priority
               />
               {/* Tablet */}
               <Image
                 src="/images/circuitcalanque.jpg"
                 alt="map Tablet"
                 width={440}
                 height={531}
                 className="hidden md:block lg:hidden mt-6 object-cover h-auto"
                 priority
               />
               {/* Desktop */}
               <Image
                 src="/images/circuitcalanque.jpg"
                 alt="map Desktop"
                 width={844}
                 height={531}
                 className="hidden lg:block mt-6 object-cover h-auto"
                 priority
               />

        <p className="font-content text-15px leading-25px text-center w-full md:w-[700px] lg:w-[880px] px-8 my-4">
          {t1("calanquesunsetparcour")}
        </p>

        <Link href={localLink("/reservation")} className="cursor-pointer">
          <button className="px-14 md:px-15 lg:px-16 py-2 text-white text-20px mt-2 md:my-3 lg:my-4 bg-blue-3 font-content font-semibold">
            {t("book")}
          </button>
        </Link>

        {/* Section Calanque */}
        {/* Mobile */}
        <Image
          src="/images/calanque1.webp"
          alt="Calanque"
          width={352}
          height={426}
          className="h-auto w-full mt-6 md:hidden"
          priority
        />
        <p className="font-title self-start font-bold text-25px leading-none mt-8 md:hidden">
          {t("subtitle3")}
        </p>

        <p className="font-content text-15px leading-23px self-start mt-6 md:hidden">
          {t("content2")}
        </p>

        {/* Tablet Version Calanque */}
        <div className="hidden lg:hidden md:block w-10/12 h-[0.5px] md:h-[0.6px] md:my-3 bg-[#707070] mb-6"></div>
        <div className="hidden lg:hidden md:flex flex-col justify-center gap-20 items-center w-10/12 mt-6">
          <Image
            src="/images/calanque1.webp"
            alt="Calanque Tablet"
            width={393}
            height={502}
            className="h-auto"
            priority
          />
          <div className="flex flex-col w-full items-center">
            <p className="font-title font-bold text-30px leading-none mt-8 text-center">
              {t("subtitle3")}
            </p>
            <p className="font-content text-15px leading-23px mt-6 text-center">
              {t("content2")}
            </p>
          </div>
        </div>

        {/* Desktop Version Calanque */}
        <div className="hidden lg:flex justify-center gap-40 items-center w-10/12 mt-6">
          <Image
            src="/images/calanque1.webp"
            alt="Calanque Desktop"
            width={393}
            height={502}
            className="h-auto"
            priority
          />
          <div className="flex flex-col w-[560px]">
            <p className="font-title font-bold text-35px leading-none mt-8">
              {t("subtitle3")}
            </p>
            <p className="font-content text-15px leading-23px mt-6">
              {t("content2")}
            </p>
          </div>
        </div>

        {/* Section Calanque */}
        {/* Mobile */}
        <Image
          src="/images/calanque2.webp"
          alt="Calanque"
          width={352}
          height={426}
          className="h-auto w-full mt-6 md:hidden"
          priority
        />
        <p className="font-title self-start font-bold text-25px leading-none mt-8 md:hidden">
          {t("subtitle4")}
        </p>
        <p className="font-content text-15px leading-23px self-start mt-6 md:hidden">
          {t("content4")}
        </p>

        {/* Tablet Version Calanque */}
        <div className="hidden lg:hidden md:flex flex-col justify-center items-center gap-20 w-10/12 mt-6">
          <div className="flex flex-col w-full items-center">
            <p className="font-title  font-bold text-30px leading-none mt-8 text-center">
              {t("subtitle4")}
            </p>
            <p className="font-content text-15px leading-23px self-start mt-6 text-center">
              {t("content4")}
            </p>
          </div>
          <Image
            src="/images/calanque2.webp"
            alt="Calanque Tablet"
            width={393}
            height={502}
            className="h-auto"
            priority
          />
        </div>

        {/* Desktop Version Calanque */}
        <div className="hidden lg:flex justify-center items-center gap-40 w-10/12 mt-6">
          <div className="flex flex-col w-[485px]">
            <p className="font-title self-start font-bold text-35px leading-none mt-8">
              {t("subtitle4")}
            </p>
            <p className="font-content text-15px leading-23px self-start mt-6">
              {t("content4")}
            </p>
          </div>
          <Image
            src="/images/calanque2.webp"
            alt="calanque2 Desktop"
            width={393}
            height={502}
            className="h-auto self-end"
            priority
          />
        </div>
 {/* Section Sunset */}
                {/* Mobile Sunset */}
                <Image
                  src="/images/sunset.webp"
                  alt="Sunset"
                  width={352}
                  height={426}
                  className="h-auto w-full mt-6 md:hidden"
                  priority
                />
                <p className="font-title self-start font-bold text-25px leading-none mt-8 md:hidden">
                  {t1("title1")}
                </p>
                <p className="font-title self-start font-bold leading-tight text-25px md:hidden">
                  {t1("title2")}
                </p>
                <p className="font-content text-15px leading-23px self-start mt-6 md:hidden">
                  {t1("content3")}
                </p>
                <Image
                  src="/images/sunset.svg"
                  alt="sunset"
                  width={51}
                  height={62}
                  className="object-cover mt-10 md:hidden"
                  style={{ height: "62px", width: "auto" }}
                  priority
                />
                <p className="font-subtitle text-25px text-center mt-4 md:hidden">
                  {t("content2")}
                </p>
        
                {/* Tablet Version Sunset */}
                <div className="hidden lg:hidden md:flex flex-col justify-center items-center gap-20 w-10/12 mt-6">
                  <div className="flex flex-col items-center">
                    <p className="font-title self-start font-bold text-30px leading-none mt-8 text-center">
                      {t1("title1")}
                    </p>
                    <p className="font-title self-start font-bold text-30px leading-tight text-center">
                      {t1("title2")}
                    </p>
                    <p className="font-content text-15px leading-23px self-start mt-6 text-center">
                      {t1("content")}
                    </p>
                    <div className="flex items-center gap-4 mt-8">
                      <Image
                        src="/images/sunset.svg"
                        alt="sunset"
                        width={91}
                        height={37}
                        className="object-cover h-auto"
                        priority
                      />
                      <p className="font-subtitle leading-none text-25px">{t1("content2")}</p>
                    </div>
                  </div>
                  <Image
                    src="/images/sunset.webp"
                    alt="Sunset Tablet"
                    width={393}
                    height={502}
                    className="h-auto"
                    priority
                  />
                </div>
        
                {/* Desktop Version Sunset */}
                <div className="hidden lg:flex justify-center items-center gap-40 w-10/12 mt-6">
                <Image
                    src="/images/sunset.webp"
                    alt="Sunset Desktop"
                    width={393}
                    height={502}
                    className="h-auto self-end"
                    priority
                  />
                  <div className="flex flex-col w-[485px]">
                    <p className="font-title self-start font-bold text-35px leading-none mt-8">
                      {t1("title1")}
                    </p>
                    <p className="font-title self-start font-bold text-35px leading-tight">
                      {t1("title2")}
                    </p>
                    <p className="font-content text-15px leading-23px self-start mt-6">
                      {t1("content")}
                    </p>
                    <div className="flex items-center gap-4 mt-12">
                      <Image
                        src="/images/sunset.svg"
                        alt="sunset"
                        width={91}
                        height={37}
                        className="object-cover h-auto"
                        priority
                      />
                      <p className="font-subtitle leading-none text-25px">{t1("content2")}</p>
                    </div>
                  </div>
                </div>

        {/* Section Both - Content8 */}
        <p className="font-title text-center text-25px md:text-30px lg:text-35px leading-29px md:leading-40px lg:leading-50px w-full md:w-[600px] lg:w-[1100px] my-6 md:my-8 lg:my-10">
          {t("content5")}
        </p>

        <div className="w-full">
          <Calanque locale={locale} />
        </div>

        <h4 className="text-green font-bold font-title text-25px mt-10 md:text-30px lg:text-35px md:self-start lg:self-start md:mt-12 lg:mt-12">
          {t("subtitle8")}
        </h4>
        <div className="flex flex-col gap-4 my-6 md:flex-row">
          <Card tourKey="grandTour" imageSrc="/images/grandtour.webp" />
          <Card tourKey="calanquesPiana" imageSrc="/images/calanques-piana.webp" />
          <Card tourKey="scandolaGirolata" imageSrc="/images/scandola-girolata.webp" />
        </div>
      </div>
      <VideoLagula />
    </main>
  );
}
