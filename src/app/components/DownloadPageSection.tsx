"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { HeroSection } from "./HeroSection";

export function DownloadPageSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const relativeScroll = Math.max(0, -rect.top);
        setScrollY(relativeScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const opacity = Math.max(0, Math.min(1, 1 - scrollY / 400));
  const scale = Math.max(0.9, Math.min(1, 1 - scrollY / 800));

  return (
    <div className="w-full overflow-x-hidden">
      {/* Title and Image Section */}
      <HeroSection />

      {/* Info Box */}
      <div className="p-6 bg-[linear-gradient(-45deg,#000000,#000000,#110f44,#110f44,#000000,#000000)]">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-sky-500 text-lg sm:text-xl font-xirod text-shadow-lg text-shadow-black px-4 break-words">
            All code is open source and free to use
          </h2>
          <div className="h-4"></div>
          <h4 className="text-red-500 text-lg sm:text-xl font-xirod text-shadow-lg text-shadow-black px-4 break-words">
            Build your own Aero Duel system!
          </h4>
          <div className="h-4"></div>
          <p className="text-red-300 text-sm sm:text-base text-shadow-lg text-shadow-black px-4 break-words">
            Check the repositories for setup instructions, wiring diagrams, and
            code examples
          </p>
        </div>
      </div>

      {/* Download Section */}
      <section className="bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] text-navy pt-10 px-4 md:px-14 lg:px-16 xl:px-20 flex flex-col items-center pb-16 overflow-x-hidden">
        <div className="max-w-6xl mx-auto mb-12 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 font-xirod text-skyblue text-shadow-lg text-shadow-black px-2">
            Download{" "}
            <span className="text-red-500 font-xirod">Source Code</span> and{" "}
            <span className="text-red-500 font-xirod">Resources</span>
          </h2>

          {/* GitHub Repository Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Main Repository */}
            <div className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] opacity-85 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,1),0_0_80px_rgba(6,182,212,0.6)] hover:scale-[1.02] transition-all duration-300 overflow-hidden border-2 border-cyan-400/50">
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="shrink-0 w-16 sm:w-20 h-16 sm:h-20 bg-[linear-gradient(135deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50">
                    <FaGithub className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 font-xirod text-center sm:text-left break-words">
                      Main Repository
                    </h3>
                    <p className="text-xs sm:text-sm text-red-700 font-semibold mb-2 font-xirod text-center sm:text-left">
                      Complete Aero Duel System
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm mb-3 font-bold leading-relaxed text-center sm:text-left break-words">
                      Full source code for the Aero Duel project including
                      aircraft firmware, server, and mobile app.
                    </p>
                    <div className="flex justify-center sm:justify-start">
                      <a
                        href="https://github.com/Aeroduel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#110f44,#0a0833,#110f44)] hover:bg-[linear-gradient(90deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg border border-cyan-400/30"
                      >
                        <span>View on GitHub</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
