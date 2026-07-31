"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted dark:text-muted-dark">{subtitle}</p>
      )}
    </motion.div>
  );
}
