import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { SupportedLocale } from "@/constants"; 

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocale: SupportedLocale =
    locale && routing.locales.includes(locale as SupportedLocale)
      ? (locale as SupportedLocale)
      : routing.defaultLocale as SupportedLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
