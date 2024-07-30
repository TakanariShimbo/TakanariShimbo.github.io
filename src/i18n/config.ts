import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en/translation.json";
import ja from "./ja/translation.json";

export const resources = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
} as const;

export type ProjectType =
  (typeof resources)["en"]["translation"]["projects"]["projects"][0];

export type SkillType =
  (typeof resources)["en"]["translation"]["skills"]["icons"][0];

export type HistoryType =
  (typeof resources)["en"]["translation"]["history"]["experiences"][0];

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources,
    detection: {
      order: ["navigator"],
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
