"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useI18n, useScopedI18n } from "../../../locales/I18nContext";
import { usePathname } from "next/navigation";
import useLocalLink from "./../../hooks/useLocalLink"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const { t } = useI18n();
  const t1 = useScopedI18n("navigation");
  const pathname = usePathname();
  const localLink = useLocalLink();

  useEffect(() => {
    const isHomePath = pathname === "/" || pathname === "/en" || pathname === "/fr";
    setIsHomePage(isHomePath);

    if (isHomePath) {
      let lastScrollY = 0;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 50 && currentScrollY > lastScrollY) {
          setVisible(true); // Affiche le header quand on scroll vers le bas
        } else {
          setVisible(false); // Cache si on remonte
        }
        lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setVisible(true); // Toujours visible sur les autres pages
    }
  }, [pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {isHomePage ? (
        /** Animation activée uniquement sur la homepage **/
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: visible ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="hidden lg:block"
        >
          <HeaderContent
            t={t}
            t1={t1}
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            localLink={localLink}
          />
        </motion.div>
      ) : (
        /** Pas d'animation sur les autres pages **/
        <div className="hidden lg:block">
          <HeaderContent
            t={t}
            t1={t1}
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            localLink={localLink}
          />
        </div>
      )}

      <div className="block lg:hidden bg-white shadow-md">
        <HeaderMobile t={t} t1={t1} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {menuOpen && <MobileMenu onClose={toggleMenu} />}
    </div>
  );
};

const HeaderContent = ({ t, t1, menuOpen, toggleMenu, localLink }) => (
  <div className="flex items-center justify-center px-4 py-3 bg-white">
    <div className="flex items-center justify-center">
      <Link href="/" className="cursor-pointer">
        <Image src="/images/logo.svg" alt={t("header.logo_alt")} width={128} height={55} />
      </Link>
      <nav className="flex font-medium pt-5 gap-10 px-16 font-content text-15px text-blue-3">
      <Link
          href={localLink("/nos-circuits")}
        >
          {t1("circuits")}
        </Link>        <a href="#">{t1("boat")}</a>
        <a href="#">{t1("team")}</a>
        <a href="#">{t1("commitments")}</a>
        <a href="#">{t1("private")}</a>
        <a href="#">{t1("gallery")}</a>
      </nav>
      <button className="bg-blue-3 text-white mt-5 px-14 py-2 font-semibold text-14px">
        {t1("book")}
      </button>
    </div>
    <div className="flex space-x-12">
      <div className="pt-2 flex space-x-1 lg:hidden">
        <a href="#">
          <Image src="/images/phone.svg" alt="Phone" width={24} height={24} />
        </a>
        <a href="#">
          <Image src="/images/phone.svg" alt="Tripadvisor" width={24} height={24} />
        </a>
        <a href="#">
          <Image src="/images/phone.svg" alt="Instagram" width={24} height={24} />
        </a>
        <a href="#">
          <Image src="/images/phone.svg" alt="Facebook" width={24} height={24} />
        </a>
      </div>
      <MenuButton isOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  </div>
);

const HeaderMobile = ({ t, t1, menuOpen, toggleMenu }) => (
  <div className="flex items-center justify-between px-4 py-3 lg:px-8">
    <Link href="/" className="cursor-pointer">
      <Image src="/images/logo.svg" alt={t("header.logo_alt")} width={120} height={40} />
    </Link>
    <div className="flex space-x-12">
      <div className="pt-2 flex space-x-1">
        <a href="#">
          <Image src="/images/phone.svg" alt="Phone" width={24} height={24} />
        </a>
        <a href="#">
          <Image src="/images/phone.svg" alt="Tripadvisor" width={24} height={24} />
        </a>
        <a href="#">
          <Image src="/images/phone.svg" alt="Instagram" width={24} height={24} />
        </a>
        <a href="#">
          <Image src="/images/phone.svg" alt="Facebook" width={24} height={24} />
        </a>
      </div>
      <MenuButton isOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  </div>
);

export default Header;
