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

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function SliderDesktop() {
  const cardsPerSlide = 3;
  const slides = chunkArray(TOURS, cardsPerSlide);
  const totalSlides = slides.length;
  const totalCards = TOURS.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const cardsShown = Math.min((currentSlide + 1) * cardsPerSlide, totalCards);

  return (
    <div className="hidden md:block w-full mx-auto pt-8">
      <div className="relative w-[1200px] mx-auto overflow-hidden">
        <motion.div
          className="flex"
          style={{ width: `${totalSlides * 50}%` }}
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          {slides.map((slideTours, idx) => (
            <div key={`slide-${idx}`} className="flex-none w-[1200px] px-6">
              <div className="flex justify-between gap-6">
                {slideTours.map((tour) => (
                  <div key={tour.tourKey} className="flex-1">
                    <Card tourKey={tour.tourKey} imageSrc={tour.imageSrc} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-between w-[1200px] mx-auto mt-4">
        <button onClick={handlePrev} className="p-2">
          <Image src="/images/arrowleft.svg" alt="left" width={24} height={24} />
        </button>

        <div className="flex items-center gap-2 w-full">
          <div className="text-13px font-title font-bold">
            {cardsShown}/{totalCards}
          </div>

          <button onClick={handleNext}>
            <Image src="/images/arrowright.svg" alt="right" width={24} height={24} />
          </button>

          {/* Barre de progression */}
          <div className="relative h-[2px] bg-gray-300 flex-1 overflow-hidden">
            <motion.div
              className="absolute h-full w-[50%] bg-black"
              initial={{ x: "0%" }}
              animate={{ x: currentSlide === 0 ? "0%" : "100%" }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
