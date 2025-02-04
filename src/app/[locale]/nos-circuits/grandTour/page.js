"use client";

import { useScopedI18n } from "./../../../locales/I18nContext";
import Image from "next/image";

export default function GrandTourPage() {
  const t = useScopedI18n("grandTour");

  return (
    <main className="flex flex-col justify-center items-center text-black mt-[86px] md:mt-[99px]">
              <Image
                src="/images/grandtour1.webp"
                alt="Grand Tour"
                width={428}
                height={440}
                className="w-full object-cover"
                priority
              />    
      {/* Titre et description */}
      <div className="flex flex-col justify-center gap-2 mt-6 items-center px-8">
        <h1 className="font-subtitle text-50px md:text-80px text-green-2 leading-none">{t("title")}</h1>
        <p className="font-content font-bold text-15px leading-tight text-center mt-2">
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
      <div className="w-10/12 md:w-10/12 h-[0.5px] md:h-[0.75px] md:my-4 bg-[#707070] mb-6"></div>
    </main>
  );
}
