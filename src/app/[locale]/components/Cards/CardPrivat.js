"use client";

import Image from "next/image";
import { useScopedI18n } from "../../../locales/I18nContext";

export default function CardPrivat({ tourKey, imageSrc }) {
  const t = useScopedI18n("cardsprivat");
  

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
      <p className="text-14px mb-2 font-content leading-tight flex items-center ">
        <img src="/images/ancre.svg" alt="" className="w-3 h-4 mr-2" />
        {t(`${tourKey}.description`)}
      </p>

      {/* Prix (icône euro) */}
      <p className="text-14px mb-2 font-content font-bold leading-tight flex items-center">
        <img src="/images/euro.svg" alt="" className="w-3 h-3 mr-2" />
        {t(`${tourKey}.price`)}
      </p>
    </article>
  );
}
