"use client"

import { useScopedI18n } from "./../../locales/I18nContext";
import Card from "./../components/Cards/Card"; 



export default function Heart() {
    const t = useScopedI18n("heart");
    
    return (
        <section className="flex flex-col justify-center items-center leading-tight px-6 mb-6 lg:hidden">
            <h1 className="font-subtitle text-50px text-green-2">{t("title")}</h1>
            <p className="font-title font-bold text-25px">{t("subtitle")}</p>
            <p className="mt-4 font-content text-15px text-center leading-23px">{t("content1")}</p>
            <p className="font-content text-15px text-center leading-23px">{t("content2")}</p>
            <p className="font-content text-15px text-center leading-23px">{t("content3")}</p>
            <p className="font-content text-15px text-center leading-23px mb-6">{t("content4")}</p>
            <div className="md:flex items-center justify-center">
            <Card tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
            </div>
        </section>
);
}