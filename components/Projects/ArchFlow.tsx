"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ArchFlowProps {
  steps: string[];
}

export default function ArchFlow({ steps }: ArchFlowProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 py-3">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-1">
          <motion.span
            className="px-2.5 py-1 rounded-md font-mono text-xs border transition-all duration-300"
            style={{
              background: "rgba(0,212,255,0.06)",
              borderColor: "rgba(0,212,255,0.2)",
              color: "#00d4ff",
            }}
            whileHover={{
              background: "rgba(0,212,255,0.12)",
              borderColor: "rgba(0,212,255,0.4)",
              scale: 1.04,
            }}
          >
            {step}
          </motion.span>
          {i < steps.length - 1 && (
            <ArrowRight size={12} className="text-[#ffffff22] flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}
