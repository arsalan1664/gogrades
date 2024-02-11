import HeroSection from "@/components/herosection/HeroSection";
import { HeroSectionCard } from "@/components/herosection/Herosection_card";
import Testimonial from "@/components/testimonial/Testimonial";
import TrustedBy from "@/components/trustedby/TrustedBy";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy/>
      <Testimonial/>
    </>
  );
}
