import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ScrollStackSections() {
  const sections = [
    {
  title: "Astrava Webshop",
  image: "/astrava.png",
  text: "Een moderne e-commerce website ontwikkeld voor Astrava, met een focus op conversie, gebruiksgemak en een strak design. De webshop is volledig responsive en geoptimaliseerd voor een soepele winkelervaring.",
  link: "https://astrava.fr/",
},
{
  title: "EY Klussenbedrijf Website",
  image: "/eyklussenbedrijf.png",
  text: "Een functionele bedrijfswebsite voor EY Klussenbedrijf, ontworpen om vertrouwen uit te stralen en nieuwe klanten aan te trekken. Met duidelijke navigatie, sterke visuele identiteit en contactgerichte UX.",
  link: "https://eyklussenbedrijf.nl/",
},
{
  title: "BrandGuide SalveMundi",
  image: "/sm.png",
  text: "Een visuele brandguide ontwikkeld voor studentenvereniging Salve Mundi. De gids brengt huisstijl, kleuren, typografie en logo’s samen in een consistente merkidentiteit die de kern van de organisatie weerspiegelt.",
  link: "/projecten/salvemundi",
},
{
  title: "SY Webservice Website",
  image: "/sywebservice.png",
  text: "Een professionele website voor SY Webservice met een minimalistisch design, gericht op duidelijkheid en betrouwbaarheid. De site is snel, overzichtelijk en gebouwd om dienstverlening helder te presenteren.",
  link: "https://www.sywebservice.nl/",
},
{
  title: "Picoo",
  image: "/picoo.png",
  text: "Een interactieve webomgeving voor Picoo, een educatieve tech-startup. De website benadrukt innovatie en plezier, met kleurrijke visuals, speelse interacties en een focus op gebruiksvriendelijkheid.",
  link: "https://i557919.hera.fhict.nl/picoo/index.php",
},

  ];

  return (
    <section
      className="relative bg-[#0d0d0d] text-white"
      style={{ height: `${sections.length * 100}vh` }}
    >
      {sections.map((section, i) => (
        <div
          key={i}
          className="bg-[#040404] sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-20 transition-all duration-700 overflow-hidden isolate border-t border-b border-white"
          style={{
            zIndex: i + 1,
          }}
        >
          {/* Linkerblok: content */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-16">
            <h2 className="text-3xl md:text-5xl font-bold text-orange-500">
              {section.title}
            </h2>
            <div className="w-20 h-[2px] bg-gray-500 my-3 mx-auto md:mx-0"></div>
            <p className="mt-4 text-gray-300 max-w-lg mx-auto md:mx-0">
              {section.text}
            </p>

            <Link
              href={section.link}
              className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Bekijk project
            </Link>
          </div>

          {/* Rechterblok: afbeelding */}
<div className="relative w-[90%] md:w-[85%] h-[300px] md:h-[35                                                                                                                                                                            7698888888888888888887  777 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&777777&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77777777777777777777777777777777777                                                                                                                                                                               0     001111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110-0\

px] overflow-hidden shadow-2xl rounded-[28px]">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
