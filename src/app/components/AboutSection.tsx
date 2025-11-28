import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[radial-gradient(circle,#ffffff,#7bf8ff,#ffffff,#7bf8ff)] text-foreground text-center"
    >
      <div>
        <h2 className="text-navy text-shadow-lg font-xirod">
          What is Aero Duel?
        </h2>

        <div className="relative w-full">
          <img
            src="/images/flashing-crosshair.gif"
            alt="Crosshair"
            className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[800px] md:w-[650px] sm:w-[200px] object-contain opacity-20 pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center h-full px-4">
            <p className="text-navy font-bold text-lg text-center mb-6">
              Aeroduel merges cutting-edge software engineering with RC model
              aircraft to create an advanced aerial combat system for RC
              aircraft.
            </p>
            <p className="text-navy font-bold text-lg text-center mb-6">
              We're equipping high-performance RC fighter jets with camera
              systems that automatically detect targets equipped with Aero Duel
              detection lights. This allows the aircraft to use advanced computer
              vision to lock onto targets and simulate aerial combat, keeping
              score via a Wi-Fi connection to the host server back on the
              ground. Add FPV cameras and pilots can get a true cockpit
              experience and aim like a pro.
            </p>
            <p className="text-navy font-bold text-lg text-center mb-6">
              Our mobile app will allow users to register their planes equipped
              with Aeroduel equipment and enter dogfights by scanning a QR code
              or entering a game pin displayed on the host computer. This
              requires at least one player to have our desktop app installed,
              and all players to have our mobile app installed, as well as the
              proper Aeroduel equipment installed on their plane of choice.
            </p>
            <small className="text-navy font-bold text-center mb-6">
              * Please note that all pilots must be experienced and confident
              with their aircraft of choice. Pilots must follow all AMA safety
              guidelines and local laws.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};
