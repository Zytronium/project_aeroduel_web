import Image from "next/image";

export function DuelingSection() {
  return (
    <section
      className="flex flex-col items-center text-gray-300 py-16 px-4 md:px-14 lg:px-16 xl:px-20
                 bg-[linear-gradient(-45deg,#000000,#000000,#ad0000,#ad0000,#000000,#000000)] border-t-4 border-b-8 border-red-700"
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
          <div className="flex-1 text-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg text-shadow-black">
              Dueling
              <span className="block text-xl md:text-2xl font-normal"></span>
            </h2>
            <p className="text-lg leading-relaxed text-shadow-lg text-shadow-black">
              Each plane uses an onboard H7 Cam Plus to visually detect colored
              LEDs on the opposing plane. When the camera “locks on” to the
              target color long enough, it registers a hit and sends that data
              in real time to a React-based scoreboard, allowing players to
              track wins, losses, and health.
            </p>
            <p className="font-bold text-center md:text-left md:max-w-[90%] lg:max-w-[80%] xl:max-w-[66%] text-shadow-lg text-shadow-black">
              Learn more about how it works{" "}
              <a
                href="/how-it-works"
                className="inline text-white hover:text-red-700 text-xl font-bold transition-colors duration-300"
              >
                <span className="text-2xl md:text-3xl text-shadow-lg text-shadow-black">
                  here
                </span>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
