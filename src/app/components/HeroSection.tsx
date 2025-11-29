import Logo from "../../../public/aero-duel-wide-banner.svg";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] py-16 px-4 md:px-14 lg:px-16 xl:px-20 w-full"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-screen-2xl mx-auto gap-8 mb-12">
        <Image
          src="/images/aero-duel-logo-stacked.svg"
          width={1500}
          height={600}
          className="w-full max-w-[1300px] object-contain"
          alt="Aeroduel Logo"
        />
        <p className="subtitle text-sky font-bold">
          {" "}
          {/* Hey that rhymes! */}
          The future of RC aerial combat. Real dogfights. Real FPV immersion.
          Real engineering.
        </p>
      </div>
    </section>
  );
}
