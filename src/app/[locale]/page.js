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
      <Link href="https://www.google.com/maps/place/L'Agula+Marina+Croisi%C3%A8res+Promenade+en+mer+Carg%C3%A8se/@42.1317841,8.5939425,17z/data=!3m1!4b1!4m6!3m5!1s0x12da7bbb055319c5:0x5e3bb5ec35aeb829!8m2!3d42.1317841!4d8.5965174!16s%2Fg%2F11twhtgl6d?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D">
      <Image
          src="/images/map.webp"
          alt="Map"
          width={429}
          height={371}
          className="block lg:hidden h-auto w-full mt-4"
        />
              <Image
          src="/images/mapdesktop.webp"
          alt="Map"
          width={1280}
          height={368}
          className="hidden lg:block h-auto w-full mt-4"
        />
        </Link>
    </main>
  );
}
