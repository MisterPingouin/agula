"use client";

import React from "react";
import { useScopedI18n } from "./../../locales/I18nContext";
import useLocalLink from "./../hooks/useLocalLink";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = ({ onClose }) => {
  const t = useScopedI18n("navigation");
  const localLink = useLocalLink();
  const pathname = usePathname();

  const links = [
    { name: t("circuits"), href: localLink("/nos-circuits") },
    { name: t("boat"), href: "#bateau" },
    { name: t("team"), href: "#equipe" },
    { name: t("commitments"), href: "#engagements" },
    { name: t("private"), href: "#privatisation" },
    { name: t("gallery"), href: "#galerie" },
  ];

  // Fonction pour fermer le menu lors d'un clic sur un lien
  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <nav>
      <ul className="flex flex-col space-y-4 p-3 mt-10 pt-6">
        {links.map((link) => (
          <li key={link.name} className="border-b border-bordergray pb-4">
            <Link
              href={link.href}
              onClick={handleLinkClick}
              className={`${
                pathname === link.href ? "text-[#A2A2A2]" : "text-black"
              } text-20px font-medium font-content`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
