"use client";

import { useI18n } from "../../locales/I18nContext";

export default function useLocalLink() {
  const { locale } = useI18n();

  function localLink(path) {
    return `/${locale}${path}`;
  }

  return localLink;
}
