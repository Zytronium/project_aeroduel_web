import Logo from "../../../public/logo.png"
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero">
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-darkernavy via-darkernavy/20 to-navy"></div>
      <div className="z-1 px-4 py-2 flex flex-col items-center">
        <h1 className="text-accent text-shadow-lg title flex items-center tracking-wider font-thin">
          AER
          <Image src={Logo} alt="O" className="inline-block h-[1.6em] w-auto mb-3" />
          DUEL
        </h1>
        <p className="subtitle">
          The future of RC aerial combat. Real FPV immersion. Real engineering.
        </p>
        <button className="btn font-bold">Learn More</button>
      </div>
    </section>
  );
}