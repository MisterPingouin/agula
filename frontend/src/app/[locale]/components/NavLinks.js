"use client"

import React from "react";
import { useScopedI18n } from "./../../locales/I18nContext";

const NavLinks = () => {
  const t = useScopedI18n("navigation");
  const links = [
    { name: t('circuits'), href: "#circuits" },
    { name: t('boat'), href: "#bateau" },
    { name: t('team'), href: "#equipe" },
    { name: t('commitments'), href: "#engagements" },
    { name: t('private'), href: "#privatisation" },
  ];

  return (
    <nav>
      <ul className="flex flex-col space-y-4 p-3 mt-10 pt-6">
        {links.map((link) => (
          <li key={link.name} className="border-b border-bordergray pb-4">
            <a
              href={link.href}
              className="text-20px font-medium text-black font-content"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavLinks;
