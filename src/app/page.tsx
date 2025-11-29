import { HeroSection } from "@/app/components/HeroSection";
import { AboutSection } from "@/app/components/AboutSection";
import { DownloadSection } from "@/app/components/DownloadSection";
import { DuelingSection } from "@/app/components/DuelingSection";
import { WhySection } from "@/app/components/WhySection";
import Image from "next/image";
function TechStackSection() {
  return null;
}

function Roadmap() {
  return null;
}

function FollowSection() {
  return null;
}

export default function Home() {
  return (
    <>
      <HeroSection />
      {/*
      Sections with z-1 (or higher) will not have the background gradient.
      Content without z-1 must set internal content to have z-1 to appear
       above the gradient while still putting the gradient between the
       section background and section foreground.
       The background gradient component is in the HeroSection.
       */}
      <div className="z-1">
        <AboutSection />
        <WhySection />
        <DuelingSection />
        <TechStackSection />
        <Roadmap />
        <FollowSection />
      </div>
      <DownloadSection />
    </>
  );
}
