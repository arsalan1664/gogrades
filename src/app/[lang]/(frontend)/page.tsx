import { Locale } from "@/i18n.config";
import Banner from "./_components/banner";
import Trust from "./_components/Trust";
import Whyus from "./_components/Whyus";

export default async function Home({ params }: { params: { lang: Locale } }) {
  return (
    <div>
      <Banner />
      <Trust/>
      <Whyus/>
    </div>
  );
}
