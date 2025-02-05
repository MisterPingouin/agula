"use client";

import { useEffect, useState } from "react";
import { useScopedI18n } from "./../../../locales/I18nContext";
import Image from "next/image";
import Link from "next/link";
import Card from "./../../components/Cards/Card";
import VideoLagula from "../../components/VideoLagula";
import GrandTourSunset from "../../components/Reservation/GrandTourSunset";
import useLocalLink from "./../../hooks/useLocalLink";

export default function GrandTourSunsetPage({ params }) {
  const t = useScopedI18n("grandTour");
  const t1 = useScopedI18n("sunset");
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
      <Image
        src="/images/grandtour1.webp"
        alt="Grand Tour"
        width={428}
        height={440}
        className="w-full object-cover md:hidden"
        priority
      />
      <Image
        src="/images/grandtour1desktop.webp"
        alt="Grand Tour Desktop"
        width={428}
        height={440}
        className="w-full object-cover hidden md:block"
        priority
      />
      {/* Titre et description */}
      <div className="flex flex-col justify-center gap-2 mt-6 items-center px-8">
        <h1 className="font-subtitle text-50px md:text-80px text-green-2 leading-none">
          {t("title")}
        </h1>
        <p className="font-content font-bold text-15px leading-tight md:leading-none text-center mt-2">
          {t("subtitle1")}
        </p>
        <p className="font-content text-15px leading-tight font-bold text-center ">
          {t("subtitle2")}
        </p>
      </div>
      <div className="font-content text-14px font-light flex px-10 items-center my-5">
        <img src="/images/euro.svg" alt="" className="w-3 h-3 mr-2" />
        <p className="pr-20">{t("price")}</p>
        <img src="/images/time.svg" alt="" className="w-3 h-3 mr-2" />
        <p>{t("time")}</p>
      </div>
      <div className="w-10/12 h-[0.5px] md:h-[0.75px] md:my-4 bg-[#707070] mb-6"></div>
      <div className="flex flex-col justify-center items-center px-8">
        <Image
          src="/images/illustration.jpg"
          alt="map"
          width={356}
          height={531}
          className="object-cover w-full h-auto md:hidden"
          priority
        />
        <Image
          src="/images/illustrationdesktop.jpg"
          alt="map"
          width={440}
          height={531}
          className="hidden md:block mt-6 object-cover h-auto"
          priority
        />
        <p className="font-content text-15px leading-25px text-center md:w-[880px] px-8 my-4">
          {t("content")}
        </p>
        <Link href={localLink("/reservation")} className="cursor-pointer">
          <button className="px-14 md:px-16 md:my-4 py-2 text-white text-20px mt-2 bg-blue-3 font-content font-semibold">
            {t("book")}
          </button>
        </Link>
        {/* Mobile */}
        <Image
          src="/images/grandtour2.jpg"
          alt="Grand Tour 2"
          width={352}
          height={426}
          className="h-auto w-full mt-6 md:hidden"
          priority
        />
        <p className="font-title self-start font-bold text-25px leading-none mt-8 md:hidden">
          {t("subtitle3")}
        </p>
        <p className="font-title self-start font-bold leading-tight text-25px md:hidden">
          {t("subtitle4")}
        </p>
        <p className="font-content text-15px leading-23px self-start mt-6 md:hidden">
          {t("content2")}
        </p>
        <p className="font-content text-15px leading-23px self-start md:hidden">
          {t("content3")}
        </p>
        <p className="font-content text-15px leading-23px self-start md:hidden">
          {t("content4")}
        </p>
        <Image
          src="/images/dive.svg"
          alt="dive"
          width={51}
          height={62}
          className="object-cover h-auto mt-10 md:hidden"
          priority
        />
        <p className="font-subtitle text-25px text-center mt-2 md:hidden">
          {t("content5")}
        </p>
        {/* Desktop */}
        <div className="hidden md:block w-10/12 h-[0.5px] md:h-[0.75px] md:my-4 bg-[#707070] mb-6"></div>
        <div className="hidden md:flex justify-center gap-40 items-center w-10/12 mt-6">
          <Image
            src="/images/grandtour2desktop.jpg"
            alt="Grand Tour 2"
            width={393}
            height={502}
            className="h-auto"
            priority
          />
          <div className="flex flex-col w-[560px]">
            <p className="font-title font-bold text-35px leading-none mt-8">
              {t("subtitle3")}
            </p>
            <p className="font-title font-bold leading-tight text-35px">
              {t("subtitle4")}
            </p>
            <p className="font-content text-15px leading-23px mt-6">
              {t("content2")}
            </p>
            <p className="font-content text-15px leading-23px">
              {t("content3")}
            </p>
            <p className="font-content text-15px leading-23px">
              {t("content4")}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="/images/dive.svg"
                alt="dive"
                width={51}
                height={62}
                className="object-cover h-auto"
                priority
              />
              <p className="font-subtitle text-25px">{t("content5")}</p>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <Image
          src="/images/grandtour3.jpg"
          alt="Grand Tour 3"
          width={352}
          height={426}
          className="h-auto w-full mt-6 md:hidden"
          priority
        />
        <p className="font-title self-start font-bold text-25px leading-none mt-8 md:hidden">
          {t("subtitle5")}
        </p>
        <p className="font-content text-15px leading-23px self-start mt-6 md:hidden">
          {t("content6")}
        </p>
        <Image
          src="/images/ancre2.svg"
          alt="ancre"
          width={50}
          height={62}
          className="object-cover h-auto mt-10 md:hidden"
          priority
        />
        <p className="font-subtitle text-25px text-center mt-2 md:hidden">
          {t("content7")}
        </p>
        {/* Desktop */}
        <div className="hidden md:flex justify-center items-center gap-40 w-10/12 mt-6">
          <div className="flex flex-col w-[485px]">
            <p className="font-title self-start font-bold text-35px leading-none mt-8">
              {t("subtitle5")}
            </p>
            <p className="font-content text-15px leading-23px self-start mt-6">
              {t("content6")}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="/images/ancre2.svg"
                alt="ancre"
                width={50}
                height={62}
                className="object-cover h-auto"
                priority
              />
              <p className="font-subtitle text-25px mt-2">{t("content7")}</p>
            </div>
          </div>
          <Image
            src="/images/grandtour3desktop.jpg"
            alt="Grand Tour 3"
            width={393}
            height={502}
            className="h-auto self-end"
            priority
          />
        </div>
        {/* Both */}
        <p className="font-title text-center text-25px md:text-35px leading-29px md:leading-50px md:w-[1100px] my-6 md:my-10">
          {t("content8")}
        </p>
        {/* Mobile */}
        <Image
          src="/images/grandtour4.jpg"
          alt="Grand Tour 4"
          width={352}
          height={427}
          className="h-auto w-full mt-2 md:hidden"
          priority
        />
        <p className="font-title self-start font-bold text-25px leading-none mt-8 md:hidden">
          {t("subtitle6")}
        </p>
        <p className="font-title self-start font-bold text-25px leading-tight md:hidden">
          {t("subtitle7")}
        </p>
        <p className="font-content text-15px leading-23px self-start mt-6 md:hidden">
          {t("content9")}
        </p>
        {/* Desktop */}
        <div className="hidden md:flex justify-between gap-40 items-center w-10/12 my-6">
          <Image
            src="/images/grandtour4desktop.jpg"
            alt="Grand Tour 4"
            width={393}
            height={502}
            className="h-auto  mt-2"
            priority
          />
          <div className="flex flex-col w-[700px]">
            <p className="font-title  font-bold text-35px leading-none mt-8">
              {t("subtitle6")}
            </p>
            <p className="font-title  font-bold text-35px leading-tight">
              {t("subtitle7")}
            </p>
            <p className="font-content text-15px leading-23px mt-6">
              {t("content9")}
            </p>
          </div>
        </div>
        {/* Mobile Sunset */}
        <Image
          src="/images/sunset.jpg"
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
          {t1("content")}
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
        {/* Desktop Sunset */}
        <div className="hidden md:flex justify-center items-center gap-40 w-10/12 mt-6">
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
          <Image
            src="/images/sunset.jpg"
            alt="Sunset"
            width={393}
            height={502}
            className="h-auto self-end"
            priority
          />
        </div>
        {/* Both */}
        <div className="w-full">
          <GrandTourSunset locale={locale} />
        </div>
        <h4 className="text-green font-bold font-title text-25px mt-10 md:self-start md:text-35px md:mt-12">
          {t("subtitle8")}
        </h4>
        <div className="flex flex-col gap-4 my-6 md:flex-row">
          <Card tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
          <Card
            tourKey="calanquesPiana"
            imageSrc="/images/calanques-piana.jpg"
          />
          <Card
            tourKey="scandolaGirolata"
            imageSrc="/images/scandola-girolata.jpg"
          />
        </div>
      </div>
      <VideoLagula />
    </main>
  );
}
