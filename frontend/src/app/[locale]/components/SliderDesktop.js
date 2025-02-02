"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./Cards/Card";

// 6 tours => 2 slides de 3
const TOURS = [
  { tourKey: "grandTour", imageSrc: "/images/grandtour.jpg" },
  { tourKey: "calanquesPiana", imageSrc: "/images/calanques-piana.jpg" },
  { tourKey: "scandolaGirolata", imageSrc: "/images/scandola-girolata.jpg" },
  { tourKey: "grandTourSunset", imageSrc: "/images/grandtour-sunset.jpg" },
  { tourKey: "calanquesPianaSunset", imageSrc: "/images/calanques-piana-sunset.jpg" },
  { tourKey: "scandolaGirolataSunset", imageSrc: "/images/scandola-girolata-sunset.jpg" },
];

// Découpe TOURS en 2 tableaux de 3 (slide 1: [0,1,2], slide 2: [3,4,5])
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function SliderDesktop() {
  const cardsPerSlide = 3;
  const slides = chunkArray(TOURS, cardsPerSlide); // 2 slides
  const totalSlides = slides.length;               // 2
  const totalCards = TOURS.length;                 // 6

  // Slide courante (0 → la 1ʳᵉ, 1 → la 2ᵉ)
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Ex. : slide 0 => 3/6, slide 1 => 6/6
  const cardsShown = Math.min((currentSlide + 1) * cardsPerSlide, totalCards);

  return (
    <div className="hidden md:block w-full mx-auto pt-8">
      {/* Conteneur de largeur fixe = 1200px */}
      <div className="relative w-[1200px] mx-auto overflow-hidden">
        {/* motion.div => large de 2 slides * 100% = 200% */}
        <motion.div
          className="flex"
          style={{ width: `${totalSlides * 50}%` }} // => 200%
          animate={{ x: `-${currentSlide * 100}%` }} // 0% ou -100%
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          {slides.map((slideTours, idx) => (
            // Chaque slide = 1200px (pile la largeur du conteneur)
            <div
              key={`slide-${idx}`}
              className="flex-none w-[1200px] px-6"
            >
              {/*
                3 cartes côte à côte
                => "flex justify-between" ou "grid grid-cols-3"
              */}
              <div className="flex justify-between gap-6">
                {slideTours.map((tour) => (
                  <div key={tour.tourKey} className="flex-1">
                    <Card
                      tourKey={tour.tourKey}
                      imageSrc={tour.imageSrc}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/*
        Barre de navigation : flèches + pagination 3/6 + barre
        Dans un conteneur de même largeur (1200px) pour être
        parfaitement aligné
      */}
      <div className="flex items-center justify-between w-[1200px] mx-auto mt-4">
        {/* Flèche gauche */}
        <button onClick={handlePrev} className="p-2">
          <Image
            src="/images/arrowleft.svg"
            alt="left"
            width={24}
            height={24}
          />
        </button>

        {/* Pagination + Barre dans un même bloc flex */}
        <div className="flex items-center gap-2 w-full">
          {/* Pagination : X/6 en gras */}
          <div className="text-13px font-title font-bold">
            {cardsShown}/{totalCards}
          </div>
                  {/* Flèche droite */}
        <button onClick={handleNext} className="">
          <Image
            src="/images/arrowright.svg"
            alt="right"
            width={24}
            height={24}
          />
        </button>

          {/* Barre sur 100% de ce bloc (flex-grow si souhaité) */}
          <div className="relative h-[2px] bg-gray-300 flex-1">
            <div
              className="absolute h-[2px] bg-black transition-all duration-300"
              style={{
                width: `${((currentSlide + 1) / totalSlides) * 100}%`,
              }}
            />
          </div>
        </div>


      </div>
    </div>
  );
}
