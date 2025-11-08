import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        
        {/* Logo + intro */}
        <div>
          <h2 className="text-white text-4xl font-bold mb-3">SY</h2>
          <p className="text-sm mb-6">
            Met passie boeiende gebruikerservaringen creëren
          </p>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-black hover:bg-[#ff4d00] hover:text-white transition-all"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-black hover:bg-[#ff4d00] hover:text-white transition-all"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://wa.me/31636031788"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-black hover:bg-[#ff4d00] hover:text-white transition-all"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* Snelle links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Snelle links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#projecten" className="hover:text-[#ff4d00]">Projecten</a></li>
            <li><a href="#over" className="hover:text-[#ff4d00]">Over</a></li>
            <li><a href="#contact" className="hover:text-[#ff4d00]">Contact</a></li>
          </ul>
        </div>

        {/* Ontdekken */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Ontdekken</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#ff4d00]">Project 1</a></li>
            <li><a href="#" className="hover:text-[#ff4d00]">Project 2</a></li>
            <li><a href="#" className="hover:text-[#ff4d00]">Project 3</a></li>
            <li><a href="#" className="hover:text-[#ff4d00]">Project 4</a></li>
            <li><a href="#" className="hover:text-[#ff4d00]">Project 5</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact informatie</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <span>📞</span>
              <a href="tel:+31636031788" className="hover:text-[#ff4d00]">+31 06 36031788</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>✉️</span>
              <a href="mailto:contact@sywebservice.nl" className="hover:text-[#ff4d00]">
                contact@sywebservice.nl
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} | <span className="text-white">SY webservice</span>
      </div>
    </footer>
  );
}
