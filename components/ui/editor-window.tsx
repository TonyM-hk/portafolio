"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/content";

const CODE_LINES = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: `name: "${personal.name}",` },
  { indent: 1, text: `role: "Full Stack Developer",` },
  { indent: 1, text: `stack: ["React", "Next.js", "Node.js"],` },
  { indent: 1, text: `location: "${personal.location.en}",` },
  { indent: 1, text: "openToWork: true," },
  { indent: 0, text: "};" },
];

function Highlighted({ text }: { text: string }) {
  const parts = text.split(/("(?:[^"\\]|\\.)*"|\[|\]|\{|\}|:|,)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (/^".*"$/.test(part)) return <span key={i} className="text-primary-500">{part}</span>;
        if (["{", "}", "[", "]"].includes(part)) return <span key={i} className="text-muted dark:text-muted-dark">{part}</span>;
        if (part === "true" || part === "false") return <span key={i} className="text-accent">{part}</span>;
        if (/^(const|developer)$/.test(part.trim()))
          return <span key={i} className="text-purple-500">{part}</span>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default function EditorWindow() {
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    if (lineCount >= CODE_LINES.length) return;
    const timer = setTimeout(() => setLineCount((n) => n + 1), 220);
    return () => clearTimeout(timer);
  }, [lineCount]);

  return (
    <div className="card mx-auto w-full max-w-md overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line bg-mist/60 px-4 py-3 dark:border-line-dark dark:bg-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-xs text-muted dark:text-muted-dark">profile.ts</span>
      </div>
      <div className="min-h-[220px] overflow-x-auto px-5 py-5 font-mono text-[13px] leading-6 sm:text-sm">
        {CODE_LINES.slice(0, lineCount).map((line, i) => (
          <div key={i} style={{ paddingLeft: `${line.indent * 16}px` }} className="whitespace-pre text-ink dark:text-paper">
            <span className="mr-3 select-none text-muted/50 dark:text-muted-dark/50">{String(i + 1).padStart(2, "0")}</span>
            <Highlighted text={line.text} />
            {i === lineCount - 1 && <span className="ml-0.5 animate-blink text-primary">▍</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
