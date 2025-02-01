"use client";

import Image from "next/image";
import { useScopedI18n } from "../../../locales/I18nContext"; ""

export default function Card({ tourKey, imageSrc }) {
  const t = useScopedI18n("cards");

  return (
    <article className="w-full px-4">
      {/* Image principale en haut */}
      <div className="relative w-full mb-3">
        <Image
          src={imageSrc}
          alt={t(`${tourKey}.title`)}
          width={352}
          height={426}
        />
      </div>

      {/* Titre */}
      <h3 className="text-20px font-bold font-title text-green-2 mb-2">
        {t(`${tourKey}.title`)}
      </h3>

      {/* Description (icône ancre) */}
      <p className="text-14px mb-2 font-content leading-tight flex items-center">
        <img src="/images/ancre.svg" alt="" className="w-3 h-4 mr-2" />
        {t(`${tourKey}.description`)}
      </p>

      {/* Prix (icône euro) */}
      <p className="text-14px mb-2 font-content font-bold leading-tight flex items-center">
        <img src="/images/euro.svg" alt="" className="w-3 h-3 mr-2" />
        {t(`${tourKey}.price`)}
      </p>

      {/* Durée (icône time) */}
      <p className="text-14px mb-2 font-content font-light leading-tight flex items-center">
        <img src="/images/time.svg" alt="" className="w-3 h-3 mr-2" />
        {t(`${tourKey}.duration`)}
      </p>

      {/* Boutons d'action */}
      <div className="flex space-x-2">
        <button className="bg-green-2 text-white px-4 py-2 font-semibold text-14px">
          {t("reserveButton")}
        </button>
        <button className="border border-green-2 text-green-2 px-4 py-2 font-semibold text-14px">
          {t("learnMoreButton")}
        </button>
      </div>
    </article>
  );
}
