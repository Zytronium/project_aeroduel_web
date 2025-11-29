import Image from "next/image";

export function DuelingSection() {
  return (
    <section
      className="flex flex-col items-center text-gray-300 py-16 px-4 md:px-14 lg:px-16 xl:px-20
                 bg-[linear-gradient(-45deg,#000000,#000000,#ad0000,#ad0000,#000000,#000000)] border-t-8 border-b-8 md:border-b-[64px] border-white overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/arduino-circle.svg"
            alt="Arduino Board"
            width={400}
            height={400}
            className="max-w-[500px] w-full object-contain"
          />
          <div className="flex-1 text-center md:text-right w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-xirod tracking-wider text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] text-shadow-lg text-shadow-black">
              Dueling
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-shadow-lg text-shadow-black pb-4 mb-4 px-2 md:px-0">
              Each plane uses an onboard H7 Cam Plus to visually detect colored
              LEDs on the opposing plane. When the camera "locks on" to the
              target color long enough, it registers a hit and sends that data
              in real time to a React-based scoreboard, allowing players to
              track wins, losses, and health.
            </p>
            <p className="font-bold text-center md:text-right md:max-w-[90%] lg:max-w-[80%] xl:max-w-[66%] md:ml-auto text-shadow-lg text-shadow-black px-2 md:px-0">
              <a
                href="/how-it-works"
                className="inline text-white hover:text-red-500 text-lg sm:text-xl font-bold transition-colors duration-300 text-shadow-lg"
              >
                <span
                  className="text-2xl md:text-3xl text-shadow-lg pr-2 
                text-shadow-black"
                >
                  Learn
                </span>
              </a>{" "}
              more about how it works .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
