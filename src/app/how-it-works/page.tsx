export default function HowItWorksPage() {
  return (
    <div className="w-full">
      {/* Title and Image Section */}
      <section className="bg-darkernavy text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto">
          <div className="relative flex justify-center w-full">
            <img
              src="/placeholder_img.png"
              alt="jet with crosshair"
              className="w-1/2 object-contain mx-auto"
            />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center font-xirod">
            HOW IT WORKS
          </h1>
        </div>
      </section>

      {/* Flow Chart Section */}
      <section className="bg-teal text-navy py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-xirod">
          FLOW CHART
        </h2>
        <img
          src="/placeholder_img.png"
          alt="flow chart"
          className="w-1/2 object-contain mx-auto mb-12"
        />
      </section>

      {/* Arduino Section */}
      <section className="bg-darkernavy text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/placeholder_img.png"
              alt="Arduino Board"
              className="w-1/2 object-contain"
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
      <section className="bg-teal text-navy py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
              src="/placeholder_img.png"
              alt="lora wifi receiver"
              className="w-1/2 object-contain"
            />
            <div className="flex-1 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod">
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
      <section className="bg-darkernavy text-skyblue py-16 px-4 md:px-14 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/placeholder_img.png"
              alt="camera"
              className="w-1/2 object-contain"
            />
            <div className="flex-1 text-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-xirod">
                CAMERA
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
