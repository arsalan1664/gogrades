"use server";

import { NextRequest } from "next/server";

export async function getLocale(request: NextRequest) {
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
