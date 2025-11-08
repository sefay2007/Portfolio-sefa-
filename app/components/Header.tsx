import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-6 z-50 left-10" >
      <div className="flex items-center justify-between space-x-8 border border-gray-600 rounded-full px-8 py-3 bg-black/90 backdrop-blur-md">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 border-r border-gray-600 pr-6">
          <Link href="/" className="text-white font-extrabold text-lg hover:text-orange-500 transition">
            SY
          </Link>
        </div>

        {/* Navigatie */}
        <nav className="flex space-x-8 text-gray-300 font-semibold">
          <Link
            href="/ProjectPagina"
            className="hover:text-orange-500 transition"
          >
            Projecten
          </Link>

          <Link
            href="/DienstenPagina"
            className="hover:text-orange-500 transition"
          >
            Diensten
          </Link>

          <Link
            href="#contact"
            className="hover:text-orange-500 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
