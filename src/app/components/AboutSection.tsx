import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      className="flex flex-col items-center text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20
                 bg-[linear-gradient(180deg,#7bf8ff,#110f44,#000000,#000000,#000000,#000000,#000000)] text-shadow-2xs"
    >
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col items-center gap-8">
          <div className="flex-1 space-y-6 text-center w-full max-w-4xl mx-auto">
            <h1 className="text-gray-300 text-shadow-lg text-shadow-black font-xirod text-4xl md:text-5xl mb-8 tracking-wider">
              What is{" "}
              <span className="inline-block font-vipessrg tracking-wider scale-110 md:scale-[1.15] lg:scale-[1.2] origin-center text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] text-shadow-lg">
                Aero
              </span>{" "}
              <span className="inline-block font-vipessrg tracking-wider scale-110 md:scale-[1.15] lg:scale-[1.2] origin-center text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] text-shadow-lg ml-3 md:ml-5 lg:ml-6">
                Duel
              </span>
              ?
            </h1>

            <p className="text-gray-300 font-bold text-lg !text-center !w-full max-w-none text-shadow-lg text-shadow-black">
              Aeroduel merges cutting-edge software engineering with RC model
              aircraft to create an advanced aerial combat system for RC
              aircraft.
            </p>

            <p className="text-gray-300 font-bold text-lg !text-center !w-full max-w-none text-shadow-lg text-shadow-black">
              We're equipping high-performance RC fighter jets with camera
              systems that automatically detect targets equipped with Aero Duel
              detection lights. This allows the aircraft to use advanced
              computer vision to lock onto targets and simulate aerial combat,
              keeping score via a Wi-Fi connection to the host server back on
              the ground.
            </p>

            <p className="text-gray-300 font-bold text-lg !text-center !w-full max-w-none text-shadow-lg text-shadow-black">
              Our mobile app will allow users to register their planes equipped
              with Aeroduel equipment and enter dogfights by scanning a QR code
              or entering a game pin displayed on the host computer. One player
              runs the desktop app while all pilots use the mobile app.
            </p>

            <small className="text-red-700 font-bold block mt-4 !text-center !w-full max-w-none text-shadow-lg text-shadow-black skew-x-[-10deg]">
              * Pilots must be experienced and follow all AMA safety guidelines
              and local laws.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};
