import { Locale } from "@/i18n.config";
import { headers } from "next/headers";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const ip = headers().get("X-Forwarded-For");
  const url = headers().get("host");
  const city = headers().get("x-city");

  return (
    <div className="space-y-3 h-screen bg-slate-800 pt-20 text-white text-5xl flex items-start justify-center ">
      {ip} <br /> {city} <br /> {url}
    </div>
  );
}
