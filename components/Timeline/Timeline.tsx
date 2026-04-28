"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  period: string;
  description: string;
  tags?: string[];
}

const ITEMS: TimelineItem[] = [
  {
    type: "work",
    title: "Full Stack Developer (Self Employed)",
    period: "Apr 2024 – May 2025",
    description:
      "Built DevConnect — production MERN platform on AWS EC2 with automated CI/CD pipeline, Docker containerization, and Nginx reverse proxy. 27 REST API endpoints serving real users.",
    tags: ["MERN", "AWS EC2", "Docker", "CI/CD", "Nginx"],
  },
  {
    type: "work",
    title: "Full Stack Developer (Self Employed)",
    period: "Jul 2024 – Present",
    description:
      "Built BuildWise — AI-powered EdTech platform with OpenAI integration on DigitalOcean. Features a custom AI evaluation pipeline, Docker Compose deployment, and SSL-secured Nginx setup.",
    tags: ["Next.js", "OpenAI", "DigitalOcean", "Docker Compose", "SSL"],
  },
  {
    type: "education",
    title: "BCA Computer Science",
    period: "Aug 2023 – Mar 2026",
    description:
      "IHRD College of Applied Sciences, Chelakkara — Grade B+. Focused on software engineering fundamentals, data structures, algorithms, and full-stack development.",
    tags: ["Computer Science", "BCA", "Grade B+"],
  },
];

function TimelineNode({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isWork = item.type === "work";
  const accentColor = isWork ? "#00d4ff" : "#7c3aed";

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-4 sm:gap-6 md:gap-8"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      {/* Desktop date column */}
      <div className="hidden md:flex flex-col items-end w-36 flex-shrink-0 pt-2">
        <span className="font-mono text-[11px] leading-relaxed text-right" style={{ color: accentColor }}>
          {item.period}
        </span>
      </div>

      {/* Center line + icon */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-10 flex-shrink-0"
          style={{
            background: `${accentColor}14`,
            border: `1px solid ${accentColor}40`,
          }}
          whileHover={{ boxShadow: `0 0 20px ${accentColor}33` }}
        >
          {isWork
            ? <Briefcase size={15} style={{ color: accentColor }} />
            : <GraduationCap size={15} style={{ color: accentColor }} />
          }
        </motion.div>
        {index < ITEMS.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background: `linear-gradient(180deg, ${accentColor}33 0%, transparent 100%)`,
              minHeight: "48px",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 sm:pb-10 min-w-0">
        {/* Mobile date */}
        <span className="md:hidden font-mono text-[11px] block mb-2" style={{ color: accentColor }}>
          {item.period}
        </span>

        <div
          className="p-4 sm:p-6 rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group"
          style={{ background: "rgba(17,17,17,0.8)" }}
        >
          <h3 className="text-white font-semibold text-sm sm:text-base mb-2 group-hover:text-[#00d4ff] transition-colors leading-snug">
            {item.title}
          </h3>
          <p className="text-[#8b949e] text-xs sm:text-sm leading-relaxed mb-4">
            {item.description}
          </p>
          {item.tags && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded font-mono text-[10px] sm:text-xs border border-white/[0.05] text-[#8b949e]"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed22] to-transparent" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest">04</span>
          <div className="h-px w-12 bg-[#00d4ff44]" />
          <span className="font-mono text-[#ffffff33] text-xs tracking-widest uppercase">Experience</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 sm:mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What I&apos;ve{" "}
          <span style={{
            background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Built & Learned
          </span>
        </motion.h2>

        <div>
          {ITEMS.map((item, i) => (
            <TimelineNode key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
