export type Lang = "en" | "zh";

export type I18nText = {
  en: string;
  zh: string;
};

export type I18nArray<T> = {
  en: T[];
  zh: T[];
};
