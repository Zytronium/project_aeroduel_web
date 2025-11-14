import { HeroSection } from "@/app/compontents/HeroSection";
import { AboutSection } from "@/app/compontents/AboutSection";
import { DownloadSection } from "@/app/compontents/DownloadSection";

function FeaturesSection() {
  return null;
}

function HowItWorksSection() {
  return null;
}

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
      <div className="z-1">
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TechStackSection />
        <Roadmap />
        <FollowSection />
      </div>
      <DownloadSection />
    </>
  );
}
