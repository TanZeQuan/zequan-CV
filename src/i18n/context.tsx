import { createContext } from "react";
import type { Lang } from "./types";

export type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

export const I18nContext = createContext<I18nContextValue | null>(null);
