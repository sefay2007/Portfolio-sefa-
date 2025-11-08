"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="w-full text-white py-20 px-6 md:px-16">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
        Laten we connecten
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Afbeelding */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900 p-6 flex items-center justify-center">
          <Image
            src="/contact.png"
            alt="Contact illustratie"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>

        {/* Tekstblok */}
        <div className="max-w-md text-center md:text-left">
          <p className="text-orange-500 text-sm font-medium mb-2">
            Onderneem actie
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Klaar voor een gesprek?
          </h3>
          <p className="text-neutral-300 mb-8">
            Of u nu een project in gedachten heeft, een vraag heeft of gewoon
            even hallo wilt zeggen: ik sta altijd open voor nieuwe kansen en
            connecties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="https://wa.me/31636031788"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition inline-block"
            >
              Stuur bericht
            </Link>
            <button className="border border-neutral-600 text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
