"use client";

import Image from "next/image";
import { useScopedI18n } from "./../../locales/I18nContext";
import useLocalLink from "./../hooks/useLocalLink";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Experience() {
    const t = useScopedI18n("experience");
    const localLink = useLocalLink();
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    
    return (
        <section className="flex flex-col justify-center items-center mt-6 px-8">
            <p className="font-title text-25px md:text-35px text-center md:leading-normal leading-29px">{t("title")}</p>
            <p className="ont-title text-25px md:text-35px text-center leading-29px">{t("title2")}</p>
            
            {/* Mobile Experience */}
            <div className="flex justify-center items-center mt-10 gap-8 mb-12 md:hidden">
                <div className="flex flex-col justify-center items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col justify-center items-center text-15px font-content leading-tight">
                        <Image src="/images/sunset.svg" alt="Sunset" width={110} height={46} className="object-cover" />
                        <p className="mt-4 text-center">{t("sunset1")}</p>
                        <p className="text-center">{t("sunset2")}</p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col justify-center items-center text-15px font-content leading-tight mt-4">
                        <Image src="/images/drink.svg" alt="Drinks" width={56} height={56} className="w-auto h-auto" />
                        <p className="mt-4 text-center">{t("drink1")}</p>
                        <p className="text-center">{t("drink2")}</p>
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col justify-center items-center text-15px font-content leading-tight">
                        <Image src="/images/fish.svg" alt="Fish" width={68} height={46} className="object-cover" />
                        <p className="mt-4 text-center">{t("fish1")}</p>
                        <p className="text-center">{t("fish2")}</p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col justify-center items-center text-15px font-content leading-tight mt-4">
                        <Image src="/images/dive.svg" alt="Dive" width={41} height={50} className="object-cover" />
                        <p className="mt-4 text-center">{t("dive1")}</p>
                        <p className="text-center">{t("dive2")}</p>
                    </motion.div>
                </div>
            </div>
            
            {/* Desktop Experience */}
            <div className="hidden md:flex justify-center items-end gap-16 my-10">
  {[
    { src: "/images/sunset.svg", alt: "Sunset", width: 110, height: 46, texts: ["sunset1", "sunset2"] },
    { src: "/images/drink.svg", alt: "Drinks", width: 55, height: 56, texts: ["drink1", "drink2"] },
    { src: "/images/fish.svg", alt: "Fish", width: 68, height: 46, texts: ["fish1", "fish2"] },
    { src: "/images/dive.svg", alt: "Dive", width: 41, height: 50, texts: ["dive1", "dive2"] }
  ].map((item, index) => (
    <motion.div
      key={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="flex flex-col items-center text-15px font-content leading-tight h-full"
    >
      <div className="flex-grow flex items-end">
        <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="object-cover" />
      </div>
      <div className="mt-4 text-center">
        <p>{t(item.texts[0])}</p>
        <p>{t(item.texts[1])}</p>
      </div>
    </motion.div>
  ))}
</div>
            
            {/* Learn More */}
            <Link href={localLink("/bateau")} className="cursor-pointer">
                <div className="flex justify-center items-center gap-6 mb-6 lg:mt-6">
                    <p className="font-title font-bold text-green-2 text-10px md:text-17px">{t("more")}</p>
                    <Image src="/images/greenarrowright.svg" alt="Greenarrowright" width={50} height={40} className="w-auto h-auto" />
                </div>
            </Link>
            <div className="w-11/12 md:w-10/12 h-[0.5px] md:h-[0.75px] md:my-4 bg-[#707070] mb-6"></div>
        </section>
    );
}
