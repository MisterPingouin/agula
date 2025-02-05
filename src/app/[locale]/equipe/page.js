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
    <main className="flex flex-col justify-center items-center text-black mt-[80px]">
      <div className="flex flex-col justify-center gap-2 items-center px-10">
        {/* Titre */}
        <h1 className="block md:hidden font-subtitle text-50px text-orange">
          {t("title")}
        </h1>
        <h1 className="hidden md:block lg:hidden font-subtitle text-80px text-orange">
          {t("title")}
        </h1>
        <h1 className="hidden lg:block font-subtitle text-80px text-orange">
          {t("title")}
        </h1>
        {/* Sous-titre */}
        <p className="block md:hidden font-content font-bold text-13px text-center max-w-[900px]">
          {t("subtitle")}
        </p>
        <p className="hidden md:block lg:hidden font-content font-bold text-20px text-center max-w-[900px]">
          {t("subtitle")}
        </p>
        <p className="hidden lg:block font-content font-bold text-25px text-center md:w-[1100px]">
          {t("subtitle")}
        </p>

        {/* Section "Jean Baptiste" */}
        {/* Mobile */}
        <Image
          src={imagePaths.jeanBaptisteImage || "/images/jeanbaptiste.webp"}
          alt="Jean Baptiste"
          width={352}
          height={426}
          className="object-cover h-auto md:hidden"
          priority
        />
        <h2 className="block md:hidden font-title text-25px font-bold self-start">
          {t("subtitle1")}
        </h2>
        <p className="block md:hidden font-content text-15px self-start leading-23px mt-2">
          {t("content")}
        </p>
        {/* Tablette */}
        <div className="hidden md:flex lg:hidden gap-20 justify-center items-center mt-8">
          <Image
            src={imagePaths.jeanBaptisteImage || "/images/jeanbaptiste.webp"}
            alt="Jean Baptiste Tablet"
            width={352}
            height={426}
            className="object-cover h-auto"
            priority
          />
          <div className="flex flex-col max-w-[495px]">
            <h2 className="font-title text-30px font-bold self-start">
              {t("subtitle1")}
            </h2>
            <p className="font-content text-15px self-start leading-23px mt-2">
              {t("content")}
            </p>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex gap-20 justify-center items-center mt-8">
          <Image
            src={imagePaths.jeanBaptisteImage || "/images/jeanbaptiste.webp"}
            alt="Jean Baptiste Desktop"
            width={352}
            height={426}
            className="object-cover h-auto"
            priority
          />
          <div className="flex flex-col max-w-[495px]">
            <h2 className="font-title text-25px font-bold self-start">
              {t("subtitle1")}
            </h2>
            <p className="font-content text-15px self-start leading-23px mt-2">
              {t("content")}
            </p>
          </div>
        </div>

        {/* Flèche vers le bas */}
        <Image
          src="/images/arrowdownblack.svg"
          alt="arrow down black"
          width={35}
          height={31}
          className="object-cover h-auto my-4"
          priority
        />
        {/* Paragraphe content2 */}
        <p className="block md:hidden font-title text-25px text-center leading-29px mb-6">
          {t("content2")}
        </p>
        <p className="hidden md:block lg:hidden font-title text-30px text-center leading-40px w-[500px] mb-6">
          {t("content2")}
        </p>
        <p className="hidden lg:block font-title text-35px text-center leading-50px w-[1100px] mb-12">
          {t("content2")}
        </p>
      </div>

      {/* Section "Equipe" – Gérald et Claire */}
      {/* Mobile */}
      <div className="flex flex-col bg-green-4 w-full gap-2 px-10 py-12 text-white md:hidden">
        <Image
          src={imagePaths.geraldImage || "/images/gerald.webp"}
          alt="Gerald"
          width={234}
          height={299}
          className="object-cover h-auto"
          priority
        />
        <h3 className="font-title text-35px font-bold">{t("subtitle2")}</h3>
        <p className="font-content text-15px leading-23px mb-8">
          {t("content3")}
        </p>
        <Image
          src={imagePaths.claireImage || "/images/claire.webp"}
          alt="Claire"
          width={234}
          height={299}
          className="object-cover h-auto"
          priority
        />
        <h3 className="font-title text-35px font-bold">{t("subtitle3")}</h3>
        <p className="font-content text-15px leading-23px">
          {t("content4")}
        </p>
      </div>
      {/* Tablette */}
      <div className="hidden md:flex lg:hidden flex-col bg-green-4 w-full gap-2 px-10 py-12 text-white">
        <div className="flex justify-center items-center w-full gap-10">
          <Image
            src={imagePaths.geraldImage || "/images/gerald.webp"}
            alt="Gerald Tablet"
            width={234}
            height={299}
            className="object-cover h-auto"
            priority
          />
          <div className="flex flex-col">
            <h3 className="font-title text-30px font-bold">
              {t("subtitle2")}
            </h3>
            <p className="font-content text-15px leading-23px mb-8">
              {t("content3")}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full gap-10 mt-10">
          <Image
            src={imagePaths.claireImage || "/images/claire.webp"}
            alt="Claire Tablet"
            width={234}
            height={299}
            className="object-cover h-auto"
            priority
          />
          <div className="flex flex-col">
            <h3 className="font-title text-30px font-bold">
              {t("subtitle3")}
            </h3>
            <p className="font-content text-15px leading-23px">
              {t("content4")}
            </p>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex flex-col bg-green-4 w-full gap-2 px-10 py-8 text-white">
        <div className="flex justify-center items-center w-1/2 mx-auto gap-10">
          <Image
            src={imagePaths.geraldImage || "/images/gerald.webp"}
            alt="Gerald Desktop"
            width={234}
            height={299}
            style={{ height: "299px", width: "auto" }}
            priority
          />
          <div className="flex flex-col">
            <h3 className="font-title text-35px font-bold">
              {t("subtitle2")}
            </h3>
            <p className="font-content text-15px leading-23px mb-8">
              {t("content3")}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2 mx-auto gap-10 mt-10">
          <Image
            src={imagePaths.claireImage || "/images/claire.webp"}
            alt="Claire Desktop"
            width={234}
            height={299}
            style={{ height: "299px", width: "auto" }}
            priority
          />
          <div className="flex flex-col">
            <h3 className="font-title text-35px font-bold">
              {t("subtitle3")}
            </h3>
            <p className="font-content text-15px leading-23px">
              {t("content4")}
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/images/fish.svg"
        alt="fish"
        width={68}
        height={46}
        className="object-cover h-auto my-4 mt-12"
        priority
      />
      {/* Paragraphe final */}
      <p className="block md:hidden font-title text-center text-25px leading-29px px-10 mb-12">
        {t("content5")}
      </p>
      <p className="hidden md:block lg:hidden font-title text-center text-30px leading-40px w-[500px] px-10 mb-12">
        {t("content5")}
      </p>
      <p className="hidden lg:block font-title text-center text-35px leading-50px w-[1100px] px-10 mb-12">
        {t("content5")}
      </p>
    </main>
  );
}
