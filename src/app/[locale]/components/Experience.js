"use client"

import Image from "next/image";
import { useScopedI18n } from "./../../locales/I18nContext";


export default function Experience() {
    const t = useScopedI18n("experience");
    
    return (
<section className="flex flex-col justify-center items-center mt-6 px-8">
<p className="font-title text-25px md:text-35px text-center md:leading-normal leading-29px">{t("title")}</p>
<p className="ont-title text-25px md:text-35px text-center leading-29px">{t("title2")}</p>
{/* Mobile Experience */}
<div className="flex justify-center items-center mt-10 gap-8 mb-12 md:hidden">
    <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center text-15px font-content leading-tight">
    <Image
          src="/images/sunset.svg"
          alt="Sunset"
          width={110}
          height={46}
          className="object-cover"
        />
        <p className="mt-4 text-center">{t("sun1")}</p>
        <p className="text-center">{t("sun2")}</p>
</div>
<div className="flex flex-col justify-center items-center text-15px font-content leading-tight mt-4">
        <Image
          src="/images/drink.svg"
          alt="Drinks"
          width={56}
          height={56}
          className="w-auto h-auto"
        />
        <p className="mt-4 text-center">{t("drink1")}</p>
        <p className="text-center">{t("drink2")}</p>
        </div>
</div>
<div className="flex flex-col justify-center items-center">
<div className="flex flex-col  justify-center items-center text-15px font-content leading-tight">
        <Image
          src="/images/fish.svg"
          alt="Fish"
          width={68}
          height={46}
          className="object-cover"
        />
        <p className="mt-4 text-center">{t("fish1")}</p>
        <p className="text-center">{t("fish2")}</p>
</div>
<div className="flex flex-col justify-center items-center text-15px font-content leading-tight mt-4">
        <Image
          src="/images/dive.svg"
          alt="Dive"
          width={41}
          height={50}
          className="object-cover"
        />
        <p className="mt-4 text-center">{t("dive1")}</p>
        <p className="text-center">{t("dive2")}</p>
</div>
</div>
</div>
{/* Desktop Experience */}
<div className="hidden md:flex justify-center items-center gap-16 my-10">
<div className="flex flex-col justify-center items-center text-15px font-content leading-tight">
    <Image
          src="/images/sunset.svg"
          alt="Sunset"
          width={110}
          height={46}
          className="pt-4 object-cover"
        />
        <p className="mt-4 text-center">{t("sun1")}</p>
        <p className="text-center">{t("sun2")}</p>
</div>
<div className="flex flex-col justify-center items-center text-15px font-content leading-tight mt-4">
        <Image
          src="/images/drink.svg"
          alt="Drinks"
          width={55}
          height={56}
          style={{ height: 'auto', width: '56px' }}
                  />
        <p className="mt-4 text-center">{t("drink1")}</p>
        <p className="text-center">{t("drink2")}</p>
  </div>
  <div className="flex flex-col  justify-center items-center text-15px font-content leading-tight">
        <Image
          src="/images/fish.svg"
          alt="Fish"
          width={68}
          height={46}
          className="pt-4 object-cover"
        />
        <p className="mt-4 text-center">{t("fish1")}</p>
        <p className="text-center">{t("fish2")}</p>
</div>
<div className="flex flex-col justify-center items-center text-15px font-content leading-tight mt-4">
        <Image
          src="/images/dive.svg"
          alt="Dive"
          width={41}
          height={50}
          className="object-cover"
        />
        <p className="mt-4 text-center">{t("dive1")}</p>
        <p className="text-center">{t("dive2")}</p>
</div>
</div>
{/* Learn More */}
<div className="flex justify-center items-center gap-6 mb-6">
<p className="font-title font-bold text-green-2 text-10px md:text-12px">{t("more")}</p>
<Image
          src="/images/greenarrowright.svg"
          alt="Greenarrowright"
          width={50}
          height={40}
          className="w-auto h-auto"
        />
        </div>
        <div className="w-11/12 md:w-10/12 h-[0.5px] md:h-[0.75px] md:my-4 bg-[#707070] mb-6"></div>
</section>
);
}