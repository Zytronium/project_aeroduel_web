import Image from "next/image";

export function HowItWorksSection() {
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
      <section className="bg-[linear-gradient(-180deg,#7bf8ff,#ffffff,#7bf8ff)] text-navy py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-xirod text-shadow-lg">
          FLOW CHART
        </h1>
        <h4>I will fix this later</h4>
        <Image
          src="/images/flow-chart-placeholder.svg"
          alt="flow chart"
          width={800}
          height={800}
          className="max-w-[800px] w-full object-contain mb-12"
        />
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
                ARDUINO BOARD
              </h2>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg">
                LoRa Wifi Receiver
              </h2>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
              </h2>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod text-shadow-lg">
                Local Back-end Server
              </h2>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
              </h2>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
