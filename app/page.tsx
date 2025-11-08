import Image from "next/image";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Diensten from "./components/Diensten";
import DesignThinking from "./components/DesignThinking";
import Review from "./components/Reviews";
import Footer from "./components/Footer";
import ScrollingGallery from "./components/ScrollingGallery";
import ContactSection from "./components/ContactSection";



export default function Home() {
  return (
<main className="text-white bg-gradient-to-b from-[#000000] via-[#050505] to-[#0a0a0a]">

      <Header />
      {/* Hero sectie met achtergrond */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center absolute inset-0 bg-[#000000] bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:40px_40px]"
        
      >

        <div className="flex flex-col items-center justify-center mt-20">
          <h2 className="text-lg font-semibold mb-2">Hallo, ik ben Sefa Yildirim</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
            Full stack developer
          </h1>
          <p className="text-gray-400 max-w-md mb-8">
            Ik maak intuïtieve designs die echt aansluiten bij de gebruikers.
          </p>
        </div>
      </section>

      {/* Onderste tekstsectie */}
<section className="text-left px-10 md:px-20 py-16">
  <div className="max-w-3xl mx-auto leading-snug">
    <p className="text-[1.6rem] md:text-[1.75rem] font-light mb-1">
      Iedereen kan code schrijven.
    </p>
    <p className="text-[1.6rem] md:text-[1.75rem] font-light mb-1">
      Sommigen bouwen een werkende website.
    </p>
    <p className="text-[1.6rem] md:text-[1.75rem] font-light">
      Maar een{" "}
      <span className="text-orange-500 font-semibold">Fullstack Developer</span>{" "}
      brengt ideeën tot leven <br className="hidden md:block" />
      en maakt van functionaliteit een ervaring.
    </p>
  </div>
</section>

<Projects />

<Diensten />
<Review />

<DesignThinking />

<ScrollingGallery />

<ContactSection />

<Footer />



    </main>
  );
}
