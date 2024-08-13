import { Locale } from "@/i18n.config";
import Banner from "./_components/banner";

export default async function Home({ params }: { params: { lang: Locale } }) {
  return (
    <div>
      <Banner />
    </div>
  );
}
