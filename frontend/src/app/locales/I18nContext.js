"use client";

import React, { createContext, useContext, useMemo } from "react";

const I18nContext = createContext();

export const I18nProvider = ({ children, locale }) => {
  const t = (key) => `${locale}.${key}`;  // Remplace cette logique par la tienne

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

// Nouvelle fonction pour les traductions scindées
export const useScopedI18n = (scope) => {
  const { t } = useI18n();
  return (key) => t(`${scope}.${key}`);
};
