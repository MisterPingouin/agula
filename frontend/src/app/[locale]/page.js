"use client";

import HomeSection from "./sections/HomeSection";
import SliderDesktop from "./components/SliderDesktop";
import Card from "./components/Cards/Card";
import useLocalLink from "./hooks/useLocalLink";
import Experience from "./components/Experience";
import Heart from "./components/Heart";
import ChooseSection from "./sections/ChooseSection";

export default function HomePage() {

  return (
    <main>
      <HomeSection />
      <ChooseSection />
      <SliderDesktop />
      <section className="flex flex-col mt-8 px-4 gap-4 max-w-md mx-auto md:hidden">
        <Card tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
        <Card tourKey="calanquesPiana" imageSrc="/images/calanques-piana.jpg" />
        <Card
          tourKey="scandolaGirolata"
          imageSrc="/images/scandola-girolata.jpg"
        />
      </section>
      <Experience />
      <Heart />
    </main>
  );
}
