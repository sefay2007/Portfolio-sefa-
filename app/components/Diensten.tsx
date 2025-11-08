"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // ← DIT ONTBREEKT

export default function Diensten() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Foto bewegingen
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const rotateLeft = useTransform(scrollYProgress, [0, 1], ["6deg", "3deg"]);
const rotateRight = useTransform(scrollYProgress, [0, 1], ["-6deg", "-3deg"]);


  return (
<section ref={ref} className="relative h-[350vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Linker afbeelding */}
        <motion.div
          style={{ x: leftX, rotate: rotateLeft }}
          className="absolute w-[380px] h-[480px] rounded-2xl overflow-hidden shadow-2xl z-10"
        >
          <Image
            src="/left.png" // jouw linkse afbeelding
            alt="Left"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Rechter afbeelding */}
        <motion.div
          style={{ x: rightX, rotate: rotateRight }}
          className="absolute w-[380px] h-[480px] rounded-2xl overflow-hidden shadow-2xl z-10"
        >
          <Image
            src="/right.png" // jouw rechtse afbeelding
            alt="Right"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Tekst in het midden */}
        <div className="relative text-center z-0">
          <p className="text-orange-500 font-medium tracking-wide mb-2">
            Web design • SEO • Branding
          </p>
          <h2 className="text-6xl font-bold text-white mb-4">Diensten</h2>
          <p className="text-gray-400 mb-6">
            Driven by design, guided by UX
          </p>
          <Link href="/DienstenPagina">
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition">
      Bekijken
    </button>
  </Link>
        </div>
      </div>
    </section>
  );
}
