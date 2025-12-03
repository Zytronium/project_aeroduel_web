"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  IoBatteryCharging,
  IoFlash,
  IoSettings,
  IoCamera,
} from "react-icons/io5";
import { GiTurbine } from "react-icons/gi";
import { BsPlug, BsTools } from "react-icons/bs";
import { HiChip } from "react-icons/hi";

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

      {/* Parts List Section */}
      <section className="bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] text-navy pt-10 px-4 md:px-14 lg:px-16 xl:px-20 flex flex-col items-center pb-16">
        <div className="max-w-6xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 font-xirod text-skyblue text-shadow-lg text-shadow-black">
            A list of the <span className="text-red-500 font-xirod">parts</span>{" "}
            we used and where to get{" "}
            <span className="text-red-500 font-xirod">them!</span>{" "}
          </h1>

          {/* Share-a-Cart Section */}
          <div className="mt-12 p-8 bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] rounded-xl shadow-xl border-2 border-cyan-400">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-vipessrg flex items-center justify-center gap-3 tracking-wide text-shadow-lg text-shadow-black">
                Everything in one cart
              </h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                You can open a single cart containing all the parts needed to
                get started and see an estimated total cost.
              </p>
              <a
                href="https://share-a-cart.com/get/E549G"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[linear-gradient(180deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-xirod"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span>View Complete Cart on Amazon</span>
                <svg
                  className="w-5 h-5"
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
              <p className="text-red-500 text-sm mt-4">
                All the parts we used for one plane • Adjusted quantities •
                Ready to order
              </p>
              <p className="text-white text-lg mt-4 font-xirod text-shadow-lg text-shadow-black">
                Want to browse individually? All items are also linked below.
                Some items come in multi-packs so keep that in mind.
              </p>
            </div>
          </div>

          {/* Parts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Battery */}
            <div className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 overflow-hidden border-2 border-cyan-400/50 opacity-85">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-20 h-20 bg-[linear-gradient(135deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50">
                    <IoBatteryCharging className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-xirod">
                      4S Lipo Battery
                    </h3>
                    <p className="text-sm text-red-700 font-semibold mb-2 font-xirod">
                      Quantity: 2 per plane
                    </p>
                    <p className="text-gray-700 text-sm mb-3 font-bold leading-relaxed">
                      Zeee 14.8V - High discharge rate, lightweight, long cycle
                      life. Powers your RC model with sustained energy.
                    </p>
                    <a
                      href="https://a.co/d/0yennlC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>View on Amazon</span>
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

            {/* EDF Fans */}
            <div className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 overflow-hidden border-2 border-cyan-400/50 opacity-85">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-20 h-20 bg-[linear-gradient(135deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50">
                    <GiTurbine className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-xirod">
                      EDF Ducted Fans
                    </h3>
                    <p className="text-sm text-red-700 font-semibold mb-2 font-xirod">
                      Quantity: 2 per plane
                    </p>
                    <p className="text-gray-700 text-sm mb-3 font-bold leading-relaxed">
                      XFLY-MODEL 45mm 12-Blade with 3S/4S KV5850 Brushless
                      Motor. High-performance jet propulsion system.
                    </p>
                    <a
                      href="https://www.amazon.com/XFLY-MODEL-12-Blade-1511-KV5850-Brushless-Outrunner/dp/B0F24SFG38"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>View on Amazon</span>
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

            {/* ESC */}
            <div className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 overflow-hidden border-2 border-cyan-400/50 opacity-85">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-20 h-20 bg-[linear-gradient(135deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50">
                    <IoFlash className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-xirod">
                      Brushless ESC
                    </h3>
                    <p className="text-sm text-red-700 font-semibold mb-2 font-xirod">
                      Quantity: 2 (one per fan)
                    </p>
                    <p className="text-gray-700 text-sm mb-3 font-bold leading-relaxed">
                      HAWK'S WORK 20A Speed Controller with XT60 & 3.5mm plugs.
                      Connects fans to battery and receiver. Super lightweight.
                    </p>
                    <a
                      href="https://a.co/d/42jFjEs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>View on Amazon</span>
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

            {/* Extension Cables */}
            <div className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 overflow-hidden border-2 border-cyan-400/50 opacity-85">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-20 h-20 bg-[linear-gradient(135deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50">
                    <BsPlug className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-xirod">
                      Extension Cables
                    </h3>
                    <p className="text-sm text-red-700 font-semibold mb-2 font-xirod">
                      Quantity: As needed
                    </p>
                    <p className="text-gray-700 text-sm mb-3 font-bold leading-relaxed">
                      Servo extension cables for fans to stretch across inside
                      the plane. Essential for proper cable management.
                    </p>
                    <a
                      href="https://a.co/d/25Nf96O"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>View on Amazon</span>
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

            {/* Servo Motors */}
            <div className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 overflow-hidden border-2 border-cyan-400/50 opacity-85">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-20 h-20 bg-[linear-gradient(135deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50">
                    <IoSettings className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-xirod">
                      Micro Servo Motors
                    </h3>
                    <p className="text-sm text-red-700 font-semibold mb-2 font-xirod">
                      Quantity: 2 per plane
                    </p>
                    <p className="text-gray-700 text-sm mb-3 font-bold leading-relaxed">
                      Miuzei MG90S 9G Metal Geared Motors. Controls back wing
                      tilt for precision maneuvering. Kit includes 8 servos.
                    </p>
                    <a
                      href="https://a.co/d/8tBsE81"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>View on Amazon</span>
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

            {/* ESP32 Board */}
            <div className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 overflow-hidden border-2 border-cyan-400/50 opacity-85">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-20 h-20 bg-[linear-gradient(135deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50">
                    <HiChip className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-xirod">
                      ESP32 Development Board
                    </h3>
                    <p className="text-sm text-red-700 font-semibold mb-2 font-xirod">
                      Quantity: 1 per plane
                    </p>
                    <p className="text-gray-700 text-sm mb-3 font-bold leading-relaxed">
                      HiLetgo ESP32 with WiFi and Bluetooth. 2.4 GHz dual-mode
                      chip with ultra-low power 40nm technology. Brain of the
                      aircraft.
                    </p>
                    <a
                      href="https://a.co/d/gUpyCbc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>View on Amazon</span>
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

            {/* Dupont Wires */}
            <div className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 overflow-hidden border-2 border-cyan-400/50 opacity-85">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-20 h-20 bg-[linear-gradient(135deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50">
                    <BsTools className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-xirod">
                      Dupont Wire Kit
                    </h3>
                    <p className="text-sm text-red-700 font-semibold mb-2 font-xirod">
                      Quantity: 1 kit
                    </p>
                    <p className="text-gray-700 text-sm mb-3 font-bold leading-relaxed">
                      ELEGOO 120pcs multicolored kit. Essential for Arduino
                      connections. Allows servos to reach the receiver with
                      proper connections.
                    </p>
                    <a
                      href="https://a.co/d/j8GiUQO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>View on Amazon</span>
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

            {/* OpenMV Cam */}
            <div className="bg-[linear-gradient(180deg,#7bf8ff,#ffffff,#7bf8ff)] rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 overflow-hidden border-2 border-cyan-400/50 opacity-85">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-20 h-20 bg-[linear-gradient(135deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/50">
                    <IoCamera className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-xirod">
                      OpenMV H7 Cam Plus
                    </h3>
                    <p className="text-sm text-red-700 font-semibold mb-2 font-xirod">
                      Quantity: 1 per plane
                    </p>
                    <p className="text-gray-700 text-sm mb-3 font-bold leading-relaxed">
                      Machine vision camera for real-world applications. Program
                      in Python for computer vision and target tracking
                      capabilities.
                    </p>
                    <a
                      href="https://a.co/d/0nletG0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>View on Amazon</span>
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
      </section>
    </div>
  );
}
