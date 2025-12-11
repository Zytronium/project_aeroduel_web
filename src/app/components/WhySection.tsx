import Image from "next/image";

export function WhySection() {
  return (
    <section
      className="flex flex-col items-center text-sky py-8 px-4 md:px-14 lg:px-16 xl:px-20 overflow-x-hidden
				 bg-[linear-gradient(45deg,#000000,#000000,#110f44,#110f44,#000000,#000000)] border-t-2 border-b-4 border-teal"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <Image
            src="/images/transmitter-plane.svg"
            alt="RC Transmitter"
            width={400}
            height={400}
            className="max-w-[550px] w-full object-contain px-8"
          />
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg text-shadow-black">
              Who is{" "}
              <span className="block flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-6 mt-2 sm:mt-3">
                <span className="inline-block font-vipessrg tracking-wider scale-100 sm:scale-110 md:scale-[1.15] lg:scale-[1.2] origin-center text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] text-shadow-lg">
                  Aero
                </span>
                <span className="inline-block font-vipessrg tracking-wider scale-100 sm:scale-110 md:scale-[1.15] lg:scale-[1.2] origin-center text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] text-shadow-lg pl-2 sm:pl-6">
                  Duel
                </span>
              </span>
              For?
              <span className="block text-xl md:text-2xl font-normal"></span>
            </h1>
            <p className="text-base sm:text-lg text-sky-200 leading-relaxed pb-6 text-shadow-lg text-shadow-black px-2 sm:px-0">
              Hobbyists who enjoy RC aircraft and want interactive game-like
              experiences. Makers, engineers, and students interested in
              combining robotics, IoT, and computer vision. Clubs or groups who
              want competitive RC dogfight matches. Or anyone who wants a
              modular system for plane-vs-plane scoring or drone battle games.
            </p>
            <p className="font-bold text-center lg:text-left w-full lg:max-w-[90%] xl:max-w-[80%] text-shadow-lg text-shadow-black text-sky-200 text-base sm:text-lg px-2 sm:px-0">
              <a
                href="#contact"
                className="inline text-white hover:text-blue-700 text-lg sm:text-xl font-bold transition-colors duration-300"
              >
                <span className="text-xl sm:text-2xl md:text-3xl">
                  Contact Us{" "}
                </span>
              </a>
              to get involved!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
