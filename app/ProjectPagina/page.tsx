import Header from "../components/Header";
import HeroProject from "../components/HeroProject";
import ScrollStackSections from "../components/ScrollStackSections";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


export default function Page() {
  return (
    <main className="bg-gradient-to-b from-[#000000] via-[#050505] to-[#0a0a0a]">
        <Header />
        <HeroProject />
        <ScrollStackSections />
        <ContactSection />
        <Footer />

    </main>
  );
}
