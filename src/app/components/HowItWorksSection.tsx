"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ShareCartButton } from "./ShareCartButton";

export function HowItWorksSection() {
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
              className="max-w-[600px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Flow Chart Section */}
      <section className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] text-navy pt-10 px-4 md:px-14 lg:px-16 xl:px-20 flex flex-col items-center pb-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 font-xirod text-shadow-lg text-shadow-white">
            What <span className="text-red-700 font-xirod">you</span> need and
            how it <span className="text-red-700 font-xirod">works!</span>{" "}
          </h1>
        </div>
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
          <Image
            src="/images/flow-chart-final.svg"
            alt="flow chart"
            width={800}
            height={800}
            className="mx-auto w-[500px] md:w-[800px] lg:w-[900px] xl:w-[1000px] object-contain pt-8"
          />
        </div>
      </section>

      {/* ESP32 Section */}
      <section className="bg-[linear-gradient(-180deg,#7bf8ff,#ffffff,#7bf8ff)] text-navy py-16 px-4 md:px-14 lg:px-16 xl:px-20 border-t-16 border-b-16 border-white">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              src="/images/arduino-circle.svg"
              alt="Arduino Board"
              width={400}
              height={400}
              className="max-w-[500px] w-full object-contain"
            />
            <div className="flex-1 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg text-shadow-white font-xirod">
                ESP32 board
                <span className="block text-xl md:text-2xl font-normal">
                  <span className="text-red-700 font-xirod">
                    (primary controller)
                  </span>
                </span>
              </h2>
              <p className="text-lg leading-relaxed font-bold text-shadow-lg text-shadow-white">
                The ESP32 board serves as the brain of each aircraft. It
                processes input from the H7 Cam Plus camera to detect hits,
                manages plane health and hit confirmations, and communicates
                wirelessly with the base station via the LoRa module. This
                ensures accurate tracking and synchronization during matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Camera Section */}
      <section
        className="text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20
             bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] border-t-8 border-b-8 border-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <Image
              src="/images/camera-circle.svg"
              alt="camera"
              width={400}
              height={400}
              className="max-w-[400px] w-full object-contain"
            />
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg text-shadow-black">
                H7 Cam Plus
                <span className="block text-xl md:text-2xl font-normal">
                  <span className="text-red-700 font-xirod">
                    (computer vision sensor)
                  </span>
                </span>
              </h2>
              <p className="text-lg leading-relaxed font-bold text-shadow-lg text-shadow-black">
                The H7 Cam Plus camera detects colored LEDs on opposing planes
                using onboard computer vision algorithms. When a plane is
                targeted for a sufficient amount of time, the camera signals the
                ESP32 to register a hit, enabling precise, sunlight-resistant
                detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LoRa Wifi Receiver Section */}
      <section className="bg-[linear-gradient(-180deg,#7bf8ff,#ffffff,#7bf8ff)] text-navy py-16 px-4 md:px-14 lg:px-16 xl:px-20 border-t-8 border-b-16 border-white">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              src="/images/lora-receiver-circle.svg"
              alt="lora wifi receiver"
              width={400}
              height={400}
              className="max-w-[400px] w-full object-contain"
            />
            <div className="flex-1 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg text-shadow-white font-xirod">
                LoRa module
                <span className="block text-xl md:text-2xl font-normal">
                  <span className="text-red-700 font-xirod">
                    (long-range low-power transmission)
                  </span>
                </span>
              </h2>
              <p className="text-lg leading-relaxed font-bold text-shadow-lg text-shadow-white">
                The LoRa module provides reliable, long-range wireless
                communication between each plane and the base station. It
                transmits hit data, plane ID information, and game state
                updates, allowing multiple planes to compete in real time
                without interference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LED Section */}
      <section
        className="text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20
             bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] border-t-8 border-b-8 border-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <Image
              src="/images/led-circle.svg"
              alt="LED lights"
              width={400}
              height={400}
              className="max-w-[400px] w-full object-contain"
            />
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg text-shadow-black">
                LED Lights
                <span className="block text-xl md:text-2xl font-normal">
                  <span className="text-red-700 font-xirod">
                    (bright lights)
                  </span>
                </span>
              </h2>
              <p className="text-lg leading-relaxed font-bold text-shadow-lg text-shadow-black">
                Each plane has bright colored LEDs on it. Your opponent's camera
                looks for that color during the match. If it keeps the LED in
                view long enough, the system registers a hit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back-end Server Section */}
      <section className="bg-[linear-gradient(-180deg,#7bf8ff,#ffffff,#7bf8ff)] text-navy py-16 px-4 md:px-14 lg:px-16 xl:px-20 border-t-8 border-b-8 border-white">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              src="/images/laptop-circle.svg"
              alt="Laptop with Aero Duel server"
              width={400}
              height={475}
              className="max-w-[475px] w-full object-contain"
            />
            <div className="flex-1 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg text-shadow-white">
                Aero Duel Server
                <span className="block text-xl md:text-2xl font-normal">
                  <span className="text-red-700 font-xirod">
                    (central communication hub)
                  </span>
                </span>
              </h2>
              <p className="text-lg leading-relaxed font-bold text-shadow-lg text-shadow-white">
                The local back-end server collects hit data from all planes via
                the LoRa to ESP32 communication. It manages game logic, plane
                health, and scoring, then pushes real-time updates to connected
                clients using WebSockets, ensuring the scoreboard reflects
                current match status instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phone App Section */}
      <section
        className="text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20
             bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] border-t-8 border-b-16 border-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <Image
              src="/images/phone-app-circle.svg"
              alt="Aero Duel Phone App"
              width={400}
              height={400}
              className="max-w-[375px] w-full object-contain"
            />
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg text-shadow-black">
                Aero Duel Phone App
                <span className="block text-xl md:text-2xl font-normal">
                  <span className="text-red-700 font-xirod">
                    (live match interface)
                  </span>
                </span>
              </h2>
              <p className="text-lg leading-relaxed font-bold text-shadow-lg text-shadow-black">
                The Aero Duel phone app displays the live scoreboard, player
                stats, and match progress. It connects to the back-end server
                over WebSockets, allowing players and spectators to track hits,
                health, and game outcomes in real time on a mobile device.
              </p>
            </div>
          </div>
        </div>

        {/* Explore What You Need Page */}
        <div className="flex justify-center text-center pb-8">
          <h4 className="font-bold text-gray-300 text-center max-w-[90%] lg:max-w-[80%] xl:max-w-[66%] text-shadow-lg text-shadow-black">
            Explore the complete parts list{" "}
            <a
              href="/what-you-need"
              className="inline text-navy hover:text-red-700 text-2xl font-bold transition-colors duration-300"
            >
              <span className="text-2xl md:text-3xl text-shadow-lg hover:text-red-700 text-white text-shadow-black">
                here
              </span>
            </a>
            .
          </h4>
        </div>

        {/*Share Cart Section */}
        <ShareCartButton cartUrl={"https://share-a-cart.com/get/E549G"} />
      </section>
    </div>
  );
}
