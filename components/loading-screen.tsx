"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = ["> installing dependencies", "> compiling components", "> ready"];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, LINES.length - 1));
    }, 380);
    const exitTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1500);
    return () => {
      clearInterval(lineTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-paper dark:bg-ink"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="w-72 font-mono text-sm">
            {LINES.slice(0, lineIndex + 1).map((line, i) => (
              <p key={line} className="text-muted dark:text-muted-dark">
                <span className="text-primary">{line}</span>
                {i === lineIndex && <span className="ml-0.5 animate-blink">▍</span>}
              </p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
