"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useI18n, useScopedI18n } from "../../../locales/I18nContext";
import { usePathname } from "next/navigation";
import useLocalLink from "../../hooks/useLocalLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { t } = useI18n();
  const t1 = useScopedI18n("navigation");
  const pathname = usePathname();
  const localLink = useLocalLink();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY > 50);
  }, []);

  useEffect(() => {
    const isHomePath = pathname === "/" || pathname === "/en" || pathname === "/fr";
    setVisible(false); // Reset visibility when navigating to another page

    if (isHomePath) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setVisible(true);
    }
  }, [pathname, handleScroll]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: visible ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="hidden lg:block shadow-md"
      >
        <HeaderContent t={t} t1={t1} menuOpen={menuOpen} toggleMenu={toggleMenu} localLink={localLink} />
      </motion.div>
      
      <div className="block lg:hidden bg-white shadow-md">
        <HeaderMobile t={t} t1={t1} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {menuOpen && <MobileMenu onClose={toggleMenu} />}
    </header>
  );
};

const HeaderContent = ({ t, t1, localLink }) => {
  const pathname = usePathname();

  const links = [
    { name: t1("circuits"), href: localLink("/nos-circuits") },
    { name: t1("boat"), href: localLink("/bateau") },
    { name: t1("team"), href: localLink("/equipe") },
    { name: t1("commitments"), href: localLink("/engagement") },
    { name: t1("private"), href: localLink("/privatisation") },
    { name: t1("gallery"), href: localLink("/gallerie") },
  ];

  return (
    <div className="flex items-center justify-center px-4 py-3 bg-white">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image src="/images/logo.svg" alt={t("header.logo_alt")} width={128} height={55} />
        </Link>
        <nav className="flex font-medium pt-5 gap-10 px-16 font-content text-15px text-blue-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={pathname === link.href ? "text-[#A2A2A2]" : "text-15px"}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link href={localLink("/reservation")}>
        <button className="bg-blue-3 text-white mt-5 px-14 py-2 font-semibold text-14px">
          {t1("book")}
        </button>
        </Link>
      </div>
    </div>
  );
};

const HeaderMobile = ({ t, menuOpen, toggleMenu }) => (
  <div className="flex items-center justify-between px-4 py-3">
    <Link href="/">
      <Image src="/images/logo.svg" alt={t("header.logo_alt")} width={129} height={55} className="w-auto h-auto" />
    </Link>
    <div className="flex space-x-12">
      <div className="flex space-x-1 pt-2">
        <Link href="tel:+33643040014">
          <Image src="/images/phoneheader.svg" alt="Phone" width={26} height={26} />
        </Link>
        <Link href="https://www.tripadvisor.fr/Attraction_Review-g663644-d25436276-Reviews-L_Agula_Marina_Croisieres-Cargese_Corse_du_Sud_Corsica.html">
          <Image src="/images/tripheader.svg" alt="Tripadvisor" width={26} height={26} />
        </Link>
        <Link href="https://www.instagram.com/lagulamarina_croisieres/">
          <Image src="/images/instaheader.svg" alt="Instagram" width={26} height={26} />
        </Link>
        <Link href="https://www.facebook.com/lagulamarinacroisieres/">
          <Image src="/images/fbheader.svg" alt="Facebook" width={26} height={26} />
        </Link>
      </div>
      <MenuButton isOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  </div>
);

export default Header;
