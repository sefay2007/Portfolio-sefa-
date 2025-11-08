import Header from "../components/Header";
import HeroDiensten from "../components/HeroDiensten";
import Footer from "../components/Footer";
import DienstenScroll from "../components/DienstenScoll";
import HeroIntro from "../components/HeroIntro";


export default function Page() {
  return (
    <main className="bg-gradient-to-b from-[#000000] via-[#050505] to-[#0a0a0a]">
        <Header />
        <HeroDiensten />
        <HeroIntro />
        <DienstenScroll />

        <Footer />

    </main>
  );
}
