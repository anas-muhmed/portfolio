"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Zap, GitFork, ArrowUpRight } from "lucide-react";
import MacBookMockup from "./MacBookMockup";
import ArchFlow from "./ArchFlow";

interface Project {
  title: string;
  tag: string;
  description: string;
  archFlow: string[];
  techChips: string[];
  liveUrl: string;
  githubUrl: string;
  stat: string;
  mockupUrl: string;
  siteName: string;
  screenshot: string;
  index: number;
}

export default function ProjectCard({
  title,
  tag,
  description,
  archFlow,
  techChips,
  liveUrl,
  githubUrl,
  stat,
  mockupUrl,
  siteName,
  screenshot,
  index,
}: Project) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ borderColor: "rgba(0,212,255,0.18)" }}
    >
      {/* Animated gradient top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), rgba(124,58,237,0.5), transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
      />

      <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:[direction:rtl]"}`}>
        {/* Mockup panel */}
        <div
          className="lg:[direction:ltr] relative p-6 sm:p-8 lg:p-12 flex items-center justify-center overflow-hidden"
          style={{ background: "rgba(0,0,0,0.25)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isEven
                ? "radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)"
                : "radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
            }}
          />
          <MacBookMockup url={mockupUrl} siteName={siteName} screenshot={screenshot} />
        </div>

        {/* Content panel */}
        <div className="lg:[direction:ltr] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00d4ff]" />
            </span>
            <span className="font-mono text-xs text-[#00d4ff88] tracking-widest">{tag}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-snug">
            {title}
          </h3>

          <p className="text-[#8b949e] text-sm leading-relaxed mb-5 border-l-2 border-[#00d4ff18] pl-4">
            {description}
          </p>

          <div className="mb-5">
            <span className="font-mono text-[10px] text-[#ffffff22] uppercase tracking-widest mb-2 block">
              Architecture Flow
            </span>
            <ArchFlow steps={archFlow} />
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {techChips.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md font-mono text-[11px] text-[#8b949e] border border-white/[0.05] bg-white/[0.02] hover:text-white hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-7 px-3 py-2.5 rounded-xl border border-[#00d4ff0f] bg-[#00d4ff05]">
            <Zap size={11} className="text-[#00d4ff] flex-shrink-0" />
            <span className="font-mono text-[11px] text-[#00d4ff66] tracking-wide">{stat}</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#0a0a0a] transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #0099bb)",
                boxShadow: "0 0 20px rgba(0,212,255,0.2)",
              }}
            >
              <ExternalLink size={13} />
              Live Demo
              <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white border border-white/10 hover:border-[#00d4ff33] hover:bg-[#00d4ff06] transition-all hover:scale-105"
            >
              <GitFork size={13} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
