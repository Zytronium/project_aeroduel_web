import Image from "next/image";

export function DuelingSection() {
  return (
    <section
      className="flex flex-col items-center text-gray-300 py-8 px-4 md:px-14 lg:px-16 xl:px-20 overflow-x-hidden
                 bg-[linear-gradient(-45deg,#000000,#000000,#ad0000,#ad0000,#000000,#000000)] border-t-4 border-teal"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Image
            src="/images/versus.svg"
            alt="Arduino Board"
            width={400}
            height={400}
            className="max-w-[425px] w-full object-contain px-4 sm:px-0"
          />
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-xirod tracking-wider text-gray-200 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] text-shadow-lg text-shadow-black">
              Duels
            </h1>
            <p className="text-base sm:text-lg text-red-200 leading-relaxed text-shadow-lg text-shadow-black pb-4 mb-4 px-2 sm:px-0">
              Each plane uses an onboard H7 Cam Plus to visually detect colored
              LEDs on the opposing plane. When the camera "locks on" to the
              target color long enough, it registers a hit and sends that data
              in real time to a React-based scoreboard, allowing players to
              track wins, losses, and health.
            </p>
            <p className="font-bold text-center lg:text-left w-full lg:max-w-[90%] xl:max-w-[80%] text-shadow-lg text-shadow-black text-red-200 text-base sm:text-lg px-2 sm:px-0">
              <a
                href="/how-it-works"
                className="inline text-red-200 hover:text-red-700 text-lg sm:text-xl font-bold transition-colors duration-300"
              >
                <span className="text-xl sm:text-2xl md:text-3xl hover:text-orange-700 text-shadow-lg text-shadow-black text-white">
                  Learn{" "}
                </span>
              </a>
              more about how it works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
