import React from "react";

export default function HeroIntro() {
  return (
    <section className=" flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl">
        I create cool shit and <br className="hidden md:block" /> stunning animations
      </h1>
      <p className="text-gray-400 text-base md:text-lg mt-6 max-w-2xl">
        From high-converting websites to eye-catching motion, I design digital experiences
        that sell and captivate.
      </p>
    </section>
  );
}
