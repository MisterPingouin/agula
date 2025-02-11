"use client";

import { useScopedI18n } from "../../locales/I18nContext";

export default function CGVPage() {
  const t = useScopedI18n("cgv");

  return (
    <main className="flex flex-col items-center mt-[80px] px-6 lg:px-20 py-4">
        <h1 className="block md:hidden text-center font-subtitle text-30px text-green-2 pb-2">
          {t("title")}
        </h1>
        <h1 className="hidden md:block text-center lg:hidden font-subtitle text-80px text-green-2">
          {t("title")}
        </h1>
        <h1 className="hidden lg:block font-subtitle text-80px text-green-2">
          {t("title")}
        </h1>

      <section className="max-w-[900px] text-center font-content text-13px lg:text-18px leading-6 text-black space-y-4">
        {t("articles").map((article, index) => (
          <div key={index} className="space-y-4">
            <h2 className="font-bold text-17px lg:text-25px text-black">{article.title}</h2>
            {article.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
