"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useI18n, useScopedI18n } from "../../../locales/I18nContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false); // Caché au chargement en desktop
  const { t } = useI18n();
  const { scrollY } = useScroll();
  const t1 = useScopedI18n("navigation");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        // Afficher le header uniquement après un certain scroll
        setVisible(scrollY.get() > 50);
      } else {
        setVisible(true); // Toujours visible sur mobile
      }
    };

    handleScroll(); // Appliquer une première fois
    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/** Header desktop avec animation de glissement **/}
      <motion.div
        initial={{ y: "-100%" }} // Commence hors de l'écran en haut
        animate={{
          y: visible ? "0%" : "-100%", // Descend quand on scroll, remonte sinon
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="hidden lg:block"
      >
        <div className="flex items-center justify-center px-4 py-3 bg-white">
          <div className="flex items-center justify-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/images/logo.svg"
                alt={t("header.logo_alt")}
                width={128}
                height={55}
              />
            </Link>
            <nav className="flex font-medium pt-5 gap-10 px-16 font-content text-15px text-blue-3">
              <a href="#">{t1("circuits")}</a>
              <a href="#">{t1("boat")}</a>
              <a href="#">{t1("team")} </a>
              <a href="#">{t1("commitments")} </a>
              <a href="#">{t1("private")} </a>
              <a href="#">{t1("gallery")} </a>
            </nav>
            <button className="bg-blue-3 text-white mt-5 px-14 py-2 font-semibold text-14px">
              {t1("book")}
            </button>
          </div>
          <div className="flex space-x-12">
            <div className="pt-2 flex space-x-1 lg:hidden">
              <a href="#">
                <Image
                  src="/images/phone.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/phone.svg"
                  alt="Tripadvisor"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/phone.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/phone.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <MenuButton isOpen={menuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </motion.div>

      {/** Header mobile toujours visible sans animation **/}
      <div className="block lg:hidden bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3 lg:px-8">
          <div>
            <Link href="/" className="cursor-pointer">
              <Image
                src="/images/logo.svg"
                alt={t("header.logo_alt")}
                width={120}
                height={40}
              />
            </Link>
          </div>
          <div className="flex space-x-12">
            <div className="pt-2 flex space-x-1">
              <a href="#">
                <Image
                  src="/images/phone.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/phone.svg"
                  alt="Tripadvisor"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/phone.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/phone.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <MenuButton isOpen={menuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={toggleMenu} />}
    </div>
  );
};

export default Header;
