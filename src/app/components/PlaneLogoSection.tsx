import Image from "next/image";

export function PlaneLogoSection() {
  return (
    <section
      className="flex flex-col items-center text-skyblue px-4 md:px-14 lg:px-16 xl:px-20
				   bg-[linear-gradient(180deg,#110f44,#7bf8ff,#7bf8ff,#ffffff,#ffffff,#7bf8ff,#7bf8ff)] text-shadow-2xs"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/images/plane-right.svg"
            alt="Plane Logo"
            width={800}
            height={800}
            sizes="(max-width: 768px) 500px, (max-width: 1024px) 600px, (max-width: 1280px) 700px, 800px"
            className="w-[500px] md:w-[500px] lg:w-[600px] xl:w-[700px] object-contain mt-8"
          />
        </div>
      </div>
    </section>
  );
}
