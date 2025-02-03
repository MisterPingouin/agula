"use client";

import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import fr from "./fr";
import en from "./en";
import { usePathname } from "next/navigation";

const translations = { fr, en };

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const pathname = usePathname(); // Récupère l'URL courante
  const detectedLocale = pathname.split("/")[1]; // Extrait "en" ou "fr"

  // Détermine la locale en fonction de l'URL
  const [locale, setLocale] = useState(() => {
    if (["fr", "en"].includes(detectedLocale)) {
      return detectedLocale;
    }
    return "fr"; // Par défaut si l'URL n'a pas de locale valide
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const dictionary = translations[locale] || translations["fr"];

  const t = (key) => key.split(".").reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : key), dictionary);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

export const useScopedI18n = (scope) => {
  const { t } = useI18n();
  return (key) => t(`${scope}.${key}`);
};
