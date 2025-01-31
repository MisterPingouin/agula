"use client"

import Header from "./components/Header/Header";
import HomeSection from "./sections/HomeSection";
import { useScopedI18n } from "./../locales/I18nContext";


export default function HomePage() {
  const t = useScopedI18n("page");

  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <section className="p-6 text-gray-900">
          <h2 className="text-2xl font-title">{t('title')}</h2>
          <p className="mt-4 leading-28px font-title font-light">
            {t('content')}
          </p>
        </section>
      </main>
    </>
  );
}