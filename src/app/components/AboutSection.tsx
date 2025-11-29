import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      className="text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20
                 bg-[radial-gradient(circle,#ffffff,#7bf8ff,#ffffff,#7bf8ff)]"
    >
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/images/plane-right.svg"
            alt="Arduino Board"
            width={400}
            height={400}
            className="max-w-[500px] w-full object-contain"
          />

          <div className="flex-1 space-y-6 text-center w-full max-w-4xl mx-auto">
            <h2 className="text-navy text-shadow-lg font-xirod text-4xl md:text-5xl mb-8">
              What is{" "}
              <span className="text-sky-700 font-vipessrg tracking-wider">
                Aero
              </span>{" "}
              <span className="text-red-700 font-vipessrg tracking-wider">
                Duel
              </span>
              ?
            </h2>

            <p className="text-navy font-bold text-lg !text-center !w-full max-w-none">
              Aeroduel merges cutting-edge software engineering with RC model
              aircraft to create an advanced aerial combat system for RC
              aircraft.
            </p>

            <p className="text-navy font-bold text-lg !text-center !w-full max-w-none">
              We're equipping high-performance RC fighter jets with camera
              systems that automatically detect targets equipped with Aero Duel
              detection lights. This allows the aircraft to use advanced
              computer vision to lock onto targets and simulate aerial combat,
              keeping score via a Wi-Fi connection to the host server back on
              the ground.
            </p>

            <p className="text-navy font-bold text-lg !text-center !w-full max-w-none">
              Our mobile app will allow users to register their planes equipped
              with Aeroduel equipment and enter dogfights by scanning a QR code
              or entering a game pin displayed on the host computer. One player
              runs the desktop app while all pilots use the mobile app.
            </p>

            <small className="text-red-700 font-bold block mt-4 !text-center !w-full max-w-none">
              * Pilots must be experienced and follow all AMA safety guidelines
              and local laws.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};
