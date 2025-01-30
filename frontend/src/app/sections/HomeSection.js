import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Image pleine hauteur */}
      <Image
  src="/images/1500x950-lagula.webp"
  alt="Vue aérienne"
  fill
  className="object-cover object-center"
  priority
/>


      {/* Contenu */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-35px font-bold font-title">Naviguez</h1>
        <p className="text-26px mx-4 font-light font-title leading-28px">
          au cœur des plus beaux sites de nos côtes
        </p>
        <p className="text-26px mx-4 font-subtitle">
          Avec l'Agence Marina Croisères
        </p>
        </div>
        <button className="absolute bottom-0 inset-x-0 w-full mt-8 py-2 px-6 bg-blue-3 text-white font-content text-20px font-semibold">
          RÉSERVER
        </button>
    </section>
  );
};

export default HomeSection;
