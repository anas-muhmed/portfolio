"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// ── Proper SVG icons ────────────────────────────────────────────────────────

function NodeIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
      <path d="M16 3L3 10.5v11L16 29l13-7.5v-11L16 3z" fill="#3c873a" opacity=".9" />
      <path d="M16 8v16M10 11.5l6 3.5 6-3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28">
      <ellipse cx="16" cy="16" rx="4" ry="4" fill="#61dafb" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.5" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 16 16)" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26">
      <path d="M16 3c-.8 4.5-2.5 7-4 9.5C10 15 9 17.5 9 20c0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.5-1-5-3-7.5C18.5 10 17 7.5 16 3z" fill="#4db33d" />
      <path d="M16 25v4" stroke="#f5f5f5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ExpressIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28">
      <text x="4" y="22" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#aaaaaa">ex</text>
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="#2496ed">
      <rect x="3" y="14" width="5" height="4" rx="0.5" />
      <rect x="9" y="14" width="5" height="4" rx="0.5" />
      <rect x="15" y="14" width="5" height="4" rx="0.5" />
      <rect x="9" y="8" width="5" height="4" rx="0.5" />
      <rect x="15" y="8" width="5" height="4" rx="0.5" />
      <path d="M27 16s-1-2-4-1.5M3 18s3 5 12 4 10-4 10-4" stroke="#2496ed" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function AWSIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28">
      <path d="M9 19l-5 2 5 2" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M23 19l5 2-5 2" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 21h16" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" />
      <text x="7" y="15" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#ff9900">AWS</text>
    </svg>
  );
}

function GHActionsIcon() {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#2088ff" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="4" fill="#2088ff" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="#2088ff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function NginxIcon() {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
      <polygon points="16,3 29,24 3,24" stroke="#009900" strokeWidth="1.5" fill="rgba(0,153,0,0.12)" />
      <text x="10" y="22" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#009900">N</text>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28">
      <rect width="28" height="28" rx="4" fill="#3178c6" />
      <text x="3" y="20" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="900" fill="white">TS</text>
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg viewBox="0 0 28 28" width="26" height="26" fill="none">
      <circle cx="14" cy="14" r="13" fill="#000" stroke="#fff" strokeWidth="1" />
      <path d="M9 19.5V9l13 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 9v7" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
      <ellipse cx="16" cy="12" rx="6" ry="8" fill="#fcc624" />
      <circle cx="13.5" cy="10.5" r="1.2" fill="#333" />
      <circle cx="18.5" cy="10.5" r="1.2" fill="#333" />
      <path d="M13 14s1.5 2 3 0" stroke="#333" strokeWidth="1" strokeLinecap="round" />
      <path d="M10 20l-2 6h4l1-3 3 3 3-3 1 3h4l-2-6s-3 2-6 2-6-2-6-2z" fill="#fcc624" />
    </svg>
  );
}

function OpenAIIcon() {
  return (
    <svg viewBox="0 0 28 28" width="26" height="26" fill="none">
      <circle cx="14" cy="14" r="12" stroke="#10a37f" strokeWidth="1.5" fill="rgba(16,163,127,0.08)" />
      <path
        d="M14 6a8 8 0 0 1 5.66 13.66M14 6a8 8 0 0 0-5.66 13.66M14 22a8 8 0 0 1-5.66-13.66M14 22a8 8 0 0 0 5.66-13.66"
        stroke="#10a37f"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="2.5" fill="#10a37f" />
    </svg>
  );
}

// ── Category data ───────────────────────────────────────────────────────────

interface Tech {
  name: string;
  icon: ReactNode;
  color: string;
}

interface Category {
  label: string;
  accentColor: string;
  hoverBg: string;
  hoverBorder: string;
  hoverGlow: string;
  baseBorder: string;
  techs: Tech[];
}

const CATEGORIES: Category[] = [
  {
    label: "Core Stack",
    accentColor: "#00d4ff",
    hoverBg: "rgba(0,212,255,0.07)",
    hoverBorder: "rgba(0,212,255,0.45)",
    hoverGlow: "0 0 20px rgba(0,212,255,0.2), 0 0 40px rgba(0,212,255,0.08)",
    baseBorder: "rgba(0,212,255,0.12)",
    techs: [
      { name: "Node.js", icon: <NodeIcon />, color: "#3c873a" },
      { name: "React", icon: <ReactIcon />, color: "#61dafb" },
      { name: "MongoDB", icon: <MongoIcon />, color: "#4db33d" },
      { name: "Express", icon: <ExpressIcon />, color: "#aaaaaa" },
    ],
  },
  {
    label: "DevOps",
    accentColor: "#7c3aed",
    hoverBg: "rgba(124,58,237,0.08)",
    hoverBorder: "rgba(124,58,237,0.5)",
    hoverGlow: "0 0 20px rgba(124,58,237,0.2), 0 0 40px rgba(124,58,237,0.08)",
    baseBorder: "rgba(124,58,237,0.14)",
    techs: [
      { name: "Docker", icon: <DockerIcon />, color: "#2496ed" },
      { name: "AWS", icon: <AWSIcon />, color: "#ff9900" },
      { name: "GitHub Actions", icon: <GHActionsIcon />, color: "#2088ff" },
      { name: "Nginx", icon: <NginxIcon />, color: "#009900" },
    ],
  },
  {
    label: "Extended",
    accentColor: "#00d4ff",
    hoverBg: "rgba(0,212,255,0.06)",
    hoverBorder: "rgba(0,212,255,0.4)",
    hoverGlow: "0 0 20px rgba(0,212,255,0.15), 0 0 40px rgba(0,212,255,0.06)",
    baseBorder: "rgba(0,212,255,0.1)",
    techs: [
      { name: "TypeScript", icon: <TypeScriptIcon />, color: "#3178c6" },
      { name: "Next.js", icon: <NextJsIcon />, color: "#ffffff" },
      { name: "Linux", icon: <LinuxIcon />, color: "#fcc624" },
      { name: "OpenAI API", icon: <OpenAIIcon />, color: "#10a37f" },
    ],
  },
];

export default function TechGrid() {
  return (
    <div className="space-y-12 px-1">
      {CATEGORIES.map((cat, ci) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ci * 0.13, duration: 0.5 }}
        >
          {/* Category header */}
          <div className="flex items-center gap-3 mb-5">
            <motion.div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: cat.accentColor }}
              animate={{ boxShadow: [`0 0 4px ${cat.accentColor}`, `0 0 12px ${cat.accentColor}`, `0 0 4px ${cat.accentColor}`] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: ci * 0.5 }}
            />
            <span className="font-mono text-xs tracking-widest uppercase font-semibold" style={{ color: cat.accentColor }}>
              {cat.label}
            </span>
            <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${cat.baseBorder}, transparent)` }} />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cat.techs.map((tech, ti) => (
              <motion.div
                key={tech.name}
                className="relative cursor-default rounded-xl flex flex-col items-center gap-3 py-5 px-3"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${cat.baseBorder}`,
                }}
                initial={{ opacity: 0, y: 16, scale: 0.93 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: ci * 0.1 + ti * 0.07, duration: 0.4, ease: "easeOut" }}
                whileHover={{
                  background: cat.hoverBg,
                  borderColor: cat.hoverBorder,
                  boxShadow: cat.hoverGlow,
                  y: -4,
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10">
                  {tech.icon}
                </div>

                {/* Name */}
                <span className="font-mono text-[11px] text-center font-semibold leading-tight text-[#8b949e] group-hover:text-white transition-colors">
                  {tech.name}
                </span>

                {/* Bottom accent line — appears on hover via CSS since framer can't animate pseudo */}
                <motion.div
                  className="absolute bottom-0 left-1/4 right-1/4 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileHover={{ opacity: 1, scaleX: 1, transition: { duration: 0.25 } }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
