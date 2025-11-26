import Image from "next/image";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-[linear-gradient(-180deg,#110f44,#000000,#000000,#110f44)] text-foreground-2"
    >
      <h2 className="text-skyblue font-xirod text-shadow-lg">Core Features</h2>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-12 justify-center">
        <Image
          src="/box-logo-right.svg"
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
}
