"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Arsenal", href: "#arsenal" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full px-6 py-4 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0.1, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-headline font-black text-white tracking-widest uppercase"
        >
          Anshuman Tiwari
        </motion.div>


        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-headline text-xs tracking-tighter uppercase text-on-surface-variant/60 hover:text-primary transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/Anshuman_Tiwari_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary-container text-white px-6 py-2 font-headline text-xs font-bold tracking-widest uppercase hover:bg-secondary-container transition-all active:scale-95 flex items-center justify-center"
          >
            RESUME
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-container border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-headline text-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/Anshuman_Tiwari_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-container text-white px-6 py-3 font-headline text-sm font-bold tracking-widest uppercase w-full flex items-center justify-center"
              >
                RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
