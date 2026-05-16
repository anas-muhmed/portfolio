"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Terminal from "./Terminal";

const SKILLS = [
  { name: "Node.js", color: "#3c873a" },
  { name: "Express", color: "#aaaaaa" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#eeeeee" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "MongoDB", color: "#4db33d" },
  { name: "Docker", color: "#2496ed" },
  { name: "AWS EC2", color: "#ff9900" },
  { name: "AWS S3", color: "#ff9900" },
  { name: "Nginx", color: "#009900" },
  { name: "GitHub Actions", color: "#2088ff" },
  { name: "Linux", color: "#fcc624" },
  { name: "OpenAI API", color: "#10a37f" },
  { name: "REST APIs", color: "#00d4ff" },
];

const STATS = [
  { value: "2+", label: "Years Building", color: "#00d4ff" },
  { value: "100+", label: "API Endpoints Built", color: "#7c3aed" },
  { value: "3", label: "Live Products", color: "#00d4ff" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff1a] to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest">01</span>
          <div className="h-px w-12 bg-[#00d4ff44]" />
          <span className="font-mono text-[#ffffff33] text-xs tracking-widest uppercase">About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              I build systems that{" "}
              <span style={{
                background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                run in production
              </span>
            </h2>

            <div className="space-y-4 mb-10 border-l-2 border-[#00d4ff22] pl-5">
              <p className="text-[#8b949e] text-[15px] leading-relaxed">
                I build backend systems that run in production, not just on localhost. From modular Node.js APIs to Docker containers, automated CI/CD pipelines, and AWS deployments — I care about what happens after the code is written.
              </p>
              <p className="text-[#8b949e] text-[15px] leading-relaxed">
                Currently seeking backend, full-stack, or DevOps roles where real infrastructure matters.
              </p>
            </div>

            {/* Colored skill chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  className="px-3 py-1.5 rounded-lg font-mono text-xs border cursor-default"
                  style={{
                    color: skill.color,
                    borderColor: `${skill.color}28`,
                    background: `${skill.color}08`,
                  }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.035, duration: 0.3 }}
                  whileHover={{ borderColor: `${skill.color}55`, background: `${skill.color}15`, scale: 1.05 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="rounded-xl p-4 text-center border transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.08 }}
                  whileHover={{ background: `${stat.color}08`, borderColor: `${stat.color}22` }}
                >
                  <div className="text-2xl font-black font-mono mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#8b949e] leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <Terminal />
            <div className="mt-4 flex items-center gap-2 justify-center">
              <div className="h-px flex-1 bg-white/[0.04]" />
              <span className="font-mono text-[11px] text-[#ffffff1a] px-3">live terminal simulation</span>
              <div className="h-px flex-1 bg-white/[0.04]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
