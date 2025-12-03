"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function WhatYouNeedSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate how far the section has scrolled past the viewport top
        // When section is at top of viewport, scrollY = 0
        // As you scroll down, scrollY increases
        const relativeScroll = Math.max(0, -rect.top);
        setScrollY(relativeScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax and fade effects
  const parallaxOffset = scrollY * 0.5; // Logo moves at 50% of scroll speed
  const opacity = Math.max(0, Math.min(1, 1 - scrollY / 400)); // Fade out over 400px, but don't go below 0
  const scale = Math.max(0.9, Math.min(1, 1 - scrollY / 800)); // Scale down as you scroll, but don't go below 0.9

  return (
    <div className="w-full">
      {/* Title and Image Section */}
      <section
        ref={sectionRef}
        className="bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44,#7bf8ff,#7bf8ff)] text-navy px-4 md:px-14 lg:px-16 xl:px-20 relative overflow-hidden pt-8"
      >
        <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto mb-12 min-h-[60vh]">
          <div
            className="relative flex justify-center w-full"
            style={{
              transform: isMounted
                ? `translateY(${parallaxOffset}px) scale(${scale})`
                : "translateY(0) scale(1)",
              opacity: isMounted ? opacity : 1,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <Image
              src="/images/plane-white-left.svg"
              alt="jet with crosshair"
              width={400}
              height={400}
              className="max-w-[750px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Flow Chart Section */}
      <section className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] text-navy pt-10 px-4 md:px-14 lg:px-16 xl:px-20 flex flex-col items-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 font-xirod text-shadow-lg text-shadow-white">
            Complete <span className="text-red-700 font-xirod">parts</span> list
            and where to get{" "}
            <span className="text-red-700 font-xirod">them!</span>{" "}
          </h1>
        </div>
      </section>
    </div>
  );
}
