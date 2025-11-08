"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    logo: "/sml.png",
    image: "/r1.png",
    name: "Luuk Stijn",
    role: "CEO Ginger Cosmetics",
    title: "Lorem ipsum, dolor sit amet,",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    logo: "/kts.png",
    image: "/r2.png",
    name: "Amber Janssen",
    role: "UX Designer",
    title: "Altijd strak werk,",
    text: "Sefa weet precies wat een project nodig heeft. Zijn gevoel voor design en performance maakt echt het verschil.",
  },
  {
    logo: "/lr.png",
    image: "/r3.png",
    name: "Rik de Boer",
    role: "Frontend Developer",
    title: "Fijn samenwerken,",
    text: "Altijd professioneel, communiceert helder en levert kwaliteit. Werkt snel en precies — wat wil je nog meer?",
  },
];

export default function Reviews() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="text-center mb-16">
        <p className="text-orange-500 uppercase tracking-wider text-sm">
          Wat anderen zeggen
        </p>
        <h2 className="text-4xl font-bold mt-2">Over mij</h2>
      </div>

      <motion.div
        className="flex gap-[200px]"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >
        {[...reviews, ...reviews].map((review, i) => (
          <div
            key={i}
            className="min-w-[950px] flex gap-4 bg-transparent"
          >
            {/* Linkerzijde */}
            <div className="flex flex-col gap-4">
  {/* Bovenste deel: de foto's */}
  <div className="grid grid-cols-2 gap-4 h-[250px]">
    {/* Linker foto */}
    <div className="bg-[#d9d6cf] rounded-xl overflow-hidden">
      <Image
        src={review.logo}
        alt="Logo"
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
    </div>

    {/* Rechter foto */}
    <div className="bg-[#e6e6e6] rounded-xl overflow-hidden">
      <Image
        src={review.image}
        alt={review.name}
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
    </div>
  </div>

  {/* Onderste deel: naam & rol */}
  <div className="bg-[#111] rounded-xl p-6">
    <h3 className="text-white font-bold text-2xl">{review.name}</h3>
    <p className="text-[#ff4d00] text-lg">{review.role}</p>
  </div>
</div>

            {/* Rechterzijde: reviewtekst */}
            <div className="bg-[#141414] rounded-xl p-10 flex flex-col justify-center w-[450px]">
              <h4 className="text-2xl font-bold mb-3">{review.title}</h4>
              <p className="text-gray-300 text-lg leading-relaxed">{review.text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
