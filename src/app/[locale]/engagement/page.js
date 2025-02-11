"use client";

import { useScopedI18n } from "../../locales/I18nContext";
import Image from "next/image"; // Best practice Next.js pour les images

export default function EngagementPage() {
  const t = useScopedI18n("engagement");

  return (
    <main className="flex flex-col items-center mt-[80px] px-6 lg:px-20 py-4">
      {/* Titres responsive */}
      <h1 className="block md:hidden text-center font-subtitle text-50px text-green-2 pb-2">
        {t("title")}
      </h1>
      <h1 className="hidden md:block lg:hidden font-subtitle text-80px text-green-2">
        {t("title")}
      </h1>
      <h1 className="hidden lg:block font-subtitle text-80px text-green-2">
        {t("title")}
      </h1>

      {/* Texte d'intro */}
      <section className="font-content text-15px font-bold lg:text-25px text-center max-w-[1100px] leading-tight  text-black space-y-8 lg:mt-4">
        {t("intro").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

        {/* Version mobile */}
        <p className="font-title text-25px leading-29px text-center px-3 py-6 md:hidden">
          {t("title2")}
        </p>
        {/* Version tablette */}
        <p className="font-title hidden md:block lg:hidden text-center px-3 py-6 text-30px leading-40px mt-4">
          {t("title2")}
        </p>
        {/* Version desktop */}
        <p className="font-title hidden lg:block text-center px-3 py-6 text-35px leading-50px mt-6  max-w-[1100px]">
          {t("title2")}
        </p>

      {/* Titre association + logo */}
      <section className="max-w-[900px] text-center font-content text-13px lg:text-18px leading-6 text-black mt-8 space-y-4">
        <h2 className="text-17px lg:text-25px font-bold">
          {t("associationTitle")}
        </h2>
        <div className="w-full flex justify-center my-2">
          <Image
            src="/images/batelier.jpg"
            alt="Logo Bateliers de Scandola"
            width={224}
            height={168}
            className="object-contain"
          />
        </div>
        <h3 className="text-15px lg:text-25px font-title font-bold">
          {t("charteTitle")}
        </h3>
        <p className="leading-23px text-15px">{t("charteSubtitle")}</p>
      </section>
      <div className="mt-4 mb-1">
      <Image
                src="/images/arrowgreen.svg"
                alt="Flèche verte"
                width={34}
                height={31}
              />
              </div>

      {/* Articles de la charte */}
      <section className="max-w-[686px] font-content text-13px lg:text-18px leading-6 text-black mt-6 space-y-8">
        {t("articles").map((article, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <h4 className="text-center text-15px text-green-2 font-bold">
                {article.title}
              </h4>
            </div>
            {article.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-center text-15px leading-23px">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>
      <div className="max-w-[900px] text-15px font-content mt-10 text-center">
      <h3 className="lg:text-25px font-title font-bold">
          {t("naturaTitle")}
        </h3>
        <p className="mt-2">{t("naturaSubtitle")}</p>
        <p className="leading-none">{t("naturaListIntro")}</p>
      </div>
      <div className="mt-8">
      <Image
                src="/images/arrowgreen.svg"
                alt="Flèche verte"
                width={34}
                height={31}
              />
              </div>
      {/* Partie NATURA 2000 */}
      <section className="max-w-[900px] font-content text-15px leading-6 text-black space-y-6">

        {/* Sous-parties (Portée générale, Fonds marins, etc.) */}
        {t("naturaSections").map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            <h4 className="font-bold text-center text-green-2 mt-6">
              {section.sectionTitle}
            </h4>
            {section.points.map((point, pointIndex) => (
              <p key={pointIndex} className="text-center">
                {point}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Pour plus d'informations */}
      <section className="max-w-[900px] font-content text-13px lg:text-18px leading-6 text-black mt-10 space-y-4 text-center">
        <h3 className="font-bold lg:text-25px font-title">
          {t("infosTitle")}
        </h3>
      </section>
      <div className="max-w-[900px] text-15px font-content mt-2 text-center">
      <p>{t("infosContent")}</p>
</div>
<div className="mt-8">
      <Image
                src="/images/arrowgreen.svg"
                alt="Flèche verte"
                width={34}
                height={31}
              />
              </div>
              <div className="max-w-[900px] text-15px text-green-2 font-content mt-4 text-center">
      <p>{t("infosContent2")}</p>
</div>
<div className="max-w-[900px] text-15px font-content mt-10 text-center">
      <p>{t("infosContent3")}</p>
</div>
<div className="mt-4">
      <Image
                src="/images/arrowgreen.svg"
                alt="Flèche verte"
                width={34}
                height={31}
              />
              </div>
              <div className="max-w-[900px] text-15px text-green-2 font-content mt-4 text-center">
  <a href="https://www.oec.corsica/attachment/207978/

">{t("infosContent4")}</a>
</div>

    </main>
  );
}
