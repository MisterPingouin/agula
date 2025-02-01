"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "../../../locales/I18nContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false); // Caché au chargement en desktop
  const { t } = useI18n();
  const { scrollY } = useScroll();

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
        className="hidden md:block"
      >
        <div className="flex items-center justify-between px-4 py-3 lg:px-8 bg-white/80 shadow-md backdrop-blur-md">
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
            <div className="pt-2 flex space-x-1 md:hidden">
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
            <MenuButton isOpen={menuOpen} toggleMenu={toggleMenu}/>
          </div>
        </div>
      </motion.div>

      {/** Header mobile toujours visible sans animation **/}
      <div className="block md:hidden bg-white shadow-md">
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
      </div>

      {menuOpen && <MobileMenu onClose={toggleMenu} />}
    </div>
  );
};

export default Header;
