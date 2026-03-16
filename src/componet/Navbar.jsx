import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Bizkimiz", path: "/about" },
    { name: "İletişim", path: "/contact" },
    { name: "projelerimiz", path: "/projects" },
    { name: "Banyo", path: "/banyo" },
    { name: "Gardolap", path: "/gardolap" },
    { name: "Mutfak", path: "/mutfak" },
    { name: "Kapı", path: "/kapi" },
    { name: "TV Ünitesi", path: "/tv-unitesi" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* navbar container */}
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src="/images/logo.png"
              alt="cetinkaya mobilya"
              className="w-20 md:w-24"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm uppercase font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-green-400"
                      : "text-white hover:text-green-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">

          <div className="px-6 py-6 space-y-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm uppercase transition ${
                    isActive
                      ? "text-green-400"
                      : "text-white hover:text-green-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;