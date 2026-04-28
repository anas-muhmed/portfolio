"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

function GithubIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "anassafia.dev@gmail.com",
    href: "mailto:anassafia.dev@gmail.com",
    color: "#00d4ff",
    isLucide: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/anas-muhmed",
    href: "https://github.com/anas-muhmed",
    color: "#ffffff",
    isLucide: false,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/anas-muhmed",
    href: "https://linkedin.com/in/anas-muhmed",
    color: "#0a66c2",
    isLucide: false,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-28 px-4 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff22] to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        {/* Section label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">05</span>
          <div className="h-px w-12 bg-[#00d4ff44]" />
          <span className="font-mono text-[#ffffff44] text-sm tracking-widest uppercase">Contact</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let&apos;s Build{" "}
          <span style={{
            background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Something Real
          </span>
        </motion.h2>

        <motion.p
          className="text-[#8b949e] text-base md:text-lg mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Currently open to backend, full-stack, and DevOps roles across{" "}
          <span className="text-[#ffffff88]">Kerala</span>,{" "}
          <span className="text-[#ffffff88]">Coimbatore</span>, and{" "}
          <span className="text-[#ffffff88]">remote</span>.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 w-full sm:w-auto sm:min-w-[200px]"
              style={{ background: "#111111" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.08 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0,212,255,0.06)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: `${link.color}14`,
                  border: `1px solid ${link.color}22`,
                }}
              >
                <link.icon size={16} color={link.color} />
              </div>
              <div className="text-left flex-1">
                <div className="text-xs font-mono text-[#8b949e] uppercase tracking-wider">{link.label}</div>
                <div className="text-sm text-white font-medium group-hover:text-[#00d4ff] transition-colors truncate">
                  {link.value}
                </div>
              </div>
              <ExternalLink size={12} className="text-[#ffffff22] group-hover:text-[#00d4ff44] flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        {/* Live projects links */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
        >
          {[
            { label: "devconnectsapp.tech", href: "https://devconnectsapp.tech" },
            { label: "buildwise-dev.me", href: "https://buildwise-dev.me" },
          ].map((site) => (
            <a
              key={site.label}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-sm text-[#00d4ff88] hover:text-[#00d4ff] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
              {site.label}
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="border-t border-white/[0.04] pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
        >
          <p className="font-mono text-xs text-[#ffffff22] tracking-wide">
            Built with Next.js · Deployed on Vercel ·{" "}
            <span className="text-[#ffffff33]">© 2026 Muhammed Anas</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
