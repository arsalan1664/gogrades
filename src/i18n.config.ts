export const i18n = {
  defaultLocale: "none",
  locales: ["au", "ca", "uk", "us", "none"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
