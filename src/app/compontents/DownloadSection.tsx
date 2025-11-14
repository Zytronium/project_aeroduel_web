export function DownloadSection() {
  return (
    <section id="download" className="mx-4">
      <div className="z-1">
        <h2>Download</h2>
        <p>
          Aeroduel is currently in early development. In the future, you&apos;ll
          be able to download the app for your device to host matches on your
          local network. That app will be available for desktop and/or mobile
          devices.
        </p>
        <div className="flex gap-4 flex-col items-center">
          <h3>Download hosting server</h3>
          <div className="flex gap-4 flex-row">

            <div className="flex flex-col items-center">
              <p>Windows</p>
              <button className="btn" disabled>Coming soon!</button>
            </div>

            <div className="flex flex-col items-center">
              <p>Linux</p>
              <button className="btn" disabled>Coming soon!</button>
            </div>

          </div>

          <h3>Download mobile app</h3>
          <div className="flex gap-4 flex-row">

            <div className="flex flex-col items-center">
              <p>Android</p>
              <button className="btn" disabled>Coming soon!</button>
            </div>

            <div className="flex flex-col items-center">
              <p>iOS</p>
              <button className="btn" disabled>Probably not coming soon</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}