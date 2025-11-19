import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-background text-foreground">
      <h2 className="text-sky-200 text-shadow-lg">What is Aeroduel?</h2>
      <p>
        Aeroduel merges cutting-edge software engineering with RC model aircraft
        to create the an advanced aerial combat system for RC aircraft.
      </p>
      <p>
        We&apos;re equipping high-performance RC fighter jets with camera systems
        that automatically detect targets equipped with Aeroduel detection lights.
        This allows aircraft to use advanced computer vision to lock onto targets
        and simulate aerial combat, keeping score via a Wi-Fi connection to the
        host server back on the ground. Add FPV cameras and pilots can get a true
        cockpit experience and aim like a pro.
      </p>

      <p>Our mobile app will allow users to register their planes equipped with
      Aeroduel equipment and enter dogfights by scanning a QR code or entering a
      game pin displayed on the host computer. This requires at least one player
      to have our desktop app installed, and all players to have our mobile app
      installed, as well as the proper Aeroduel equipment installed on their
      plane of choice.</p>

      <small>Please note that all pilots must be experienced and confident with
      their aircraft of choice. Pilots must follow all AMA safety guidelines and
      local laws.</small>

      <div className="flex flex-row gap-4 my-4">
        <img src="/placeholder_img.png" alt="Placeholder" className="w-1/2 object-contain" />
        <img src="/placeholder_img.png" alt="Placeholder" className="w-1/2 object-contain" />
      </div>

    </section>
  );
};