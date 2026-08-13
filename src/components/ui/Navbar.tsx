"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRole } from "@/lib/RoleContext";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Arsenal", href: "#arsenal" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { role, setRoleWithTransition } = useRole();

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
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <motion.div 
          initial={{ opacity: 0.1, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg md:text-xl font-headline font-black text-white tracking-widest uppercase truncate"
        >
          Anshuman Tiwari
        </motion.div>

        {/* Toggle + Nav container */}
        <div className="flex items-center gap-4 md:gap-8 ml-auto">
          {/* Animated Toggle Switch */}
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 select-none">
            <button
              onClick={() => setRoleWithTransition("backend")}
              className={cn(
                "relative px-3 py-1 flex items-center justify-center text-[9px] md:text-[10px] font-headline font-bold uppercase tracking-wider cursor-pointer transition-colors duration-300 z-10",
                role === "backend" ? "text-black" : "text-on-surface-variant/40 hover:text-white"
              )}
            >
              {role === "backend" && (
                <motion.div
                  layoutId="activeRoleIndicator"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_12px_rgba(255,180,168,0.6)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              &lt; SOFTWARE DEVELOPER /&gt;
            </button>

            <button
              onClick={() => setRoleWithTransition("analyst")}
              className={cn(
                "relative px-3.5 py-1 flex items-center justify-center text-[9px] md:text-[10px] font-headline font-bold uppercase tracking-wider cursor-pointer transition-colors duration-300 z-10",
                role === "analyst" ? "text-black" : "text-on-surface-variant/40 hover:text-white"
              )}
            >
              {role === "analyst" && (
                <motion.div
                  layoutId="activeRoleIndicator"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_12px_rgba(255,180,168,0.6)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              [ BUSINESS ANALYST ]
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const displayName = link.name === "Arsenal" && role === "analyst" ? "BA Toolkit" : link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-headline text-[11px] tracking-tighter uppercase text-on-surface-variant/60 hover:text-primary transition-colors duration-150"
                >
                  {displayName}
                </a>
              );
            })}
            <a 
              href={role === "analyst" ? "/Anshuman_Tiwari_Resume_BA.pdf" : "/Anshuman_Tiwari_Software_Developer_Resume.pdf"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-container text-white px-6 py-2 font-headline text-xs font-bold tracking-widest uppercase hover:bg-secondary-container transition-all active:scale-95 flex items-center justify-center"
            >
              RESUME
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
              {navLinks.map((link) => {
                const displayName = link.name === "Arsenal" && role === "analyst" ? "BA Toolkit" : link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-headline text-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {displayName}
                  </a>
                );
              })}
              <a 
                href={role === "analyst" ? "/Anshuman_Tiwari_Resume_BA.pdf" : "/Anshuman_Tiwari_Software_Developer_Resume.pdf"} 
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
