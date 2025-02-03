"use client";

import { useScopedI18n } from "./../../locales/I18nContext";
import Image from "next/image";

export default function BateauPage() {
  const t = useScopedI18n("boat");

  return (
    <main className="flex flex-col justify-center items-center text-black mt-[86px] md:mt-[99px] py-6 px-6 md:px-0">
        <Image
          src="/images/boat4.webp"
          alt="Bateau Sacha"
          width={1280}
          height={440}
          className="w-full object-cover hidden md:block"
          priority
        />      
        <div className="w-full max-w-screen-lg mx-auto">
        <h1 className="font-subtitle text-50px md:text-80px md:mt-4 text-green text-center">
          {t("title")}
        </h1>
        <h2 className="font-content text-center text-15px font-bold leading-23px pb-6 md:text-25px md:px-28 md:leading-normal">
          {t("subtitle")}
        </h2>

        {/* Mobile */}
        <Image
          src="/images/boat5.jpg"
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
            height={56}
            className="w-auto h-auto"
          />
        </div>
        <p className="font-subtitle text-25px leading-29px py-6 text-center md:hidden">
          {t("content2")}
        </p>

        {/* Desktop */}
        <div className="hidden md:flex justify-center items-center gap-8 mt-8">
          <Image
            src="/images/boat5.jpg"
            alt="Bateau Sacha"
            width={352}
            height={426}
            style={{ height: '426px', width: 'auto' }}
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
                alt="Bateau Sacha"
                width={50}
                height={56}
              />
              <p className="font-subtitle text-25px leading-29px w-4/6">
                {t("content2")}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile */}
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

        {/* Desktop */}
        <div className="hidden md:flex gap-8 ">
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
                alt="Scuba"
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
            alt="Bateau"
            width={356}
            height={427}
            style={{ height: '427px', width: 'auto' }}
          />
        </div>

        <p className="font-title text-25px leading-29px text-center px-3 py-6 md:text-35px md:leading-50px md:mt-6 ">
          {t("confort")}
        </p>
      </div>
    </main>
  );
}
