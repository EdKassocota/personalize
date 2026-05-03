import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Galeria", path: "/galeria" },
    { name: "Serviços", path: "/servicos" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-bg/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-[#2D3436]" onClick={() => setIsOpen(false)}>
          <div className="w-8 h-8 flex flex-wrap">
            <div className="w-4 h-4 bg-brand-green"></div>
            <div className="w-4 h-4 bg-brand-blue"></div>
            <div className="w-4 h-4 bg-brand-pink"></div>
            <div className="w-4 h-4 bg-brand-yellow"></div>
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase">PERSONALIZE</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-[12px] tracking-[1px] uppercase font-semibold transition-colors hover:text-brand-green py-1",
                  isActive ? "text-[#2D3436] border-b border-brand-green" : "text-[#555555]"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <span className="text-[10px] uppercase tracking-widest bg-[#2D3436] text-white px-3 py-1">Angola</span>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-[#2D3436] focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-brand-bg border-b border-gray-100 shadow-sm py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "text-[12px] tracking-[1px] uppercase font-semibold py-2 transition-colors",
                  isActive ? "text-brand-green" : "text-[#555555]"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
