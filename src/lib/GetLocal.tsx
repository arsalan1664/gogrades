"use server";
import { NextRequest } from "next/server";

export async function getLocale() {
  const request = NextRequest;
  if (process.env.NODE_ENV === "development") {
    const ip = await fetch(`https://api.ipify.org/?format=json`);
    const Ip = await ip.json();
    const locationResponse = await fetch(
      `https://pro.ip-api.com/json/${Ip.ip}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
    );
    const res = await locationResponse.json();
    return res;
  }
}
