"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Full Stack Developer",
  "Backend Engineer",
  "I Ship to Production",
];

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => {
        setDisplayed(phrase.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <div className="flex items-center gap-0 font-mono text-xl md:text-2xl text-[#00d4ff]">
      <span>{displayed}</span>
      <span className="cursor-blink text-[#00d4ff] ml-0.5">|</span>
    </div>
  );
}
