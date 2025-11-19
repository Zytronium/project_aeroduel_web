import Logo from "../../../public/two-jets-logo.svg"
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero">
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-darkernavy via-darkernavy/20 to-navy"></div>
      <div className="z-1 px-4 py-2 flex flex-col items-center">
        <Image src={Logo} width={1000} alt="Aeroduel Logo"/>
        <p className="subtitle text-gold">
          The future of RC aerial combat. Real FPV immersion. Real engineering.
        </p>
      </div>
    </section>
  );
}