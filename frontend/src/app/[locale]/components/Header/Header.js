"use client";

import React, { useState } from "react";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { useI18n } from "../../../locales/I18nContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t} = useI18n();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        <div>
          <Image
            src="/images/logo.svg"
            alt={t("header.logo_alt")}
            width={120}
            height={40}
          />
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
        {menuOpen && <MobileMenu onClose={toggleMenu} />}
      </div>
    </header>
  );
};

export default Header;
