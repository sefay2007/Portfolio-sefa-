"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function DesignThinking() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring motion (maakt de beweging traag en vloeiend)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  // Update muispositie
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative flex flex-col items-center justify-center h-[90vh] overflow-hidden bg-[#0a0a0a] text-white">
      {/* Bewegende bal achter de tekst */}
      <motion.div
  className="absolute w-[250px] h-[250px] rounded-full bg-[#FF4D02] opacity-70  pointer-events-none"
  style={{
    left: 0,
    top: 0,
    x: smoothX,
    y: smoothY,
    translateX: "-125px", // de helft van breedte
    translateY: "-185px", // de helft van hoogte
  }}
/>



      <div className="relative text-center max-w-3xl px-6 z-10">
        <h1 className="text-6xl font-extrabold mb-4">Design thinking</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Elke uitdaging heeft meer dan één antwoord. Daarom verken, test en hervorm ik ideeën tot alles op zijn plek valt.
Ik los niet alleen problemen op — ik analyseer ze.
        </p>
      </div>
    </section>
  );
}
