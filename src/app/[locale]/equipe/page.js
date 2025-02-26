"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "./../../locales/I18nContext";

export default function EquipePage() {
  // On récupère la locale via votre contexte i18n (géré ailleurs)
  // Par ex: /fr/equipe => locale = "fr", /en/equipe => locale = "en"
  const { locale } = useI18n();

  // État pour stocker les données de la section "équipe"
  const [equipeData, setEquipeData] = useState({});
  // État pour les chemins d'images (Jean Baptiste, Gérald, Claire, etc.)
  const [imagePaths, setImagePaths] = useState({});

  // 1. Fetch dynamique du contenu "équipe" depuis l’API admin/get-content
  useEffect(() => {
    const fetchEquipeData = async () => {
      try {
        const response = await fetch(`/api/admin/get-content?locale=${locale}`, {
          cache: "no-store", // Force la lecture en direct
        });
        if (response.ok) {
          const allData = await response.json();
          // On suppose que vos fichiers fr.js/en.js contiennent allData.equipe
          setEquipeData(allData.equipe || {});
        } else {
          console.error("Erreur lors de la récupération du contenu (équipe)");
        }
      } catch (error) {
        console.error("Erreur de connexion (équipe):", error);
      }
    };

    fetchEquipeData();
  }, [locale]);

  // 2. Fetch des chemins d’images
  useEffect(() => {
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
        console.error("Erreur de connexion (images):", error);
      }
    };

    fetchImagePaths();
  }, []);

  // Si aucune donnée, on peut afficher un mini-chargement
  if (!equipeData.title) {
    return <div>Chargement...</div>;
  }

  return (
    <main className="flex flex-col justify-center items-center text-black mt-[80px]">
      <div className="flex flex-col justify-center gap-2 items-center px-10">
        {/* Titre */}
        <h1 className="block md:hidden font-subtitle text-50px text-orange">
          {equipeData.title}
        </h1>
        <h1 className="hidden md:block lg:hidden font-subtitle text-80px text-orange">
          {equipeData.title}
        </h1>
        <h1 className="hidden lg:block font-subtitle text-80px text-orange">
          {equipeData.title}
        </h1>

        {/* Sous-titre */}
        <p className="block md:hidden font-content text-15px font-bold leading-23px text-center max-w-[900px] mb-2">
          {equipeData.subtitle}
        </p>
        <p className="hidden md:block lg:hidden font-content font-bold text-20px text-center max-w-[900px]">
          {equipeData.subtitle}
        </p>
        <p className="hidden lg:block font-content font-bold text-25px text-center md:w-[1100px]">
          {equipeData.subtitle}
        </p>

        {/* Section "Jean Baptiste" */}
        {/* Mobile */}
        <Image
          src={imagePaths.jeanBaptisteImage || "/images/jeanbaptiste.webp"}
          alt="Jean Baptiste"
          width={352}
          height={426}
          className="object-cover h-auto md:hidden"
          style={{ height: "auto", width: "352px" }}
          priority
        />
        <h2 className="block md:hidden font-title text-25px font-bold self-start">
          {equipeData.subtitle1}
        </h2>
        <p className="block md:hidden font-content text-15px self-start leading-23px mt-2">
          {equipeData.content}
        </p>

        {/* Tablette */}
        <div className="hidden md:flex lg:hidden gap-20 justify-center items-center mt-8">
          <Image
            src={imagePaths.jeanBaptisteImage || "/images/jeanbaptiste.webp"}
            alt="Jean Baptiste Tablet"
            width={352}
            height={426}
            className="object-cover h-auto"
            style={{ height: "auto", width: "352px" }}
            priority
          />
          <div className="flex flex-col max-w-[495px]">
            <h2 className="font-title text-30px font-bold self-start">
              {equipeData.subtitle1}
            </h2>
            <p className="font-content text-15px self-start leading-23px mt-2">
              {equipeData.content}
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
            style={{ height: "auto", width: "352px" }}
            className="object-cover h-auto"
            priority
          />
          <div className="flex flex-col max-w-[495px]">
            <h2 className="font-title text-25px font-bold self-start">
              {equipeData.subtitle1}
            </h2>
            <p className="font-content text-15px self-start leading-23px mt-2">
              {equipeData.content}
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
          style={{ height: "auto", width: "35px" }}
          priority
        />

        <p className="block md:hidden font-title text-25px text-center leading-29px mb-6">
          {equipeData.content2}
        </p>
        <p className="hidden md:block lg:hidden font-title text-30px text-center leading-40px w-[500px] mb-6">
          {equipeData.content2}
        </p>
        <p className="hidden lg:block font-title text-35px text-center leading-50px w-[1100px] mb-12">
          {equipeData.content2}
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
        <h3 className="font-title text-35px font-bold">{equipeData.subtitle2}</h3>
        <p className="font-content text-15px leading-23px mb-8">
          {equipeData.content3}
        </p>
        <Image
          src={imagePaths.claireImage || "/images/claire.webp"}
          alt="Claire"
          width={234}
          height={299}
          className="object-cover h-auto"
          priority
        />
        <h3 className="font-title text-35px font-bold">{equipeData.subtitle3}</h3>
        <p className="font-content text-15px leading-23px">{equipeData.content4}</p>
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
              {equipeData.subtitle2}
            </h3>
            <p className="font-content text-15px leading-23px mb-8">
              {equipeData.content3}
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
              {equipeData.subtitle3}
            </h3>
            <p className="font-content text-15px leading-23px">
              {equipeData.content4}
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
              {equipeData.subtitle2}
            </h3>
            <p className="font-content text-15px leading-23px mb-8">
              {equipeData.content3}
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
              {equipeData.subtitle3}
            </h3>
            <p className="font-content text-15px leading-23px">
              {equipeData.content4}
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/images/fish.svg"
        alt="fish"
        width={68}
        height={46}
        className="object-cover h-auto my-8 mt-12"
        priority
      />

      {/* content5 / content6 */}
      <p className="block md:hidden font-title text-center text-25px leading-29px px-10 mb-6">
        {equipeData.content5}
      </p>
      <p className="hidden md:block lg:hidden font-title text-center text-30px leading-40px w-[500px] px-10 mb-4">
        {equipeData.content5}
      </p>
      <p className="hidden lg:block font-title text-center text-35px leading-[43px] w-[1100px] px-10 mb-4">
        {equipeData.content5}
      </p>

      <p className="block md:hidden font-content text-center text-15px leading-[23px] px-10 mb-8">
        {equipeData.content6}
      </p>
      <p className="hidden md:block lg:hidden font-content text-center text-15px leading-[23px] w-[500px] px-10 mb-12">
        {equipeData.content6}
      </p>
      <p className="hidden lg:block font-content text-center text-15px leading-[23px] w-[1100px] px-10 mb-12">
        {equipeData.content6}
      </p>

      <div className="flex justify-center items-center gap-2 mb-12">
        <Image
          src="/images/chance1.webp"
          alt="fish"
          width={356}
          height={454}
          className="hidden md:block object-cover h-auto"
          priority
        />
        <Image
          src="/images/chance2.webp"
          alt="fish"
          width={356}
          height={454}
          className="hidden md:block object-cover h-auto"
          priority
        />
        <Image
          src="/images/chance3.webp"
          alt="fish"
          width={356}
          height={454}
          className="object-cover h-auto"
          priority
        />
      </div>
    </main>
  );
}
