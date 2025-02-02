"use client";

import { useI18n } from "../../locales/I18nContext";

export default function useLocalLink() {
  const { locale } = useI18n();

  /**
   * Construit un lien en préfixant automatiquement la locale courante
   * exemple : if locale = "fr", localLink("/nos-circuits") => "/fr/nos-circuits"
   */
  function localLink(path) {
    return `/${locale}${path}`;
  }

  return localLink;
}
