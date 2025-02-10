"use client";

import { useScopedI18n } from "./../../locales/I18nContext";

export default function MentionsLegalesPage() {
  const t = useScopedI18n("mentions_legales");

  return (
    <main className="flex flex-col items-center text-center text-black mt-[80px] py-4">
        <h1 className="block md:hidden font-subtitle text-50px text-green-2">
          {t("title")}
        </h1>
        <h1 className="hidden md:block lg:hidden font-subtitle text-80px text-green-2">
          {t("title")}
        </h1>
        <h1 className="hidden lg:block font-subtitle text-80px text-green-2">
          {t("title")}
        </h1>
        {/* Sous-titre */}
        <p className="block md:hidden font-content font-bold text-13px text-center max-w-[900px] mb-6 mx-4 mt-4">
          {t("intro")}
        </p>
        <p className="hidden md:block lg:hidden font-content font-bold text-20px text-center max-w-[900px] mb-6 mx-4">
          {t("intro")}
        </p>
        <p className="hidden lg:block font-content font-bold text-25px text-center md:w-[1100px] mb-6 mx-4">
          {t("intro")}
        </p>


      <section className="flex flex-col items-center gap-14 w-full px-6 py-8 md:px-20">
        <div>
          <h2 className="font-content text-30px text-green-2 mb-4">{t("editor_title")}</h2>
          <p className="font-content text-15px">{t("editor_content")}</p>
        </div>
        <div>
          <h2 className="font-content text-30px text-green-2 mb-4">{t("realisation_title")}</h2>
          <p className="font-content text-15px">{t("realisation_content")}</p>
        </div>
        <div>
          <h2 className="font-content text-30px text-green-2 mb-4">{t("hosting_title")}</h2>
          <p className="font-content text-15px">{t("hosting_content")}</p>
        </div>
        <div>
          <h2 className="font-content text-30px text-green-2 mb-4">{t("copyright_title")}</h2>
          <p className="font-content text-15px">{t("copyright_content")}</p>
        </div>
        <div>
          <p className="font-content text-15px">{t("design")}</p>
          <p className="font-content text-15px">{t("web")}</p>
        </div>
        <div>
          <h2 className="font-content text-30px text-green-2 mb-4">{t("privacy_title")}</h2>
          <p className="font-content text-15px">{t("privacy_content")}</p>
        </div>
      </section>
    </main>
  );
}
