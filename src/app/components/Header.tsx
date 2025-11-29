"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home", type: "link" as const },
    { href: "/how-it-works", label: "How It Works", type: "link" as const },
    { href: "/what-you-need", label: "What You Need", type: "link" as const },
    { href: "#contact", label: "Download", type: "anchor" as const },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800 text-gray-300 font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/images/plane-right.svg"
              alt="jet logo"
              height={56}
              width={60}
            />
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/images/flashing-logo-text-stacked.gif"
                alt="Logo"
                height={56}
                width={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 ml-auto">
            <Link href="/" className="hover:text-red-700 transition">
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="hover:text-red-700 transition"
            >
              How It Works
            </Link>
            <Link
              href="/what-you-need"
              className="hover:text-red-700 transition"
            >
              What You Need
            </Link>
            <a href="#download" className="hover:text-red-700 transition">
              Contact
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none focus:ring-2 focus:ring-red-700 rounded"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-skyblue transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-skyblue transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-skyblue transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-slate-950/95 backdrop-blur-md z-50 transform transition-all duration-300 ease-in-out border-b border-slate-800 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((item, index) => (
            <div key={index}>
              {item.type === "link" ? (
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-4 px-4 text-skyblue hover:text-red-700 hover:bg-slate-800/50 rounded-lg transition-colors text-lg font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-4 px-4 text-skyblue hover:text-red-700 hover:bg-slate-800/50 rounded-lg transition-colors text-lg font-medium"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
