import { Locale } from "@/i18n.config";
import { headers } from "next/headers";
import Banner from "./_components/banner";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const ip = headers().get("X-Forwarded-For");
  const url = headers().get("host");
  const city = headers().get("x-city");

  return (
    <div >
      <Banner/>
    </div>
  );
}
