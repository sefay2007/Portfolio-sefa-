"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Astrava Webshop",
      category: "Shopify, E-commerce",
      description:
        "Een moderne e-commerce website ontwikkeld voor Astrava, met een focus op conversie, gebruiksgemak en een strak design. De webshop is volledig responsive en geoptimaliseerd voor een soepele winkelervaring.",
      image: "/astrava.png",
    },
    {
      title: "EY Klussenbedrijf Website",
      category: "React, UI",
      description:
        "Een functionele bedrijfswebsite voor EY Klussenbedrijf, ontworpen om vertrouwen uit te stralen en nieuwe klanten aan te trekken. Met duidelijke navigatie, sterke visuele identiteit en contactgerichte UX.",
      image: "/eyklussenbedrijf.png",
    },
    {
      title: "BrandGuide SalveMundi",
      category: "Branding, UX",
      description:
        "Een visuele brandguide ontwikkeld voor studentenvereniging Salve Mundi. De gids brengt huisstijl, kleuren, typografie en logo’s samen in een consistente merkidentiteit die de kern van de organisatie weerspiegelt.",
      image: "/sm.png",
    },
    {
      title: "SY Webservice Website",
      category: "Web Design, UI/UX",
      description:
        "Een professionele website voor SY Webservice met een minimalistisch design, gericht op duidelijkheid en betrouwbaarheid. De site is snel, overzichtelijk en gebouwd om dienstverlening helder te presenteren.",
      image: "/sywebservice.png",
    },
    {
      title: "Picoo",
      category: "Frontend, Interaction Design",
      description:
        "Een interactieve webomgeving voor Picoo, een educatieve tech-startup. De website benadrukt innovatie en plezier, met kleurrijke visuals, speelse interacties en een focus op gebruiksvriendelijkheid.",
      image: "/picoo.png",
    },
  ];

  return (
    <section id="projecten" className="text-white px-6 md:px-16 py-24">
      <h2 className="text-4xl font-bold mb-10">Projecten</h2>

      <div className="relative">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#ff6600]/60 scrollbar-track-[#0a0a0a] hover:scrollbar-thumb-[#ff6600]/80 transition-all duration-500"
          style={{
            scrollbarColor: "#ff6600 #0a0a0a",
            scrollbarWidth: "thin",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[540px] max-w-[560px] bg-[#0d0d0d] border border-gray-800 rounded-2xl overflow-hidden flex-shrink-0 flex flex-col shadow-md hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative w-full h-90 rounded-t-2xl overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white tracking-wide">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md hover:bg-black/70 border border-gray-700 hover:border-orange-500/70 text-white w-10 h-10 rounded-full items-center justify-center shadow-md transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md hover:bg-black/70 border border-gray-700 hover:border-orange-500/70 text-white w-10 h-10 rounded-full items-center justify-center shadow-md transition-all duration-300"
        >
          →
        </button>
      </div>
    </section>
  );
}
