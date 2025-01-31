"use client";

import Header from "./components/Header/Header";
import HomeSection from "./sections/HomeSection";
import { useScopedI18n } from "./../locales/I18nContext";
import Image from "next/image";

export default function HomePage() {
  const t = useScopedI18n("page");

  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <section className="relative flex flex-col items-center mt-8">
          {/* Ligne SVG en arrière-plan */}
          <Image 
            src="/images/Tracebleu.svg" 
            alt="Ligne décorative" 
            width={600} 
            height={100} 
            className="absolute top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto z-0"
          />

          {/* Titre centré avec la ligne derrière */}
          <h2 className="relative z-10 mt-8 text-4xl md:text-5xl lg:text-6xl font-subtitle text-blue text-center">
            {t('title')}
          </h2>

          {/* Contenu */}
          <p className="relative z-10 mt-4 leading-7 md:leading-8 font-title font-light">
            {t('content')}
          </p>
        </section>
      </main>
    </>
  );
}
