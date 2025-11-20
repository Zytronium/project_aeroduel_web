import Image from "next/image";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background-2 text-foreground-2">
      <h2 className="text-sky-200 text-shadow-lg">Core Features</h2>

      <div className="flex flex-row justify-between my-4">
        <Image src="/box-logo-right.svg" alt="Placeholder" height={208} width={161} className="w-1/4 object-contain" />
        <img src="/placeholder_img.png" alt="Placeholder" className="w-2/3 object-contain scale-95" />
      </div>

    </section>
  );
}