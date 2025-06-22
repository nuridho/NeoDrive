import { Avantages } from "@/components/home/Avantages";
import { Browse } from "@/components/home/Browse";
import { HeroSection } from "@/components/home/HeroSection";
import { Questions } from "@/components/home/Questions";
import { Testimonials } from "@/components/home/Testimonials";
import { MarqueeMessages } from "@/components/home/NotifMarquee";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="my-20 space-y-32">
      <HeroSection />
      <MarqueeMessages />
      <Avantages />
      <Testimonials />
      <Questions />
      {/* <Browse /> */}
    </MaxWidthWrapper>
  );
}
