import { Locale } from "@/i18n.config";
import { NextRequest } from "next/server";

export function getLocale(request: NextRequest): Locale {
  const country = request.cookies.get("X-Country");
  const count = country?.value.toLowerCase();
  if (count === "au") {
    return "au";
  } else if (count === "ca") {
    return "ca";
  } else if (count === "uk") {
    return "uk";
  } else if (count === "us") {
    return "us";
  }
  return "none";
}
