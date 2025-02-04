"use client";

import { useScopedI18n } from "./../../locales/I18nContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EquipePage() {
  const t = useScopedI18n("equipe");
  const [imagePaths, setImagePaths] = useState({});

  useEffect(() => {
    // Récupérer les chemins des images depuis l'API ou un fichier JSON
    const fetchImagePaths = async () => {
      try {
        const response = await fetch("/api/get-image-paths");
        if (response.ok) {
          const data = await response.json();
          setImagePaths(data);
        } else {
          console.error("Erreur lors de la récupération des chemins d'images");
        }
      } catch (error) {
        console.error("Erreur de connexion", error);
      }
    };

    fetchImagePaths();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center text-black mt-[80px] md:mt-[99px] md:hidden">
      <div className="flex flex-col justify-center gap-2 items-center px-10">
        <h1 className="font-subtitle text-50px md:text-80px text-orange">{t("title")}</h1>
        <p className="font-content font-bold text-13px md:text-15px leading-23px text-center max-w-[900px]">
          {t("subtitle")}
        </p>
        <Image
          src={imagePaths.jeanBaptisteImage || "/images/jeanbaptiste.webp"}
          alt="Jean Baptiste"
          width={352}
          height={426}
          className="object-cover h-auto"
          priority
        />
        <h2 className="font-title text-25px font-bold self-start">{t("subtitle1")}</h2>
        <p className="font-content text-15px self-start leading-23px mt-2">{t("content")}</p>
        <Image
          src="/images/arrowdownblack.svg"
          alt="arrow down black"
          width={35}
          height={31}
          className="object-cover h-auto my-4"
          priority
        />
        <p className="font-title text-25px text-center leading-29px mb-6">{t("content2")}</p>
      </div>
      <div className="flex flex-col bg-green-4 w-full gap-2 px-10 py-8 text-white">
        <Image
          src={imagePaths.geraldImage || "/images/gerald.webp"}
          alt="Gerald"
          width={234}
          height={299}
          className="object-cover h-auto"
          priority
        />
        <h3 className="font-title text-35px font-bold">{t("subtitle2")}</h3>
        <p className="font-content text-15px leading-23px mb-8">{t("content3")}</p>
        <Image
          src={imagePaths.claireImage || "/images/claire.webp"}
          alt="Claire"
          width={234}
          height={299}
          className="object-cover h-auto"
          priority
        />
        <h3 className="font-title text-35px font-bold">{t("subtitle3")}</h3>
        <p className="font-content text-15px leading-23px">{t("content4")}</p>
      </div>
      <Image
        src="/images/fish.svg"
        alt="fish"
        width={68}
        height={46}
        className="object-cover h-auto my-4 mt-12"
        priority
      />
      <p className="font-title text-center text-25px leading-29px px-10 mb-12">{t("content5")}</p>
    </main>
  );
}
