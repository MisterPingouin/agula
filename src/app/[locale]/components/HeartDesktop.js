"use client";

import { useScopedI18n } from "./../../locales/I18nContext";
import Image from "next/image";

export default function HeartDesktop() {
    const t = useScopedI18n("heart");

    return (
        <section className="hidden lg:flex flex-col justify-center items-center leading-tight mb-6 relative">
            <h1 className="font-subtitle text-100px text-green-2 z-10">{t("title")}</h1>
            <p className="font-title font-bold text-35px z-10">{t("subtitle")}</p>
            <p className="mt-4 font-content text-15px text-center leading-23px z-10">{t("content1")}</p>
            <p className="font-content text-15px text-center leading-23px z-10">{t("content2")}</p>
            <p className="font-content text-15px text-center leading-23px max-w-[1000px] z-10">{t("content3")}</p>
            <p className="font-content text-15px text-center leading-23px mb-6 z-10">{t("content4")}</p>
            
            <div className="flex justify-between items-center w-[1060px] mt-10 z-10">
                <button className="bg-blue-3 text-white px-16 py-3 font-semibold text-20px hidden lg:block">
                    {t("book")}
                </button>
                <div className="grid grid-cols-4 gap-10">
                    <div>
                        <span className="text-22px font-semibold font-content">80€</span>
                        <div className="text-sm text-gray-600">{t("adult")}</div>
                    </div>
                    <div>
                        <span className="text-22px font-semibold font-content">70€</span>
                        <div className="text-sm text-gray-600">{t("child")}</div>
                    </div>
                    <div>
                        <span className="text-22px font-semibold font-content">12</span>
                        <div className="text-sm text-gray-600">{t("space")}</div>
                    </div>
                    <div>
                        <span className="text-22px font-semibold font-content">3H45</span>
                        <div className="text-sm text-gray-600">{t("time")}</div>
                    </div>
                </div>
            </div>

            <div className="relative w-full mt-10 flex justify-center items-center">
                {/* Tracé vert */}
                <Image
                    src="/images/tracegreendesktop.svg"
                    alt="Tracé vert en fond"
                    width={1200}
                    height={500}
                    className="absolute w-full h-auto mt-40 -z-10"
                    priority
                />

                {/* Images */}
                <div className="flex gap-4 z-10 w-[1060px]">
                    <div className="relative w-[393px] h-[502px]">
                        <Image
                            src="/images/heart1.webp"
                            alt="Calanques"
                            width={393}
                            height={502}
                            style={{ height: '502px', width: 'auto' }}
                            />
                    </div>
                    <div className="relative w-[667px] h-[328px]">
                        <Image
                            src="/images/heart2.webp"
                            alt="Rochers"
                            width={667}
                            height={328}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
