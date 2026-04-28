"use client";

import { useEffect, useState, useRef } from "react";

interface TerminalLine {
  type: "command" | "output";
  text: string;
}

const SEQUENCE: TerminalLine[][] = [
  [
    { type: "command", text: "docker build -t devconnect ." },
    { type: "output", text: "✓ Built successfully" },
  ],
  [
    { type: "command", text: "git push origin main" },
    { type: "output", text: "✓ CI pipeline triggered" },
  ],
  [
    { type: "command", text: "nginx -t" },
    { type: "output", text: "✓ Configuration test passed" },
  ],
  [
    { type: "command", text: "ssh ec2-user@production" },
    { type: "output", text: "✓ Connected to AWS EC2" },
  ],
];

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [typing, setTyping] = useState("");
  const [phase, setPhase] = useState<"typing" | "output" | "pause">("typing");
  const [seqIdx, setSeqIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pair = SEQUENCE[seqIdx];
    const command = pair[0].text;
    const output = pair[1];

    if (phase === "typing") {
      if (charIdx < command.length) {
        const t = setTimeout(() => {
          setTyping(command.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setLines((prev) => [...prev, { type: "command", text: command }]);
          setTyping("");
          setPhase("output");
        }, 300);
        return () => clearTimeout(t);
      }
    }

    if (phase === "output") {
      const t = setTimeout(() => {
        setLines((prev) => [...prev, output]);
        setPhase("pause");
      }, 200);
      return () => clearTimeout(t);
    }

    if (phase === "pause") {
      const t = setTimeout(() => {
        const nextIdx = (seqIdx + 1) % SEQUENCE.length;
        if (nextIdx === 0) {
          setLines([]);
        }
        setSeqIdx(nextIdx);
        setCharIdx(0);
        setPhase("typing");
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [phase, charIdx, seqIdx]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, typing]);

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl" style={{
      background: "#0d1117",
      boxShadow: "0 0 40px rgba(0,212,255,0.08), 0 20px 60px rgba(0,0,0,0.5)"
    }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]" style={{ background: "#161b22" }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 font-mono text-xs text-[#8b949e]">
          anas@production:~
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={terminalRef}
        className="p-5 font-mono text-sm leading-7 overflow-y-auto"
        style={{ minHeight: "280px", maxHeight: "320px" }}
      >
        {lines.map((line, i) => (
          <div key={i} className={line.type === "command" ? "text-white" : "text-green-400"}>
            {line.type === "command" ? (
              <span>
                <span className="text-[#00d4ff]">$ </span>
                {line.text}
              </span>
            ) : (
              line.text
            )}
          </div>
        ))}

        {/* Current typing line */}
        {phase === "typing" && (
          <div className="text-white">
            <span className="text-[#00d4ff]">$ </span>
            {typing}
            <span className="cursor-blink text-[#00d4ff]">▋</span>
          </div>
        )}

        {/* Idle cursor */}
        {phase === "pause" && lines.length > 0 && (
          <div className="text-white">
            <span className="text-[#00d4ff]">$ </span>
            <span className="cursor-blink text-[#00d4ff]">▋</span>
          </div>
        )}
      </div>
    </div>
  );
}
