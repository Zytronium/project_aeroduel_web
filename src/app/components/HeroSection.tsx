"use client";

import { useState, useEffect } from "react";
import Logo from "../../../public/aero-duel-wide-banner.svg";
import Image from "next/image";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax and fade effects
  const parallaxOffset = scrollY * 0.5; // Logo moves at 50% of scroll speed
  const opacity = Math.max(0, 1 - scrollY / 600); // Fade out over 600px
  const scale = Math.max(0.8, 1 - scrollY / 1000); // Scale down as you scroll

  return (
    <section
      id="hero"
      className="bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] py-16 px-4 md:px-14 lg:px-16 xl:px-20 w-full relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-screen-2xl mx-auto gap-8 min-h-[60vh]">
        <div
          style={{
            transform: isMounted
              ? `translateY(${parallaxOffset}px) scale(${scale})`
              : "translateY(0) scale(1)",
            opacity: isMounted ? opacity : 1,
            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          }}
          className="w-full max-w-[1300px]"
        >
          <Image
            src="/images/aero-duel-logo-stacked.svg"
            width={1500}
            height={600}
            className="w-full object-contain"
            alt="Aeroduel Logo"
          />
        </div>
      </div>
    </section>
  );
}
