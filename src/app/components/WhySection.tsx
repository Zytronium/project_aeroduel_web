import Image from "next/image";

export function WhySection() {
  return (
    <section
      className="flex flex-col items-center text-sky py-16 px-4 md:px-14 lg:px-16 xl:px-20
           bg-[linear-gradient(45deg,#000000,#000000,#110f44,#110f44,#000000,#000000)]
           border-t-8 border-b-4 border-red-700"
    >
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <Image
            src="/images/arduino-circle.svg"
            alt="Arduino Board"
            width={400}
            height={400}
            className="max-w-[500px] w-full object-contain"
          />
          <div className="flex-1 text-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg text-shadow-black">
              Who is{" "}
              <span className="text-sky-700 text-4xl md:text-5xl font-vipessrg tracking-wider">
                Aero
              </span>{" "}
              <span className="text-red-700 text-4xl md:text-5xl font-vipessrg tracking-wider">
                Duel
              </span>{" "}
              For?
              <span className="block text-xl md:text-2xl font-normal"></span>
            </h2>
            <p className="text-lg leading-relaxed text-shadow-lg text-shadow-black">
              Hobbyists who enjoy RC aircraft and want interactive game-like
              experiences. Makers, engineers, and students interested in
              combining robotics, IoT, and computer vision. Clubs or groups who
              want competitive RC dogfight matches. Or anyone who wants a
              modular system for plane-vs-plane scoring or drone battle games.
            </p>
            <p className="font-bold text-center md:text-left md:max-w-[90%] lg:max-w-[80%] xl:max-w-[66%]text-shadow-lg text-shadow-black">
              <a
                href="/how-it-works"
                className="inline text-white hover:text-blue-700 text-xl font-bold transition-colors duration-300"
              >
                <span className="text-2xl md:text-3xl text-shadow-lg text-shadow-black">
                  Contact{" "}
                </span>
              </a>
              us to get involved!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
