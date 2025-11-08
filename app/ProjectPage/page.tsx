import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-[#000000] via-[#050505] to-[#0a0a0a]">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projecten titel</h1>
        <p className="text-gray-400 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
          consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
          quisque faucibus ex sapien vitae pellentesque.
        </p>
      </section>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 pb-20">
        {/* Grote afbeelding */}
        <div className="relative w-full h-96 bg-gray-700 rounded-xl overflow-hidden">
          <Image
            src="/images/project1.jpg"
            alt="Project image"
            fill
            className="object-cover"
          />
        </div>

        {/* Samenvatting rechts */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Samenvatting</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
              consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
              quisque faucibus ex sapien vitae pellentesque. Lorem ipsum dolor
              sit amet consectetur adipiscing elit. Sit amet consectetur
              adipiscing elit quisque faucibus ex.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-1">Projectomvang</h4>
              <p className="text-gray-400">Lorem ipsum</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Gebruikte tools</h4>
              <p className="text-gray-400">Figma, Next.js, Tailwind</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Dienst</h4>
              <p className="text-gray-400">Webdesign</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Datum</h4>
              <p className="text-gray-400">Oktober 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* AFBEELDINGEN GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="relative w-full h-64 bg-gray-700 rounded-xl overflow-hidden"
          >
            <Image
              src={`/images/grid${n}.jpg`}
              alt={`Grid ${n}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* SCHEIDING */}
      <div className="w-full h-10 bg-[#0a0a0a] flex justify-center items-center overflow-hidden">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>

      {/* ONDERWERP SECTIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-24">
        {/* Onderwerp 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Onderwerp</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
              consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
              quisque faucibus ex sapien vitae pellentesque. Lorem ipsum dolor
              sit amet consectetur adipiscing elit. Sit amet consectetur
              adipiscing elit quisque faucibus ex.
            </p>
          </div>
          <div className="relative w-full h-72 bg-gray-700 rounded-xl overflow-hidden">
            <Image
              src="/images/topic1.jpg"
              alt="Onderwerp afbeelding"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Onderwerp 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-72 bg-gray-700 rounded-xl overflow-hidden order-2 md:order-1">
            <Image
              src="/images/topic2.jpg"
              alt="Onderwerp afbeelding"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Onderwerp</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
              consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
              quisque faucibus ex sapien vitae pellentesque. Lorem ipsum dolor
              sit amet consectetur adipiscing elit. Sit amet consectetur
              adipiscing elit quisque faucibus ex.
            </p>
          </div>
        </div>

        {/* Onderwerp 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Onderwerp</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
              consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
              quisque faucibus ex sapien vitae pellentesque. Lorem ipsum dolor
              sit amet consectetur adipiscing elit. Sit amet consectetur
              adipiscing elit quisque faucibus ex.
            </p>
          </div>
          <div className="relative w-full h-72 bg-gray-700 rounded-xl overflow-hidden">
            <Image
              src="/images/topic3.jpg"
              alt="Onderwerp afbeelding"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
