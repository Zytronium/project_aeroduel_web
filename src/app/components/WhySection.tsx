import Image from "next/image";

export function WhySection() {
  return (
    <section
      className="flex flex-col items-center text-sky py-16 px-4 md:px-14 lg:px-16 xl:px-20
				 bg-[linear-gradient(45deg,#000000,#000000,#110f44,#110f44,#000000,#000000)] border-t-16 border-b-8 border-white"
    >
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <Image
            src="/images/arduino-circle.svg"
            alt="Arduino Board"
            width={400}
            height={400}
            className="max-w-[500px] w-full object-contain"
          />
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg text-shadow-black">
              Who is{" "}
              <span className="inline-block font-vipessrg tracking-wider scale-110 md:scale-[1.15] lg:scale-[1.2] origin-center text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] text-shadow-lg pl-4">
                Aero
              </span>
              <span className="inline-block font-vipessrg tracking-wider scale-110 md:scale-[1.15] lg:scale-[1.2] origin-center text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] text-shadow-lg pl-10 pr-8">
                Duel
              </span>
              For?
              <span className="block text-xl md:text-2xl font-normal"></span>
            </h1>
            <p className="text-lg text-sky-200 leading-relaxed pb-6 text-shadow-lg text-shadow-black">
              Hobbyists who enjoy RC aircraft and want interactive game-like
              experiences. Makers, engineers, and students interested in
              combining robotics, IoT, and computer vision. Clubs or groups who
              want competitive RC dogfight matches. Or anyone who wants a
              modular system for plane-vs-plane scoring or drone battle games.
            </p>
            <p className="font-bold text-center lg:text-left lg:max-w-[90%] xl:max-w-[80%] text-shadow-lg text-shadow-black text-sky-200">
              <a
                href="/how-it-works"
                className="inline text-white hover:text-blue-700 text-xl font-bold transition-colors duration-300"
              >
                <span className="text-2xl md:text-3xl">Contact </span>
              </a>
              us to get involved!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
