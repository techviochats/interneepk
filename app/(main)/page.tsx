import HeroBanner from "@/components/header/hero-banner";
import IntroSection from "@/components/intro-section";
import Testimonials from "@/components/testimonials";
export const runtime = "edge";
export default function Home() {
  return (
    <>
      <HeroBanner />
      <IntroSection />
      <Testimonials />
    </>
  );
}
