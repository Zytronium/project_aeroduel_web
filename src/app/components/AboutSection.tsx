import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(-90deg,#7bf8ff,#ffffff,#7bf8ff)] text-foreground"
    >
      <h2 className="text-navy text-shadow-lg font-xirod">What is Aeroduel?</h2>
      <p className="text-navy font-bold text-lg">
        Aeroduel merges cutting-edge software engineering with RC model aircraft
        to create the an advanced aerial combat system for RC aircraft.
      </p>
      <p className="text-navy font-bold text-lg">
        We&apos;re equipping high-performance RC fighter jets with camera
        systems that automatically detect targets equipped with Aeroduel
        detection lights. This allows aircraft to use advanced computer vision
        to lock onto targets and simulate aerial combat, keeping score via a
        Wi-Fi connection to the host server back on the ground. Add FPV cameras
        and pilots can get a true cockpit experience and aim like a pro.
      </p>

      <p className="text-navy font-bold text-lg">
        Our mobile app will allow users to register their planes equipped with
        Aeroduel equipment and enter dogfights by scanning a QR code or entering
        a game pin displayed on the host computer. This requires at least one
        player to have our desktop app installed, and all players to have our
        mobile app installed, as well as the proper Aeroduel equipment installed
        on their plane of choice.
      </p>

      <small className="text-navy font-bold">
        * Please note that all pilots must be experienced and confident with
        their aircraft of choice. Pilots must follow all AMA safety guidelines
        and local laws.
      </small>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-12 mt-12 justify-center">
        <img
          src="/placeholder_img.png"
          alt="Placeholder"
          width={400}
          height={400}
          className="max-w-[475px] w-full object-contain"
        />
        <img
          src="/placeholder_img.png"
          alt="Placeholder"
          width={400}
          height={400}
          className="max-w-[475px] w-full object-contain"
        />
      </div>
    </section>
  );
};
