import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

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
