"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import TechGrid from "./TechGrid";

const OrbitalCanvas = dynamic(() => import("./OrbitalCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#00d4ff33] border-t-[#00d4ff] animate-spin" />
    </div>
  ),
});

export default function TechOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="relative py-20 sm:py-28 px-4 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff22] to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest">03</span>
          <div className="h-px w-12 bg-[#00d4ff44]" />
          <span className="font-mono text-[#ffffff33] text-xs tracking-widest uppercase">Stack</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technologies I{" "}
          <span style={{
            background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Work With
          </span>
        </motion.h2>

        <motion.p
          className="text-[#8b949e] text-lg mb-14 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Three layers — core runtime, DevOps infrastructure, and extended tooling.
        </motion.p>

        {/* Desktop: try 3D orbit, fallback inside OrbitalCanvas | Mobile: TechGrid always */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <OrbitalCanvas />
        </motion.div>

        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TechGrid />
        </motion.div>
      </div>
    </section>
  );
}
