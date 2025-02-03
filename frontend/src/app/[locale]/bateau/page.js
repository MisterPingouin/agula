"use client";

import { useScopedI18n } from "./../../locales/I18nContext";
import Image from "next/image";

export default function BateauPage() {
  const t = useScopedI18n("boat");

  return (
    <main className="flex flex-col justify-center items-center text-black mt-[86px] py-2 px-6">
      <h1 className="font-subtitle text-50px text-green">{t("title")}</h1>
      <h2 className="font-content text-center text-15px font-bold leading-23px pb-6">
        {t("subtitle")}
      </h2>
      <Image
        src="/images/boat5.jpg"
        alt="Bateau Sacha"
        width={352}
        height={426}
        priority
      />
      <h3 className="font-title font-bold text-25px self-start py-4 px-3">
        {t("subtitle2")}
      </h3>
      <p className="font-content text-15px leading-23px pb-8 px-3">{t("content")}</p>
      <Image
        src="/images/ancre2.svg"
        alt="Bateau Sacha"
        width={50}
        height={56}
      />
      <p className="font-subtitle text-25px leading-29px py-6 text-center">{t("content2")}</p>
      <Image
        src="/images/boat3.jpg"
        alt="Bateau"
        width={356}
        height={427}
      />
        <h4 className="font-title font-bold text-25px self-start py-4 px-3">
        {t("subtitle3")}
      </h4>
      <p className="font-content text-15px leading-23px pb-8 px-3">{t("content3")}</p>
      <Image
        src="/images/dive2.svg"
        alt="Scuba"
        width={51}
        height={62}
        className="w-auto h-auto"
      />
      <p className="font-subtitle text-25px leading-29px py-6 text-center">{t("content4")}</p>
      <p className="font-title text-25px leading-29px text-center px-3 py-6">{t("confort")}</p>

    </main>
  );
}
