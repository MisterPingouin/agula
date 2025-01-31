"use client";

import React, { createContext, useContext, useMemo } from "react";
import fr from "./fr"; 
import en from "./en";

const translations = { fr, en };

const I18nContext = createContext();

export const I18nProvider = ({ children, locale = "fr" }) => {
  const dictionary = translations[locale] || translations["fr"]; 

  const t = (key) => {
    return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : key), dictionary);
  };

  const value = useMemo(() => ({ locale, t }), [locale]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

// Fonction pour récupérer une traduction dans un scope spécifique
export const useScopedI18n = (scope) => {
  const { t } = useI18n();
  return (key) => t(`${scope}.${key}`);
};
