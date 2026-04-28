"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "projects", "tech", "experience", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      style={{
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm font-bold tracking-wider flex items-center gap-2 group"
        >
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-black text-xs font-black"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
          >
            A
          </span>
          <span className="text-white group-hover:text-[#00d4ff] transition-colors">
            anas.dev
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 font-mono text-xs tracking-wide transition-colors rounded-md"
                style={{ color: isActive ? "#00d4ff" : "#8b949e" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-md"
                    style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            );
          })}
          <a
            href="mailto:anassafia.dev@gmail.com"
            className="ml-3 px-4 py-2 rounded-md font-mono text-xs font-semibold text-black transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #00d4ff, #0099bb)" }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`w-5 h-px bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-px bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-px bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/[0.06] overflow-hidden"
            style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-3 py-2.5 font-mono text-sm text-[#8b949e] hover:text-[#00d4ff] transition-colors rounded-md hover:bg-[#00d4ff08]"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:anassafia.dev@gmail.com"
                className="mt-2 px-4 py-2.5 rounded-md font-mono text-sm font-semibold text-black text-center"
                style={{ background: "linear-gradient(135deg, #00d4ff, #0099bb)" }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
