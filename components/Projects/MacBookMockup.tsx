"use client";

import Image from "next/image";

interface MacBookMockupProps {
  url: string;
  siteName: string;
  screenshot: string;
}

export default function MacBookMockup({ url, siteName, screenshot }: MacBookMockupProps) {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-sm mx-auto select-none">
      {/* Lid — aspect-ratio based so it scales on all devices */}
      <div
        className="relative rounded-t-xl overflow-hidden border border-white/10"
        style={{
          background: "linear-gradient(180deg, #1c1c1e 0%, #2c2c2e 100%)",
          paddingBottom: "63%",
        }}
      >
        {/* Screen bezel */}
        <div className="absolute inset-0 m-[6%] rounded-lg overflow-hidden bg-[#0a0a0a] flex flex-col">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-2 py-1.5 bg-[#161b22] border-b border-white/[0.06] flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-1.5 rounded bg-[#0d1117] px-1.5 py-0.5 min-w-0">
              <span className="font-mono text-[8px] text-[#8b949e] block truncate">{url}</span>
            </div>
          </div>

          {/* Screenshot — fills remaining height */}
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={screenshot}
              alt={`${siteName} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 340px"
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.5) 100%)",
              }}
            />
          </div>
        </div>

        {/* Camera dot */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#3a3a3c]" />
      </div>

      {/* Hinge */}
      <div
        className="h-1 mx-1"
        style={{ background: "linear-gradient(180deg, #3a3a3c 0%, #2c2c2e 100%)" }}
      />

      {/* Base */}
      <div
        className="rounded-b-lg h-3 mx-1.5"
        style={{ background: "linear-gradient(180deg, #2c2c2e 0%, #1c1c1e 100%)" }}
      />

      {/* Glow under */}
      <div
        className="absolute -bottom-3 left-1/4 right-1/4 h-6 blur-xl opacity-30 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)" }}
      />
    </div>
  );
}
