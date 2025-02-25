"use client";

import HomeSection from "./sections/HomeSection";
import SliderDesktop from "./components/SliderDesktop";
import Card from "./components/Cards/Card";
import Experience from "./components/Experience";
import Heart from "./components/Heart";
import ChooseSection from "./sections/ChooseSection";
import EmbarkSection from "./sections/EmbarkSection";
import MeetSection from "./sections/MeetSection";
import PrivatSection from "./sections/PrivatSection";
import HeartDesktop from "./components/HeartDesktop";
import FAQ from "./components/FAQ";
import EngageSection from "./sections/EngageSection";
import VideoLagula from "./components/VideoLagula";
import Link from "next/link";
import Image from "next/image";


export default function HomePage() {

  return (
    <main>
      <HomeSection />
      <ChooseSection />
      <SliderDesktop />
      <section className="flex flex-col mt-8 px-4 gap-4 max-w-md mx-auto lg:hidden">
        <Card tourKey="grandTour" imageSrc="/images/grandtour.jpg" />
        <Card tourKey="calanquesPiana" imageSrc="/images/calanques-piana.jpg" />
        <Card
          tourKey="scandolaGirolata"
          imageSrc="/images/scandola-girolata.jpg"
        />
      </section>
      <EmbarkSection />
      <VideoLagula />
      <MeetSection />
      <EngageSection />
      <PrivatSection />
      <Experience />
      <Heart />
      <HeartDesktop />
      <FAQ />
      <Link href="https://www.google.com/maps/place/H%C3%B4tel+Les+Lentisques/@42.1458937,8.5933991,17z/data=!4m9!3m8!1s0x12da7bde74858be7:0x44350905f557adfe!5m2!4m1!1i2!8m2!3d42.1458937!4d8.595974!16s%2Fg%2F1vz85y1v?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D">
              <Image
          src="/images/map.webp"
          alt="Map"
          width={1280}
          height={368}
          className="hidden lg:block h-auto w-full mt-4"
        />
        </Link>
    </main>
  );
}
