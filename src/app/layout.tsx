import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "../../public/aero-duel-jet-left-logo.svg";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aeroduel: RC Aerial Combat",
  description:
    "Aeroduel is a cutting-edge RC aerial combat system. Real dogfights. Real FPV immersion. Real engineering.",
};

function Header() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800 text-skyblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={Logo} alt="Logo" height={56} />
            </Link>
          </div>

          <div className="hidden md:flex gap-8 ml-auto">
            <Link href="/" className="hover:text-teal transition">
              Home
            </Link>
            <a href="/#about" className="hover:text-teal transition">
              About
            </a>
            <a href="/#features" className="hover:text-teal transition">
              Features
            </a>
            <Link href="/how-it-works" className="hover:text-teal transition">
              How It Works
            </Link>
            <Link href="/what-you-need" className="hover:text-teal transition">
              What You Need
            </Link>
            <a href="#roadmap" className="hover:text-teal transition">
              Roadmap
            </a>
            <a href="#download" className="hover:text-teal transition">
              Download
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="flex justify-center flex-col text-foreground bg-background pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
