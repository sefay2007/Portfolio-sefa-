"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/g1.png",
    "/g2.png",
    "/g3.png",
    "/g4.png",
    "/g5.png",
    "/g6.png",
    "/g7.png",
];

export default function ScrollingGallery() {
  return (
    <section className="w-full overflow-hidden py-10">
      <div className="space-y-8">
        {/* Bovenste rij (rechts naar links) */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={`top-${i}`}
              className="relative aspect-square w-50 flex-shrink-0 overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`image-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Onderste rij (links naar rechts) */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={`bottom-${i}`}
              className="relative aspect-square w-50 flex-shrink-0 overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`image-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
