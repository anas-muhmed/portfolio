"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "DevConnect — Developer Networking Platform",
    tag: "Production · AWS EC2 · Live",
    description:
      "A full-stack developer networking platform featuring modular REST API architecture, production-grade authentication, and cloud-native media handling. Built for scale.",
    archFlow: ["React Frontend", "Express MVC", "MongoDB", "AWS S3", "EC2"],
    techChips: [
      "Node.js", "Express", "React", "MongoDB", "JWT",
      "Docker", "AWS EC2", "AWS S3", "GitHub Actions", "Nginx",
    ],
    liveUrl: "https://devconnectsapp.tech",
    githubUrl: "https://github.com/anas-muhmed",
    stat: "27 REST API Endpoints · Automated CI/CD · Cloud Deployed",
    mockupUrl: "devconnectsapp.tech",
    siteName: "DevConnect",
    screenshot: "/devconnect.png",
  },
  {
    title: "BuildWise — AI System Design Learning Platform",
    tag: "Production · DigitalOcean · Live · AI Powered",
    description:
      "An AI-powered EdTech platform where users visually design system architectures and receive intelligent feedback. Features a custom AI evaluation pipeline built on OpenAI.",
    archFlow: ["Next.js UI", "Node.js API", "OpenAI Engine", "MongoDB", "DigitalOcean"],
    techChips: [
      "Next.js", "Node.js", "MongoDB", "OpenAI API",
      "Docker", "Nginx", "GitHub Actions", "DigitalOcean",
    ],
    liveUrl: "https://buildwise-dev.me",
    githubUrl: "https://github.com/anas-muhmed",
    stat: "AI Evaluation Pipeline · Docker Compose · SSL + Nginx",
    mockupUrl: "buildwise-dev.me",
    siteName: "BuildWise",
    screenshot: "/buildwise.png",
  },
  {
    title: "AI Spend Audit — Subscription Cost Analyser",
    tag: "Production · Vercel · Live · AI Powered",
    description:
      "A full-stack audit tool that analyses AI tool subscriptions and identifies savings through plan optimisation and redundancy detection. Pure-function audit engine with shareable results via slug — no login required. Built in 7 days shaped by 3 real user interviews.",
    archFlow: ["Form Input", "POST /api/audit", "runAudit()", "Anthropic API", "Supabase"],
    techChips: [
      "Next.js 14", "TypeScript", "Tailwind CSS", "Supabase",
      "Anthropic API", "Resend", "Vitest", "GitHub Actions", "Vercel",
    ],
    liveUrl: "https://credex-ai-audit-one.vercel.app",
    githubUrl: "https://github.com/anas-muhmed/credex-ai-audit",
    stat: "4 audit rules · 5 tests passing · 8 AI tools supported · CI/CD on every push",
    mockupUrl: "credex-ai-audit-one.vercel.app",
    siteName: "AI Spend Audit",
    screenshot: "/aispendaudit.png",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed22] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          ref={ref}
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">02</span>
          <div className="h-px w-12 bg-[#00d4ff44]" />
          <span className="font-mono text-[#ffffff44] text-sm tracking-widest uppercase">Projects</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Shipped to{" "}
          <span style={{
            background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Production
          </span>
        </motion.h2>

        <motion.p
          className="text-[#8b949e] text-lg mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Real applications running on real infrastructure — not demo repos.
        </motion.p>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
