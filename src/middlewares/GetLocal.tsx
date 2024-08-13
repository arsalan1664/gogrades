import { Locale } from "@/i18n.config";
import { NextRequest } from "next/server";

export function getLocale(request: NextRequest): Locale {
  const country = request.cookies.get("X-Country");
  const count = country?.value.toLowerCase();
  if (count === "australia") {
    return "au";
  } else if (count === "canada") {
    return "ca";
  } else if (count === "united kingdom") {
    return "uk";
  } else if (count === "united states") {
    return "us";
  }
  return "none";
}
