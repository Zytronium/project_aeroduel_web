import Logo from "../../../public/aero-duel-wide-banner.svg";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)]"
    >
      <div className="fixed top-0 left-0 w-screen h-screen"></div>
      <div className="z-1 px-4 py-2 flex flex-col items-center">
        <Image src={Logo} width={1000} alt="Aeroduel Logo" />
        <p className="subtitle text-gold font-bold">
          {" "}
          {/* Hey that rhymes! */}
          The future of RC aerial combat. Real dogfights. Real FPV immersion.
          Real engineering.
        </p>
      </div>
    </section>
  );
}
