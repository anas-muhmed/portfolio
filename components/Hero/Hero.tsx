"use client";

import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ width: 700, height: 700, top: "-20%", left: "-15%", background: "rgba(0,212,255,0.06)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ width: 600, height: 600, bottom: "0%", right: "-15%", background: "rgba(124,58,237,0.07)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ width: 400, height: 400, bottom: "10%", left: "35%", background: "rgba(0,212,255,0.04)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: (i % 3) + 1.5,
              height: (i % 3) + 1.5,
              left: `${(i * 4.2 + 2) % 100}%`,
              top: `${(i * 7.3 + 5) % 100}%`,
              background: i % 2 === 0 ? "#00d4ff" : "#7c3aed",
              opacity: 0.15 + (i % 4) * 0.08,
            }}
            animate={{ y: [0, -20 - (i % 3) * 8, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 5 + (i % 4) * 2, repeat: Infinity, ease: "easeInOut", delay: (i % 6) * 0.8 }}
          />
        ))}
      </div>

      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Available badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10 border border-green-500/20 bg-green-500/5"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs font-mono text-green-400 tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-black text-white tracking-tight leading-none mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          Muhammed{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Anas
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <TypewriterText />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-[#8b949e] text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.6 }}
        >
          Code that ships. Infrastructure that scales.
          <br />
          <span className="text-[#ffffff33] text-sm">Node.js · Docker · AWS · CI/CD</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.6 }}
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 rounded-xl font-semibold text-sm text-[#0a0a0a] overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #0099bb)",
              boxShadow: "0 0 40px rgba(0,212,255,0.3), 0 4px 20px rgba(0,212,255,0.2)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <ExternalLink size={15} />
              View My Work
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>

          <a
            href="/AnasResume.pdf"
            download
            className="px-8 py-4 rounded-xl font-semibold text-sm text-white border border-white/10 hover:border-[#00d4ff33] hover:bg-[#00d4ff06] transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>

        {/* Live projects pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          {[
            { label: "devconnectsapp.tech", href: "https://devconnectsapp.tech" },
            { label: "buildwise-dev.me", href: "https://buildwise-dev.me" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.06] font-mono text-[11px] text-[#ffffff33] hover:text-[#00d4ff88] hover:border-[#00d4ff22] transition-all"
            >
              <span className="w-1 h-1 rounded-full bg-[#00d4ff] animate-pulse" />
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-transparent to-[#00d4ff44]"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={13} className="text-[#ffffff22]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
