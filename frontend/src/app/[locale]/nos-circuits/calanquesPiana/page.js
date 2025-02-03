"use client";

import { useScopedI18n } from "./../../../locales/I18nContext";

export default function CalanquesPage() {
  const t = useScopedI18n("grandTour");

  return (
    <main className="text-black">
      <div className="h-[86px]"></div>

      {/* Titre et description */}
      <div className="flex flex-col justify-center gap-2 mt-6 items-center px-8">
        <h1 className="font-subtitle text-50px md:text-80px text-green-2">TEST CAlANQUES</h1>
        <p className="font-content text-13px md:text-15px leading-23px text-center max-w-[900px]">
          {t("content")}
        </p>
      </div>

    </main>
  );
}
