import React from "react";
import Image from "next/image";

export default function DienstenScroll() {
  const services = [
    {
      title: "E-Commerce website",
      description:
      "Ik ontwikkel schaalbare e-commerce platforms die niet alleen goed presteren, maar ook converteren. Van gebruiksvriendelijke productpagina’s tot een gestroomlijnde checkout flow — elke stap is ontworpen om de klantbeleving te verbeteren en verkoop te stimuleren. Met een focus op strategie, UX-design en responsive ontwikkeling bouw ik webshops die moeiteloos meegroeien met je merk.",
      tags: ["Shopify", "UX design", "Responsive design", "Checkout flow"],
      image: "/astrava.png",
    },
    {
      title: "Marketing",
      description:
      "Door strategie, design en data te combineren help ik merken groeien.Ik creëer gerichte marketingcampagnes, sterke visuals en gebruiksvriendelijke content die resoneren met de juiste doelgroep.Of het nu gaat om e-mailcampagnes, social media of branding — ik zorg voor een consistente, doelgerichte aanpak die resultaat oplevert.",
      tags: ["SEO", "Campaigns", "Brand strategy", "UX design"],
      image: "/marketing.png",
    },
    {
      title: "SEO",
      description:
      "Een mooie website is pas effectief als mensen hem kunnen vinden.Ik verbeter de online zichtbaarheid van jouw merk via technische optimalisaties, contentstrategie en data-analyse.Van keyword research tot performance audits — elke stap is gericht op duurzame groei en hogere posities in zoekmachines.",
      tags: ["Keyword research", "Content strategy", "Technical SEO", "Analytics"],
      image: "/seo.png",
    },
    {
      title: "Functioneel website",
      description:
        "Ik ontwerp en ontwikkel websites die er niet alleen goed uitzien, maar ook écht werken.Door te focussen op gebruiksvriendelijkheid, snelheid en duidelijke structuur, ontstaat een site die bezoekers aanspreekt én converteert.Elk ontwerp is volledig responsive en gebouwd met oog voor performance en merkidentiteit.",
      tags: ["UX design", "Responsive design", "UI design", "Webflow"],
      image: "/eyklussenbedrijf.png",
    },
    {
      title: "Branding",
      description:
        "Sterke merken beginnen met een duidelijk verhaal en een herkenbare visuele identiteit.Ik help bedrijven bij het definiëren van hun merkstrategie en het vertalen daarvan naar logo’s, kleuren, typografie en tone of voice.Zo ontstaat een consistent merk dat vertrouwen wekt en emotioneel aansluit bij de doelgroep.",
      tags: ["Identity", "Logo design", "Style guides", "Visual storytelling"],
      image: "/sm.png",
    },
  ];

  return (
    <section
      className="relative bg-[#0d0d0d] text-white"
      style={{ height: `${services.length * 100}vh` }}
    >
      {services.map((service, i) => (
        <div
          key={i}
        className="bg-[#040404] sticky top-0 h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 border-t border-b border-white transition-all duration-700 overflow-hidden isolate"
          style={{
            zIndex: i + 1,
          }}
        >
          {/* Linkerblok: tekst */}
          <div className="w-full md:w-1/2 space-y-4 md:pr-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-wide">
              {service.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col gap-1 text-orange-500 font-medium text-sm mt-4">
              {service.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Rechterblok: afbeelding */}
          <div className="rounded-xl overflow-hidden shadow-lg w-full md:w-1/2 mt-8 md:mt-0 bg-[#1a1a1a] flex items-center justify-center">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
