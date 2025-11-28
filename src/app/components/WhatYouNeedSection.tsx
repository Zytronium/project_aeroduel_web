import Image from "next/image";

export function WhatYouNeedSection() {
  return (
    <div className="w-full">
      {/* Title and Image Section */}
      <section className="bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto mb-12">
          <div className="relative flex justify-center w-full">
            <Image
              src="/images/plane-right.svg"
              alt="jet with crosshair"
              width={400}
              height={400}
              className="max-w-[475px] w-full object-contain"
            />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center font-xirod">
            HOW IT WORKS
          </h1>
        </div>
      </section>

      {/* Flow Chart Section */}
      <section className="bg-[radial-gradient(circle,#7bf8ff,#ffffff,#7bf8ff)] text-navy py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 font-xirod text-shadow-lg">
            Along with your plane of choice you will need
          </h1>
        </div>
        <h4 className="font-bold">I will fix this later</h4>
        <Image
          src="/images/flow-chart-placeholder.svg"
          alt="flow chart"
          width={800}
          height={800}
          className="max-w-[800px] w-full object-contain mb-12"
        />
        <h4 className="font-bold text-center md:text-left md:max-w-[90%] lg:max-w-[80%] xl:max-w-[66%]">
          Explore the complete parts list and get all source code{" "}
          <a
            href="/downloads"
            className="text-orange-700 hover:text-orange-900 text-xl font-bold transition-colors duration-300"
          >
            here
          </a>
          .
        </h4>
      </section>

      {/* Arduino Section */}
      <section
        className="text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20
			 bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)]"
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod">
                ESP32 board
                <span className="block text-xl md:text-2xl font-normal">
                  (primary controller)
                </span>
              </h2>
              <p className="text-lg leading-relaxed">
                The ESP32 board serves as the brain of each aircraft. It
                processes input from the H7 Cam Plus camera to detect hits,
                manages plane health and hit confirmations, and communicates
                wirelessly with the base station via the LoRa module. This
                ensures accurate tracking and synchronization during matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LoRa Wifi Receiver Section */}
      <section className="bg-[linear-gradient(-180deg,#7bf8ff,#ffffff,#7bf8ff)] text-navy py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              src="/images/lora-receiver-circle.svg"
              alt="lora wifi receiver"
              width={400}
              height={400}
              className="max-w-[400px] w-full object-contain"
            />
            <div className="flex-1 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod">
                LoRa module
                <span className="block text-xl md:text-2xl font-normal">
                  (long-range low-power transmission)
                </span>
              </h2>
              <p className="text-lg leading-relaxed font-bold">
                The LoRa module provides reliable, long-range wireless
                communication between each plane and the base station. It
                transmits hit data, plane ID information, and game state
                updates, allowing multiple planes to compete in real time
                without interference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Camera Section */}
      <section
        className="text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20
			 bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <Image
              src="/images/camera-circle.svg"
              alt="camera"
              width={400}
              height={400}
              className="max-w-[400px] w-full object-contain"
            />
            <div className="flex-1 text-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod">
                H7 Cam Plus
                <span className="block text-xl md:text-2xl font-normal">
                  (computer vision sensor)
                </span>
              </h2>
              <p className="text-lg leading-relaxed">
                The H7 Cam Plus camera detects colored LEDs on opposing planes
                using onboard computer vision algorithms. When a plane is
                targeted for a sufficient amount of time, the camera signals the
                ESP32 to register a hit, enabling precise, sunlight-resistant
                detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back-end Server Section */}
      <section className="bg-[linear-gradient(-180deg,#7bf8ff,#ffffff,#7bf8ff)] text-navy py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              src="/images/laptop-circle.svg"
              alt="Laptop with Aero Duel server"
              width={400}
              height={475}
              className="max-w-[475px] w-full object-contain"
            />
            <div className="flex-1 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod">
                Aero Duel Server
                <span className="block text-xl md:text-2xl font-normal">
                  (central communication hub)
                </span>
              </h2>
              <p className="text-lg leading-relaxed font-bold">
                The local back-end server collects hit data from all planes via
                the LoRa to ESP32 communication. It manages game logic, plane
                health, and scoring, then pushes real-time updates to connected
                clients using WebSockets, ensuring the scoreboard reflects
                current match status instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phone App Section */}
      <section
        className="text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20
			 bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <Image
              src="/images/phone-app-circle.svg"
              alt="Aero Duel Phone App"
              width={400}
              height={400}
              className="max-w-[375px] w-full object-contain"
            />
            <div className="flex-1 text-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod">
                Aero Duel Phone App
                <span className="block text-xl md:text-2xl font-normal">
                  (live match interface)
                </span>
              </h2>
              <p className="text-lg leading-relaxed">
                The Aero Duel phone app displays the live scoreboard, player
                stats, and match progress. It connects to the back-end server
                over WebSockets, allowing players and spectators to track hits,
                health, and game outcomes in real time on a mobile device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
