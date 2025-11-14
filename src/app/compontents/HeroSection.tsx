export function HeroSection() {
  return (
    <section id="hero">
      <div
        className="absolute inset-0 bg-gradient-to-br from-darkernavy via-darkernavy/20 to-navy"></div>
      <div className="z-1 px-4 py-2 flex flex-col items-center">
        <h1 className="text-accent-2 text-shadow-lg">Aeroduel</h1>
        <p>
          The future of RC aerial combat. Real FPV immersion. Real engineering.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </section>
  );
}